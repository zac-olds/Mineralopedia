import api from './apiConfig'

export const getComment = async (mineral_id) => {
  const resp = await api.get(`/minerals/${mineral_id}/comments`);
  return resp.data;
}

export const getOneComment = async(mineral_id, comment_id) => {
  const resp = await api.get(`/minerals/${mineral_id}/comments/${comment_id}`)
  return resp.data
}

export const postComment = async (mineral_id, commentData) => {
  const resp = await api.post(`/minerals/${mineral_id}/comments`, { comment: commentData });
  return resp.data;
}

export const putComment = async (mineral_id, comment_id, commentData) => {
  const resp = await api.put(`/minerals/${mineral_id}/comments/${comment_id}`, { comment: commentData });
  return resp.data;
}

export const deleteComment = async (comment_id) => {
  const resp = await api.delete(`/minerals/:slug/comments/${comment_id}`);
  return resp;
}
