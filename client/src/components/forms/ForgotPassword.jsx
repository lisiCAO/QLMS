import React, { useState } from "react";
import ApiService from "../../services/ApiService";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await ApiService.forgotPassword(email);
      // Handle success: Notify user to check their email
      toast.success("An email with instructions has been sent. Please check your email.");
      navigate("/login"); // Optionally redirect user to login page
    } catch (error) {
      // Handle forgot password error
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <Container>
      <Form className="form-forgot-password" onSubmit={handleResetPassword}>
        <h1 className="h3 mb-3 font-weight-normal text-center">
          Forgot Password
        </h1>
        <Form.Group controlId="email" className="w-100 mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Reset Password
        </Button>
      </Form>

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </Container>
  );
};

export default ForgotPassword;
