import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/authContext'; // Import AuthProvider
import AuthPage from "./pages/AuthPage";
import CreateProperty from "./components/properties/CreateProperty";
import ListOfProperties from "./components/properties/ListOfProperties";
import ProtectedRoute from "./services/ProtectedRoute"; // Import ProtectedRoute
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  return (
    <AuthProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/:view" element={<AuthPage />} /> {/* AuthPage as default */}
            <Route path="/property/create" element={<CreateProperty />} />
            {/* Protected Routes  */}
            <Route element={<ProtectedRoute />}>

              <Route path="/property/list" element={<ListOfProperties />} />
            </Route>
            <Route path="/layout" element={<Layout />} />
            {/* no Protected Routes */}
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
