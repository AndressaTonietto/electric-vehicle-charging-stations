import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openchargemap.io/v3/',
});

api.defaults.headers['X-API-Key'] = 'd19262ed-4eb3-44d8-87ce-e854627e13f8';

export default api;
