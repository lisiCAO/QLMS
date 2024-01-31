import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const handleUnload = () => setMessage(null);

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('blur', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('blur', handleUnload);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      console.log(credentials);
      const response = await ApiService.login(credentials);

      console.log(response);
      setMessage(response.message);
    } catch (error) {
      setMessage(error.message);
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
        {message && <p className="text-danger"  style={{ maxWidth: '200px' }} >{message}</p>}
        <Button type="submit" className="btn btn-lg btn-primary btn-block mb-3">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
