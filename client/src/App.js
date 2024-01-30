import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CreateProperty from "./components/properties/CreateProperty";
import ListOfProperties from "./components/properties/ListOfProperties";
import "./App.css";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} /> 
          <Route path="/:view" element={<AuthPage />} /> {/* AuthPage as Default page */}
          <Route path="/property/create" element={<CreateProperty />} />
          <Route path="/property/list" element={<ListOfProperties />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
