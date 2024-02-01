import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar'; 
import { Outlet } from 'react-router-dom';

const TenantLayout = () => {
  return (
    <div className="tenant-layout">
      <Sidebar />
      <div className="tenant-content">
        <Topbar />
        <div className="dynamic-content">
          <Outlet /> {/* Tenant child route */}
        </div>
      </div>
    </div>
  );
};

export default TenantLayout;

