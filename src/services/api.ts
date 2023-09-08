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

export const getSearchCompaniesPagination = (queryString: string) => {

    return axios.get(`companies?${queryString}`);
}

export const CreateCompany = (name: string, address: string, description: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.post('companies', { name, address, description });
}