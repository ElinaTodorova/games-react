import * as request from "../lib/request.js";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
    load: `author=_ownerId:users`
});
  const response = await request.get(`${baseUrl}?${query}`);

  return response;
};

export const create = async (gameId, text, username) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    text,
    username
  });

  return newComment;
};
