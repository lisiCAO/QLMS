import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from './../../services/ApiService';
import InputField from "./../common/InputField";
import Button from "./../common/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      await ApiService.login(data);
      navigate('/dashboard'); // Or the route you want to redirect after login
    } catch (error) {
      // Handle login error
      console.error(error);
    }
    };
  return (
    <div className="container">
      <form className="form-signin" onSubmit={handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
        <InputField 
          type="email"
          className="form-control mb-2"
          value={email}
          onChange={setEmail}
          placeholder="Email"
        />
        <InputField 
          type="password"
          className="form-control mb-2"
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />
        <Button type="submit" className="btn btn-lg btn-primary btn-block" text="Sign in" />
      </form>
    </div>
  );
};

export default LoginForm;
