import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar'; 
import { Outlet } from 'react-router-dom';

const LandlordLayout = () => {
  return (
    <div className="landlord-layout">
      <Sidebar />
      <div className="landlord-content">
        <Topbar />
        <div className="dynamic-content">
          <Outlet /> {/* Landlord child route */}
        </div>
      </div>
    </div>
  );
};

export default LandlordLayout;

