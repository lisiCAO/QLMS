import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import TenantDashboard from "../components/tenant/TenantDashboard"; // Import the TenantDashboard component
import PropertyList from "../components/tenant/PropertyList";
import PropertyDetail from "../components/tenant/PropertyDetail";
import LeaseApplication from "../components/tenant/LeaseApplication";
import MakePayment from "../components/tenant/MakePayment";

const TenantPage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TenantDashboard />} /> {/* Render the TenantDashboard component */}
        <Route path="properties" element={<PropertyList />} />
        <Route path="properties/:id" element={<PropertyDetail />} />
        <Route path="apply-lease" element={<LeaseApplication />} />
        <Route path="make-payment" element={<MakePayment />} />
      </Routes>
      <Outlet /> {/* Render the nested child routes */}
    </div>
  );
};

export default TenantPage;

