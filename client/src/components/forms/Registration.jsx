import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaBuilding, FaWrench } from 'react-icons/fa';
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
import './RoleSelection.scss';

const RoleSelection = ({ onSelectRole }) => {
  return (
    <Card className="role-selection">
      <Card.Body>
        <Card.Title>Account Type</Card.Title>
        <Card.Text>
          Choose the account type that suits your needs. Each has a different set of tools and features.
        </Card.Text>
        <ButtonGroup>
          <Button variant="outline-primary" onClick={() => onSelectRole('tenant')}>
            <FaUser className="icon" /> Tenant
          </Button>
          <Button variant="outline-primary" onClick={() => onSelectRole('landlord')}>
            <FaBuilding className="icon" /> Landlord
          </Button>
          <Button variant="outline-primary" onClick={() => onSelectRole('servicePro')}>
            <FaWrench className="icon" /> Service Pro
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 前端验证
    if (formData.password !== formData.confirmPassword) {
      setRegisterError("Passwords do not match.");
      return;
    }
  
    // 密码复杂度验证（示例）
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setRegisterError("Password does not meet complexity requirements.");
      return;
    }
  
    // 角色验证
    if (formData.role !== "landlord" && formData.role !== "tenant") {
      setRegisterError("Invalid role.");
      return;
    }
  
    try {
      // 构建后端需要的数据对象
      const userData = {
        email: formData.email,
        password: formData.password,
        username: formData.firstName + " " + formData.lastName, // 示例：将名和姓组合为用户名
        role: formData.role,
      };
      console.log(userData);
      // 调用注册方法
      // const response = await ApiService.register(userData);
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
      alert(response.message);
      // navigate('/'); // 注册成功后跳转到登录页面
    } catch (error) {
      setRegisterError(error.message || "Failed to register.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    {!formData.role && <RoleSelection onSelectRole={handleSelectRole} />}
    {formData.role && (
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
    )}
      </>
  );
};

export default Registration;