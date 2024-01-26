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
      // handle success
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || "An error occurred");
      }
    },
    error => {
      // handle server errors
      if (error.response) {
        // if the server responds with a status code >= 300
        console.error("Backend error:", error.response);
        throw new Error(error.response.data.message || "Backend error");
      } else if (error.request) {
        // request was made but no response was received
        console.error("No response:", error.request);
      } else {
        // something else happened
        console.error("Error:", error.message);
      }
      throw error;
    }
  );
  const ApiService = {
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
    // other service methods
  };
    