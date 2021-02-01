import axios from 'axios';

const baseUrl = 'https://mineralopedia-api.herokuapp.com/' || "http://localhost:3000/";

const api = axios.create({
  baseURL: baseUrl
})

export default api;