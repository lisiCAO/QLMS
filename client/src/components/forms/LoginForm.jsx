import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {ApiService} from "../../services/ApiService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { username } = await ApiService.login({ email, password });
      setUsername(username); 
    } catch (error) {
      console.error('Login Error:', error.message);
    }
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
          className="w-100 mb-3"
        />
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-100 mb-3"
        />
        <Button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
