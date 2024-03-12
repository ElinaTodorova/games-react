import * as request from '../lib/request.js';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
 const result = await request.get(baseUrl);

 return Object.values(result);
}

export const create = async (data) => {
    await request.post(baseUrl, data);
}

export const getById = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);

    return result;
}