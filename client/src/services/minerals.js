import api from './apiConfig'

export const getAllMinerals = async () => {
  const resp = await api.get('/minerals');
  return resp.data;
}

export const getOneMineral = async (id) => {
  const resp = await api.get(`/minerals/${id}`)
  return resp.data
}