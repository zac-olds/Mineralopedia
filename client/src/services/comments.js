import api from './apiConfig'

export const postComment = async (mineral_id, commentData) => {
  const resp = await api.post(`/minerals/${mineral_id}/comments`, { comment: commentData });
  return resp.data;
}

export const putComment = async (mineral_id, user_id, commentData) => {
  const resp = await api.put(`/minerals/${mineral_id}/comments/${user_id}`, { comment: commentData });
  return resp.data;
}

export const deleteComment = async (mineral_id, user_id) => {
  const resp = await api.delete(`/minerals/${mineral_id}/comments/${user_id}`);
  return resp;
}
