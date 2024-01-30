import React, { useState, useEffect } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoginForm from './../components/forms/LoginForm';
import Registration from './../components/forms/Registration';
import ForgotPassword from '../components/forms/ForgotPassword';
import { ApiService } from '../services/ApiService';
import './AuthPage.scss';

const AuthPage = () => {
  const [bgImageUrl, setBgImageUrl] = useState(null); 
  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.onload = () => setBgImageUrl('/background.png');
      img.src = '/background.png';
    };

    loadImage();
  }, []);
  const containerStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh', 
    width: '100vw', 
  };

  
  const handleGoogleLogin = () => {
    ApiService.loginWithGoogle();
    console.log('Google login simulation');
  };
  const { view } = useParams();
  const [activeView, setActiveView] = useState(view || 'default'); // 可以是 'login' 或 'register'
  useEffect(() => {
    setActiveView( view || 'default');
  }, [view]);

  const renderAuthComponent = () => {
    switch (activeView) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <Registration />;
      case 'fortgot-password':
        return <ForgotPassword />;
      default:
        return (
          <Container className='d-flex flex-column align-items-center mb-3 g-5'>
            <h3>Welcome Back!</h3>
            <p className="light-gray-text">To continue, log in to QLMS</p>
            <Button variant="primary" className='w-100 mb-3'onClick={handleGoogleLogin}>Continue with Google</Button>
            <div className="mb-3">
              <span>or</span>
            </div>
            <Button variant="outline-primary" className='w-100 mb-3' onClick={() => setActiveView('login')}>Login</Button>
            <Button variant="outline-primary" className='w-100' onClick={() => setActiveView('register')}>Register</Button>
          </Container>
        );
    }
  };

  return (
    <Container fluid className="p-0 d-flex vh-100" style={containerStyle}>
      <div className="bg-mask"></div>
      <Row className="g-0 w-100">
        <Col md={6} className="content-column d-none d-md-flex flex-column justify-content-center align-items-start px-5 text-light">
          <h2>Questions?</h2>
          <p>Search our tutorials and view our most frequently asked questions and support articles.</p>
          <Button variant="outline-primary" className="btn-custom">Visit The Help Center</Button>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <Modal.Dialog className="modal-custom">
            <Modal.Header className='w-100 d-flex flex-column justify-content-center align-items-center border-bottom border-light-gray'>
              <Modal.Title >QLSM</Modal.Title>
            </Modal.Header>

            <Modal.Body className='border-bottom border-light-gray'>
              <Container className='d-flex flex-column justify-content-center'>
                {renderAuthComponent()}
                {activeView === 'login' && (
                  <>
                    <Button variant="link" onClick={() => setActiveView('fortgot-password')}>Forgot Password?</Button>
                  </>
                )}
                {activeView === 'register' && (
                  <>
                    <Button variant="link" onClick={() => setActiveView('login')}>Already have an account? Login</Button>
                  </>
                )}
                {activeView !== 'default' && (
                  <>
                    <Button variant="link" onClick={() => setActiveView('default')}>Back</Button>
                  </>
                )}
              </Container>
            </Modal.Body>
            <Modal.Footer className="border-top border-light-gray">
              <div className="text-center w-100">
                <p>Copyright © QLMS, Inc. 2024</p>
              </div>
            </Modal.Footer>
          </Modal.Dialog>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
