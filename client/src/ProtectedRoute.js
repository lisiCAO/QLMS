import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/authContext'; // 请确保路径正确

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
