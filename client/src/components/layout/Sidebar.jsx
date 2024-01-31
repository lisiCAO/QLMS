import React from "react";
import "../../css/sb-admin-2.min.css";
import "../../vendor/fontawesome-free/css/all.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "bootstrap";
import NavItem from "react-bootstrap/esm/NavItem";
import Button from "react-bootstrap/Button";
import NavDivider from "./NavDivider";

const Sidebar = () => {
  return (
    // Use the Navbar component from react-bootstrap
    <Navbar
      bg='primary'
      variant='dark'
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion flex-column'
      id='accordionSidebar'>
      {/* Sidebar - Brand */}
      <Navbar.Brand
        href='index.html'
        className='d-flex align-items-center justify-content-center'>
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-laugh-wink'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>
          SB Admin <sup>2</sup>
        </div>
      </Navbar.Brand>

      {/* Divider */}
      <NavDivider />

      {/* Nav Item - Dashboard */}
      <Nav className='flex-column nav-item'>
        <Nav.Link href='/'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </Nav.Link>
      </Nav>

      {/* Divider */}
      <NavDivider />

      {/* Heading */}
      <div className='sidebar-heading'>Interface</div>

      {/* Nav Item - Pages Collapse Menu */}
      <Nav className='flex-column nav-item'>
        <Nav.Link
          href='#'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'>
          <i className='fas fa-fw fa-cog'></i>
          <span>Components</span>
        </Nav.Link>
        <NavDropdown
          id='collapseTwo'
          className='collapse'
          aria-labelledby='headingTwo'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Components:</h6>
            <NavDropdown.Item href='buttons.html'>Buttons</NavDropdown.Item>
            <NavDropdown.Item href='cards.html'>Cards</NavDropdown.Item>
          </div>
        </NavDropdown>
      </Nav>

      {/* Divider */}
      <NavDivider />

      {/* Heading */}
      <div className='sidebar-heading'>Addons</div>

      {/* Nav Item - Pages Collapse Menu */}
      <Nav className='flex-column nav-item'>
        <Navbar.Toggle aria-controls='collapsePages' />
        <Navbar.Collapse id='collapsePages'>
          <Nav>
            <NavDropdown
              id='collapsePages'
              // Use the title prop to pass a JSX element
              title={
                // Use a span element to wrap the icon and the text
                <span>
                  
                  <i className='fas fa-fw fa-folder'></i>
              
                  <span>Pages</span>
                </span>
              }
              className='collapse show'>
              
              <div className='bg-white py-2 collapse-inner rounded'>
                <NavDropdown.Item href='/property/create'>Create Property</NavDropdown.Item>
                <NavDropdown.Item href='/property/list'>
                 List Of Properties
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Nav>

      {/* Nav Item - Charts */}
      <Nav className='flex-column nav-item'>
        <Nav.Link href='charts.html'>
          <i className='fas fa-fw fa-chart-area'></i>
          <span>Charts</span>
        </Nav.Link>
      </Nav>

      {/* Nav Item - Tables */}
      <Nav className='flex-column nav-item'>
        <Nav.Link href='tables.html'>
          <i className='fas fa-fw fa-table'></i>
          <span>Tables</span>
        </Nav.Link>
      </Nav>

      {/*!-- Divider -- */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className='sidebar-heading'>Account Pages</div>

      {/* Nav Item - Sign in */}
      <Nav className='flex-column nav-item'>
        <Nav.Link href='/login'>
        <i class="fas fa-sign-in-alt"></i>
          <span>Sign in</span>
        </Nav.Link>
      </Nav>

      {/* Nav Item - Register */}
      <Nav className='flex-column nav-item'>
        <Nav.Link href='/'>
        <i class="far fa-registered"></i>
          <span>Register</span>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

// Export the sidebar component
export default Sidebar;
