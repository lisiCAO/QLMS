import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Registration from "./components/forms/Registration";
import LoginForm from "./components/forms/LoginFom";
import ForgotPassword from "./components/forms/ForgotPassword"; 
import "./App.css";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} /> {/* AuthPage as Default page */}
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
