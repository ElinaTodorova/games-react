import * as request from "../lib/request.js"

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    });

   return result;
}

export const register = async (userInfo) => {
    const result = await request.post(`${baseUrl}/register`, userInfo);

    return result;
}

export const logout = () => request.get(`${baseUrl}/logout`)
 