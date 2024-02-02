const API_BASE_URL = "http://localhost:8000";

const ApiService = {
  /* Posts */
  createProperty: async (formData) => {
    const response = await fetchWithConfig(`${API_BASE_URL}/api/properties`, {
      method: 'POST',
      body: formData,
      // Do not set 'Content-Type': 'application/json' when sending FormData
      // The browser will set the correct multipart/form-data boundary.
      credentials: 'include', // if needed for cookies/CORS
    });
    const data = await handleResponse(response);
    return data;
  },

  /* Auth */
  async login(credentials) {
    const response = await fetchWithConfig(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const data = await handleResponse(response);
    return data;
  },

  async fetchCurrentUser() {
    const response = await fetchWithConfig(`${API_BASE_URL}/api/users/userinfo`);
    return handleResponse(response);
  },

  async logout() {
    const response = await fetchWithConfig(`${API_BASE_URL}/auth/logout`);
    return handleResponse(response);
  },

  async register(userData) {
    const response = await fetchWithConfig(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const data = await handleResponse(response);
    return data;
  },

  async fetchProperties() {
    const response = await fetchWithConfig(`${API_BASE_URL}/api/properties`, {
      method: "GET"
    });
    const data = await handleResponse(response);
    return data;
  }
  // other APIs
};

// Default Option
const fetchWithConfig = (url, options = {}) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  return fetch(url, { ...defaultOptions, ...options });
};

const handleResponse = async (response) => {
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || "An error occurred");
    }
  } else {
    // non JSON response
    const text = await response.text();
    throw new Error(`Non-JSON response: ${text}`);
  }
};

export default ApiService;