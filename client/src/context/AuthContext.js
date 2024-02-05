import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import ApiService from '../services/ApiService'; // Import the ApiService
import Cookies from 'js-cookie';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await ApiService.fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        this.logout();
      } finally {
        setIsAuthInitialized(true);
      }
    };
    initializeAuth();
    const intervalId = setInterval(() => {
      updateUser();
    }, 1000 * 60 * 5);
    return () => clearInterval(intervalId);
  }, []);
  
  const updateUser = async () => {
    try {
      const currentUser = await ApiService.fetchCurrentUser();
      setUser(currentUser);
    } catch (error) {
      this.logout();
    }
  };

  const value = useMemo(() => ({
    user,
    isAuthInitialized,
    login: async (credentials) => {
      try {
        const response = await ApiService.login(credentials);
        setUser(response);
        return response;
      } catch (error) {
        throw error;
      }
    },
    logout: async () => {
      try {
        const response = await ApiService.logout();
        setUser(null);
        Cookies.remove('jwt');
        return response;
      } catch (error) {
        throw error;
      }
    },
    isLoggedIn: !!user,
    updateUser
  }), [user, isAuthInitialized]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};