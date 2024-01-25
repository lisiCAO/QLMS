import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
    response => {
      // 处理成功响应
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || "An error occurred");
      }
    },
    error => {
      // 处理网络或其他错误
      if (error.response) {
        // 服务器有响应，但状态码不在 2xx 范围内
        console.error("Backend error:", error.response);
        throw new Error(error.response.data.message || "Backend error");
      } else if (error.request) {
        // 请求已发出，但没有收到响应
        console.error("No response:", error.request);
      } else {
        // 请求设置触发了错误
        console.error("Error:", error.message);
      }
      throw error;
    }
  );
  const ApiService = {
    fetchUsers: async () => {
      try {
        const response = await axiosInstance.get('/users');
        return response;
      } catch (error) {
        // 这里可以处理或记录错误
        console.error("Failed to fetch users:", error.message);
        throw error;
      }
    },
    // 其他 API 方法...
  };
    