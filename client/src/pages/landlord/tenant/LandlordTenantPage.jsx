// LandlordTenantPage.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import TenantList from "../components/landlord/TenantList";
import TenantCreate from "../components/landlord/TenantCreate";
import TenantEdit from "../components/landlord/TenantEdit";
import TenantDelete from "../components/landlord/TenantDelete";

const LandlordTenantPage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TenantList />} />
        <Route path="create" element={<TenantCreate />} />
        <Route path="edit/:id" element={<TenantEdit />} />
        <Route path="delete/:id" element={<TenantDelete />} />
      </Routes>
      <Outlet /> 
    </div>
  );
};

export default LandlordTenantPage;
