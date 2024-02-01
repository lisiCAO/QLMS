import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from "./context/AuthContext";

import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./services/ProtectedRoute";

import TenantLayout from "./pages/tenant/TenantLayout";
import TenantPage from "./pages/tenant/TenantPage";

import LandlordLayout from "./pages/landlord/LandlordLayout";
import PropertyPage from "./pages/landlord/property/PropertyPage";
import LeasePage from "./pages/landlord/lease/LeasePage";
import LandlordTenantPage from "./pages/landlord/tenant/LandlordTenantPage";

function App() {
  return (
    <AuthProvider> {/* Global user state management */}
      <SearchProvider> {/* Global search state management */}
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/" element={<AuthPage />} />
            <Route path="/:view" element={<AuthPage />} />
            {/* Tenant routes */}
            <Route path="/tenant/*" element={
              <ProtectedRoute>
                <TenantLayout>
                  <TenantPage />
                </TenantLayout>
              </ProtectedRoute>
            } />
            {/* Landlord routes */}
            <Route path="/landlord/*" element={<ProtectedRoute><LandlordLayout /></ProtectedRoute>}>
              <Route path="properties/*" element={<PropertyPage />} />
              <Route path="leases/*" element={<LeasePage />} />
              <Route path="tenants/*" element={<LandlordTenantPage />} />
            </Route>
          </Routes>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
