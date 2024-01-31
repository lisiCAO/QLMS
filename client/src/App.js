import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/authContext'; // Import AuthProvider
import AuthPage from "./pages/AuthPage";
import CreateProperty from "./components/properties/CreateProperty";
import ListOfProperties from "./components/properties/ListOfProperties";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import "./App.css";

function App() {
  return (
    <AuthProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/:view" element={<AuthPage />} /> {/* AuthPage as default */}

            {/* Protected Routes  */}
            <Route element={<ProtectedRoute />}>
              <Route path="/property/create" element={<CreateProperty />} />
              <Route path="/property/list" element={<ListOfProperties />} />
            </Route>
            
            {/* no Protected Routes */}
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
