import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';

const TenantDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const username = "Daenerys"; 

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Tenant Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/profile">{username}</Nav.Link>
            <Button variant="outline-primary" onClick={()=>logout}>Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#property">Property</Nav.Link>
            <Nav.Link href="#lease">Lease</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Container>
        {/* Default  */}
        <h1>Welcome {username}</h1>
        <p>Next payment of $2,445.00 is due on 9/1/2023</p>
        <Button variant="primary">Make a Payment</Button>
        <Button variant="secondary">Terminate Lease</Button>
        <Button variant="light">Upload Files</Button>
        
        {/* Property and Lease area */}
        {/* ... */}
      </Container>
    </>
  );
};

export default TenantDashboard;
