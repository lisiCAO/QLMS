const API_BASE_URL = "http://localhost:8000";

const ApiService = {

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
    const response = await fetchWithConfig(`${API_BASE_URL}/user`);
    return handleResponse(response);
  },

  async logout() {
    const response = await fetchWithConfig(`${API_BASE_URL}/logout`, {
      method: "POST",
    });
    return handleResponse(response);
  },
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