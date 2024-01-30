import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CreateProperty from "./components/properties/CreateProperty";
import ListOfProperties from "./components/properties/ListOfProperties";
import ProtectedRoute from "./ProtectedRoute"; // 引入 ProtectedRoute 组件，确保路径正确
import "./App.css";
import { AuthProvider } from './context/authContext'; // 引入 AuthProvider，确保路径正确

function App() {
  return (
    <AuthProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/:view" element={<AuthPage />} /> {/* AuthPage 作为默认页面 */}

            {/* 使用 ProtectedRoute 保护需要认证的路由 */}
            <Route element={<ProtectedRoute />}>
              <Route path="/property/create" element={<CreateProperty />} />
              <Route path="/property/list" element={<ListOfProperties />} />
              {/* 在此处添加更多需要保护的路由 */}
            </Route>
            
            {/* 可以添加更多不需要保护的路由 */}
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
