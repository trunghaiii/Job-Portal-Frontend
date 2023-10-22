import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
});

// assign access_token to Bearer header
console.log("OUT");
const access_token = localStorage.getItem("access_token")
instance.defaults.headers.common = {
    'Authorization': `Bearer ${access_token}`
};


const handleRefreshTokenApi = async () => {

    // call refresh token api 
    const userData = await instance.get("auth/refresh")

    return userData

}

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    // // assign access_token to Bearer header
    // console.log("IN");
    // const access_token = localStorage.getItem("access_token")
    // instance.defaults.headers.common = {
    //     'Authorization': `Bearer ${access_token}`
    // };

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // handle case when refresh token expired
    if (error.config
        && error.response
        && +error.response.status === 400 &&
        error.config.url === "auth/refresh") {
        window.location.href = '/login'
    }

    // handle case when access token expired
    if (error.config
        && error.response
        && error.response.status === 401
        && error.config.url !== "auth/login"
    ) {


        const userData = await handleRefreshTokenApi()

        if (userData && userData.data && userData.data.access_token) {
            // assign new access token to bearer header
            error.config.headers.Authorization = `Bearer ${userData.data.access_token}`

            // set new access token to local storage
            localStorage.setItem("access_token", userData.data.access_token)

            // recall api
            return instance.request(error.config);
        }

    }


    return error && error.response && error.response.data ?
        error.response.data : Promise.reject(error);
});

export default instance;