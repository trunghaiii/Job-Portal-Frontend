import axios from "../utils/customizedAxios"

export const login = (username: string, password: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.post('auth/login', { username, password });
}

export const getUserDataAccount = () => {
    //const params = new URLSearchParams({ username, password });
    return axios.get('auth/account');
}

export const Logout = () => {
    //const params = new URLSearchParams({ username, password });
    return axios.post('auth/logout');
}