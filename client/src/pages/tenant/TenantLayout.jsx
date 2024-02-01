import React from 'react';
import TenantNavbar from '../../components/tenant/TenantNavbar'; // Import the TenantNavbar component
import { Outlet } from 'react-router-dom';

const TenantLayout = () => {
  return (
    <div className="tenant-layout">
      <TenantNavbar /> 
      <div className="tenant-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default TenantLayout;


