import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PropertyList from "../components/landlord/PropertyList";
import PropertyCreate from "../components/landlord/PropertyCreate";
import PropertyEdit from "../components/landlord/PropertyEdit";
import PropertyDelete from "../components/landlord/PropertyDelete";

const PropertyPage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<PropertyList />} />
        <Route path="create" element={<PropertyCreate />} />
        <Route path="edit/:id" element={<PropertyEdit />} />
        <Route path="delete/:id" element={<PropertyDelete />} />
      </Routes>
      <Outlet /> {/* Render the nested child routes */}
    </div>
  );
};

export default PropertyPage;
