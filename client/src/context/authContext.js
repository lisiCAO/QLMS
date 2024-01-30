import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from './../services/ApiService'; // 确保路径正确

const AuthContext = createContext();

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
        setUser(null);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const userData = await ApiService.login(credentials);
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await ApiService.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
