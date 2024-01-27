import React, { useState } from "react";
import { ApiService } from './../../services/ApiService';
import InputField from "./../common/InputField";
import Button from "./../common/Button";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await ApiService.forgotPassword(email);
      // Handle success: Notify user to check their email
      navigate('/login'); // Optionally redirect user to login page
    } catch (error) {
      // Handle forgot password error
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form className="form-forgot-password" onSubmit={handleResetPassword}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Forgot Password</h1>
        <InputField 
          type="email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Button type="submit" className="btn btn-lg btn-primary btn-block" text="Reset Password" />
      </form>
    </div>
  );
};

export default ForgotPassword;
