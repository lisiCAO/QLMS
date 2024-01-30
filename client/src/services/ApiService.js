import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 确保所有请求都带有cookie
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response.data.data; // 直接返回data字段，以便在成功响应时获取实际的数据
    } else {
      throw new Error(response.data.message || "An error occurred");
    }
  },
  error => {
    // 统一错误处理
    console.error("Error:", error.response?.data?.message || error.message);
    throw error;
  }
);
export const ApiService = {
  login: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/login', userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // add register method
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // add logout method
  forgotPassword: async (email) => {
    try {
      const response = await axiosInstance.post('/auth/forgot-password', { email });
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchUsers: async () => {
    try {
      const response = await axiosInstance.get('/users');
      return response;
    } catch (error) {
      // handle error
      console.error("Failed to fetch users:", error.message);
      throw error;
    }
  },
  loginWithGoogle: async () => {
    try {
      const response = await axiosInstance.get('/auth/google');
      return response;
    } catch (error) {
      throw error;
    }
  }
  // other service methods
};