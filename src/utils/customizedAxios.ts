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
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //console.log("gg", error);

    return error && error.response && error.response.data ?
        error.response.data : Promise.reject(error);
});

export default instance;