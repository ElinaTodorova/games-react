import * as request from "../lib/request.js";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (gameId) => {
  const response = await request.get(baseUrl);

  return Object.values(response).filter((comment) => comment.gameId === gameId);
};

export const create = async (gameId, text, username) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    text,
    username
  });

  return newComment;
};
