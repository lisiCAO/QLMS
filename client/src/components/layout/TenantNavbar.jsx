import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoutModal from "./LogoutModal";
// import { AuthContext } from "./../../context/AuthContext"; // TODO: Import the AuthContext

const TenantNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { hasLease, leasePropertyId } = useContext(AuthContext);

  const toggleLogoutModal = () => setShowLogoutModal(!showLogoutModal);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar bg="light" expand={false} className="mb-4">
        <Navbar.Brand as={Link} to="/tenant/dashboard">
          Tenant Portal
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShowOffcanvas}
        />
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">
            <FaSearch />
          </Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/tenant/dashboard">
            Username
          </Nav.Link>
          <Button variant="outline-primary" onClick={toggleLogoutModal}>
            <FaSignOutAlt />
          </Button>
        </Nav>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {hasLease() ? (
              <>
                <Link
                  to={`/tenant/properties/${leasePropertyId}`}
                  className="nav-link"
                >
                  View Your Property
                </Link>
                <Link to="/tenant/lease" className="nav-link">
                  Lease
                </Link>
              </>
            ) : (
              <Link to="/tenant/properties" className="nav-link">
                View Available Properties
              </Link>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <LogoutModal show={showLogoutModal} handleClose={toggleLogoutModal} />
    </>
  );
};

export default TenantNavbar;
