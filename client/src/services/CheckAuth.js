import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CheckAuth = () => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const redirectTo = user.role === 'tenant' ? '/tenant/' : '/landlord/';
  return <Navigate to={redirectTo} replace />;
};

export default CheckAuth;
