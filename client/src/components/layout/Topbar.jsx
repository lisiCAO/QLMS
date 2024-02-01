import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaBars, FaSearch, FaBell, FaEnvelope, FaUser, FaCogs, FaList, FaSignOutAlt } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
const ProfileImage = process.env.PUBLIC_URL + '/default_user.png'; 

const Topbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="topbar d-flex justify-content-around mb-4 static-top shadow px-3">
      <Form inline className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search d-flex">
        <FormControl type="text" placeholder="Search for..." className="mr-sm-2" />
        <Button variant=""><FaSearch /></Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><FaBars /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Douglas McGee" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#profile"><FaUser className="text-gray-400" /> Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout"><FaSignOutAlt className="text-gray-400" /> Logout</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="#user">
              <Image className="img-profile rounded-circle" src={ProfileImage} alt="User Profile" style={{ width: '40px', height: '40px' }} />
            </Nav.Link>
          </Nav.Item>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Topbar;
