import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar'; 
import Topbar from '../components/layout/Topbar'; 
import PropertiesList from '../components/properties/PropertiesList';
import './Layout.scss'; 
import CreateProperty from '../components/properties/CreateProperty';
import TenantsList from '../components/tenants/TenantsList';
import UpdateTenant from '../components/tenants/UpdateTenant';
const LanlordPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('overview');

  const handleMenuSelect = (menuKey) => {
    setSelectedMenu(menuKey);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <PropertiesList />;
      case 'create':
        return <CreateProperty />;
      case 'list-tenants':
        return <TenantsList />;
      case 'update-tenant':
        return <UpdateTenant />;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div className="main-container">
      <Sidebar onMenuSelect={handleMenuSelect} />
      <div className="content">
        <Topbar />
        <div className="dynamic-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LanlordPage;
