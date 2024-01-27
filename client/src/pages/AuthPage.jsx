import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    ApiService.loginWithGoogle();
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <button 
          className="btn btn-lg btn-primary btn-block"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
        <button 
          className="btn btn-lg btn-secondary btn-block"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button 
          className="btn btn-lg btn-success btn-block"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
