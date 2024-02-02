import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TenantDashboard from "./../../components/tenant/TenantDashboard"; // Import the TenantDashboard component
import PropertyGeneralList from "./../../components/tenant/PropertyGeneralList";
import PropertyDetail from "./../../components/tenant/PropertyDetail";
import LeaseApplication from "./../../components/tenant/LeaseApplication";
import TenantProfile from "./TenantProfile";
// import MakePayment from "../components/tenant/MakePayment"; //TODO: Uncomment this line after creating the MakePayment component

const TenantPage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TenantDashboard />} /> {/* Render the TenantDashboard component */}
        <Route path="properties" element={<PropertyGeneralList />} />
        <Route path="properties/:id" element={<PropertyDetail />} />
        <Route path="apply-lease" element={<LeaseApplication />} />
        <Route path="profile" element={<TenantProfile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        {/* <Route path="make-payment" element={<MakePayment />} /> NOT NOW*/}
      </Routes>
    </div>
  );
};

export default TenantPage;

