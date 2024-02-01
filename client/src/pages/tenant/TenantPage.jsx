import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PropertyList from "../components/tenant/PropertyList";
import PropertyDetail from "../components/tenant/PropertyDetail";
import LeaseApplication from "../components/tenant/LeaseApplication";
import MakePayment from "../components/tenant/MakePayment";

const TenantPage = () => {
  return (
    <div>
      {/* 可以放置租户页面共享的 UI，比如导航链接等 */}
      <Routes>
        <Route index element={<PropertyList />} />
        <Route path="properties/:id" element={<PropertyDetail />} />
        <Route path="apply-lease" element={<LeaseApplication />} />
        <Route path="make-payment" element={<MakePayment />} />
      </Routes>
      <Outlet /> {/* 用于可能的进一步嵌套 */}
    </div>
  );
};

export default TenantPage;
