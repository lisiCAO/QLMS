import axios from 'axios';

// 基础配置
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api';
const AUTH_BASE_URL = process.env.REACT_APP_API_BASE_URL + '/auth';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // 设置基础 URL
  withCredentials: true, // 允许携带 cookies
});

export const ApiService = {
  // 用户相关 API
  async fetchUsers() {
    const response = await axiosInstance.get('/users');
    return response.data;
  },

  async fetchCurrentUser() {
    const response = await axiosInstance.get('/user');
    return response.data;
  },

  // 认证相关 API
  async login(credentials) {
    const response = await axios.post(`${AUTH_BASE_URL}/login`, credentials, {
      withCredentials: true,
    });
    return response.data;
  },

  async logout() {
    const response = await axios.post(`${AUTH_BASE_URL}/logout`, {}, {
      withCredentials: true,
    });
    return response.data;
  },

  // 其他 API ...
};

export default ApiService;
