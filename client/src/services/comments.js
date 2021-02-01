import api from './apiConfig'

export const postComment = async (mineral_id, commentData) => {
  const resp = await api.post(`/minerals/${mineral_id}/comments`, { commentData });
  return resp.data;
}


export const putComment = async (mineral_id, id, commentData) => {
  const resp = await api.put(`/minerals/${mineral_id}/comments/${id}`, { commentData });
  return resp.data;
}

export const deleteComment = async (mineral_id, id) => {
  const resp = await api.delete(`/minerals/${mineral_id}/comments/${id}`);
  return resp;
}
