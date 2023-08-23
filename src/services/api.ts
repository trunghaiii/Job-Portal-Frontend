import axios from "../utils/customizedAxios"

export const login = (username: string, password: string) => {
    axios.post('/auth/login', { username, password });
}