import axios from 'axios';

const baseUrl = 'https://mineralopedia-api.herokuapp.com/';

const api = axios.create({
  baseURL: baseUrl
})

export default api;