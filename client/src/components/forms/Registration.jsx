import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

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
      // Your ApiService.register() code here
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
      <Form className="form-signup" onSubmit={handleSubmit}>
        <h1 className="h3 w-100 mb-3 font-weight-normal text-center">Create an Account</h1>
        {registerError && <div className="alert alert-danger" role="alert">{registerError}</div>}
        <Form.Group controlId="firstName" className="w-100 mb-3">
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group controlId="lastName" className="w-100 mb-3">
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group controlId="email" className="w-100 mb-3">
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group controlId="password" className="w-100 mb-3">
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="w-100 mb-3">
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button type="submit" className="btn btn-lg btn-primary btn-block">Register</Button>
      </Form>
  );
};

export default Registration;