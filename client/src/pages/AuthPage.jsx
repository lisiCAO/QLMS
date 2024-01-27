import React from "react";
import { ApiService } from './../services/ApiService';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AuthPage = () => {

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    ApiService.loginWithGoogle();
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <Button 
          variant="primary"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>
        <Button 
          variant="link"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        
        <Button 
          variant="link"
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
