import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { House, Briefcase, People, PlusCircle } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
import "./Sidebar.scss";
const LogoImage = process.env.PUBLIC_URL + "/logo.png";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column align-items-center justify-content-center"
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="sidebar-logo my-3">
        <Image
          src={LogoImage}
          roundedCircle
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <Button variant="primary" className="mb-3">
        <PlusCircle className="me-2" />
        Create New
      </Button>
      <hr />

      </div>
      <Accordion defaultActiveKey="0" className="w-100">
        {/* Properties */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <House className="icon" />
            Properties
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/landlord/properties" className="d-block">
                Overview
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/landlord/properties/create"
                className="d-block"
              >
                Create
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Leases */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Briefcase className="icon" /> Leases
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/landlord/leases" className="d-block">
                Overview
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/landlord/leases/create"
                className="d-block"
              >
                Create
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Tenants */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <People className="icon" /> Tenants
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/landlord/tenants/list"
                className="d-block"
              >
                List
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/landlord/tenants/update"
                className="d-block"
              >
                Update
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* User Information at the Bottom */}
      <div className="sidebar-footer mt-auto mb-3 text-center">
        <PersonCircle size={50} className="user-icon" />
        <div className="user-name">John Doe</div>
      </div>
    </div>
  );
};

export default Sidebar;
