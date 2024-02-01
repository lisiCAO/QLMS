import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/ApiService'; // Import the ApiService

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


  const isLoggedIn = user !== null;
  const role = user?.role;

  const value = { user, login, logout, isLoggedIn, role };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


