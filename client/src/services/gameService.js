import GameDetails from "../components/games-details/GameDetails.jsx";
import * as request from "../lib/request.js";

const baseUrl = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const create = async (data) => {
  await request.post(baseUrl, data);
};

export const getById = async (id) => {
  const result = await request.get(`${baseUrl}/${id}`);

  return result;
};

export const edit = async (gameId, gameData) => {
  const result = await request.put(`${baseUrl}/${gameId}`, gameData);

  return result;
};

export const deleteGame = async (gameId) => {
  await request.remove(`${baseUrl}/${gameId}`);
};
