import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar'; 
import Topbar from '../components/layout/Topbar'; 
import './Layout.scss'; 

const LanlordPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('overview');

  const handleMenuSelect = (menuKey) => {
    setSelectedMenu(menuKey);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <div>Overview Content</div>;
      case 'others':
        return <div>Others Content</div>;
      // 添加更多case以处理其他菜单项
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
