// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts', // Valid base URL
  timeout: 5000,
});

export default api;
