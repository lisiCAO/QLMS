import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import { House, Briefcase, People, PlusCircle } from "react-bootstrap-icons";
import { CreditCard, PersonCircle } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
import "./Sidebar.scss";
const LogoImage = process.env.PUBLIC_URL + "/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-center align-">
      {/* Logo could be an image or an icon */}
      <div className="sidebar-logo my-3">
        {/* Replace with your logo */}
        <Image
          src={LogoImage}
          className="my-3 "
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />{" "}
        {/* Logo */}
      </div>

      {/* Create New Button */}
      <Button variant="primary" className="mb-3 create-new-btn">
        <PlusCircle className="me-2" />
        Create New
      </Button>

      <hr />
      {/* Accordion Menu */}
      <Accordion defaultActiveKey="0">
        {/* Properties */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <House className="icon" />
            Properties
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/landlord/properties">Overview</Link>
            <Link to="/landlord/properties/create">Create</Link>
          </Accordion.Body>
        </Accordion.Item>

        {/* Leases */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Briefcase className="icon" /> Leases
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/landlord/leases">Overview</Link>
            <Link to="/landlord/leases/create">Create</Link>
            {/* Submenu items for Leases */}
          </Accordion.Body>
        </Accordion.Item>

        {/* Tenants */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <People className="icon" /> Tenants
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/landlord/tenants/list">List</Link>
            <Link to="/landlord/tenants/update">Update</Link>
          </Accordion.Body>
        </Accordion.Item>

        {/* Transactions */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <CreditCard className="icon" /> Transactions
          </Accordion.Header>
          <Accordion.Body>
            {/* Submenu items for Transactions */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* User Information at the Bottom */}
      <div className="sidebar-footer mt-auto mb-3 ">
        <PersonCircle size={50} className="user-icon" />
        <div className="user-name">John Doe</div>
      </div>
    </div>
  );
};

export default Sidebar;
