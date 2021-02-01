import api from './apiConfig'

export const addFavorite = async (mineral_id, user_id) => {
  const resp = await api.post('/favorite', mineral_id, user_id);
  return resp.data;
}

export const removeFavorite = async (mineral_id, user_id) => {
  const resp = await api.delete('/favorite', mineral_id, user_id);
  return resp.data;
}