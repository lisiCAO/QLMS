import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./services/ProtectedRoute";

import TenantLayout from "./pages/tenant/TenantLayout";
import TenantDashboard from "./components/tenant/TenantDashboard";
import PropertyGeneralList from "./components/tenant/PropertyGeneralList";
import PropertyDetail from "./components/tenant/PropertyDetail";
import LeaseApplication from "./components/tenant/LeaseApplication";
import TenantProfile from "./pages/tenant/TenantProfile";

import LandlordLayout from "./pages/landlord/LandlordLayout";
import PropertyPage from "./pages/landlord/property/PropertyPage";
import LeasePage from "./pages/landlord/lease/LeasePage";
import LandlordTenantPage from "./pages/landlord/tenant/LandlordTenantPage";

function App() {
  return (
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/" element={<AuthPage />} />
            <Route path="/:view" element={<AuthPage />} />
            {/* Tenant routes */}
            <Route path="/tenant/*" element={<TenantLayout />}>
              
              <Route index element={<TenantDashboard />} />
              <Route path="properties" element={<PropertyGeneralList />} />
              <Route path="properties/:id" element={<PropertyDetail />} />
              <Route path="apply-lease" element={<LeaseApplication />} />
              <Route path="profile" element={<TenantProfile />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              
            </Route>
            {/* Landlord routes */}
            <Route path="/landlord/*" element={<LandlordLayout />}>
              <Route path="properties/*" element={<PropertyPage />} />
              <Route path="leases/*" element={<LeasePage />} />
              <Route path="tenants/*" element={<LandlordTenantPage />} />
            </Route>
          </Routes>
        </Router>
  );
}

export default App;
