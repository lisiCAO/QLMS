import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoutModal from "./LogoutModal";
const Topbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Control the visibility of the LogoutModal

  const handleShowLogoutModal = () => setShowLogoutModal(true); // Show LogoutModal
  const handleCloseLogoutModal = () => setShowLogoutModal(false); // Hide LogoutModal

  const handleLogout = () => {
    // TODO: Implement logout logic
    handleCloseLogoutModal();
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/landlord/dashboard">
          Landlord Dashboard
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">
            <FaSearch />
          </Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/landlord/dashboard">
            Username
          </Nav.Link>
          <Button variant="link" onClick={handleShowLogoutModal}>
            <FaSignOutAlt />
          </Button>
        </Nav>
      </Navbar>
      <LogoutModal
        show={showLogoutModal}
        handleClose={handleCloseLogoutModal}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Topbar;
