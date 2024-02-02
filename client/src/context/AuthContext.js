import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/ApiService'; // Import the ApiService

const AuthContext = createContext();
/* TODO: fix with actual logic */
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await ApiService.fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      }
    };
    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await ApiService.login(credentials);
      console.log('Login response:', response);
      setUser(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await ApiService.logout();
      setUser(null);
      return response;
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const isLoggedIn = user !== null;
  const role = user?.role;

  const value = { user, login, logout, isLoggedIn, role };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};