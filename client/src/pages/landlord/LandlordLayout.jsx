import React from "react";
import Sidebar from "./../../components/layout/Sidebar";
import Topbar from "./../../components/layout/Topbar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

const LandlordLayout = () => {
  return (
    <div className="landlord-layout d-flex">
      <Sidebar />
      <div className="landlord-content d-flex flex-column flex-grow-1">
        <Topbar />
        <div className="dynamic-content flex-grow-1">
          <Outlet /> {/* Landlord child route */}
        </div>
      </div>
    </div>
  );
};

export default LandlordLayout;
