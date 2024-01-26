import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/register";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password"; // Import the ForgotPassword component
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    // Mock authentication check on component mount
    // You may need to adjust this based on your actual authentication logic
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        });

        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setAuthState(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Routes>
            {/* Route for Register page */}
            <Route path="/registration" element={<Registration />} />
            {/* Route for Login page */}
            <Route path="/" element={<Login />} />
            {/* Route for Forgot Password page */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

