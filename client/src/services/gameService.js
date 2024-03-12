import * as request from '../lib/request.js';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => {
 const result = await request.get(baseUrl);

 return result
}