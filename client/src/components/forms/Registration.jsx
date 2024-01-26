import React, { useState } from "react";
import { ApiService } from './apiService';
import InputField from "../common/InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setRegisterError("Passwords do not match.");
      return;
    }
    try {
      await ApiService.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (error) {
      setRegisterError(error.response.data.message || "Failed to register.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <form className="form-signup" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Create an Account</h1>
        {registerError && <div className="alert alert-danger" role="alert">{registerError}</div>}
        <InputField 
          type="text"
          className="form-control mb-2"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <InputField 
          type="text"
          className="form-control mb-2"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <InputField 
          type="email"
          className="form-control mb-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <InputField 
          type="password"
          className="form-control mb-2"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <InputField 
          type="password"
          className="form-control mb-2"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <Button type="submit" className="btn btn-lg btn-primary btn-block" text="Register" />
        <p className="mt-2 text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
