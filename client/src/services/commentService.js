import * as request from "../lib/request.js";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (gameId) => {
  const response = await request.get(baseUrl);

  return response.filter((game) => game._id === gameId);
};

export const create = async (gameId, text) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    text,
  });

  return newComment;
};
