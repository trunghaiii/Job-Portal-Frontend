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

export const getAllCompanies = () => {

    return axios.get(`companies`);
}

export const CreateCompany = (name: string, address: string, description: string, logo: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.post('companies', { name, address, description, logo });
}

export const UpdateCompany = (id: string, name: string, address: string, description: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.patch(`companies/${id}`, { name, address, description });
}

export const deleteCompany = (id: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.delete(`companies/${id}`);
}

export const getSearchUsersPagination = (queryString: string) => {

    return axios.get(`users?${queryString}`);
}

export const createUser = (
    name: string,
    email: string,
    password: string,
    age: number,
    gender: string,
    address: string,
    role: string,
    companyID: string,
    companyName: string
) => {

    return axios.post(`users`, {
        name, email, password, age, gender, address, role,
        company: {
            id: companyID,
            name: companyName
        }
    });
}

export const updateUser = (
    _id: string,
    name: string,
    age: number,
    gender: string,
    address: string,
    role: string
) => {

    return axios.patch(`users`, {
        _id, name, age, gender, address, role
    });
}

export const deleteUser = (userID: string) => {

    return axios.delete(`users/${userID}`);
}

export const uploadImage = (file: any, folderName: string) => {
    //const params = new URLSearchParams({ username, password });
    const data = new FormData();
    data.append('haifile', file);

    return axios.post('files/upload', data, {
        headers: {
            folder_name: folderName
        }
    });
}

export const getSearchJobsPagination = (queryString: string) => {

    return axios.get(`jobs?${queryString}`);
}

export const getJobDetail = (id: string) => {

    return axios.get(`jobs/${id}?populate=company`);
}

export const createNewJob = (jobData: any) => {

    return axios.post(`jobs`, jobData);
}

export const updateJob = (id: string, jobData: any) => {

    return axios.patch(`jobs/${id}`, jobData);
}

export const deleteJob = (id: string) => {
    //const params = new URLSearchParams({ username, password });
    return axios.delete(`jobs/${id}`);
}

export const createResume = (resumeData: any) => {

    return axios.post(`resumes`, resumeData);
}

export const getSearchResumePagination = (queryString: string) => {

    return axios.get(`resumes?${queryString}`);
}

export const changingStatus = (id: string, status: string) => {

    return axios.patch(`resumes/${id}`, { status });
}