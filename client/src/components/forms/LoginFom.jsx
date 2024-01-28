import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {ApiService} from "../services/ApiService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await ApiService.login({ username, password });
    window.localStorage.setItem('token', token);
  };

  return (
    <div className="container">
      <Form onSubmit={handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </Button>
        <Button variant="link" href="/forgot-password"> Forgot Password?</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
