import React, { useState } from 'react';
import Topbar from './../components/layout/Topbar';
import NavDivider from './../components/layout/NavDivider';
import Sidebar from './../components/layout/Sidebar';
import LogoutModal from './../components/layout/LogoutModal';

const Layout = () => {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    handleClose();
  };
    return (
        <>
        <Topbar />
        <NavDivider />
        <Sidebar />
        <button onClick={handleShow}>Show Logout Modal</button>
         <LogoutModal show={showModal} handleClose={handleClose} handleLogout={handleLogout} />
        </>
    )
};

export default Layout;