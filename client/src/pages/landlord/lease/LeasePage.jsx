import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LeaseList from "../components/landlord/LeaseList";
import LeaseCreate from "../components/landlord/LeaseCreate";
import LeaseEdit from "../components/landlord/LeaseEdit";
import LeaseDelete from "../components/landlord/LeaseDelete";

const LeasePage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LeaseList />} />
        <Route path="create" element={<LeaseCreate />} />
        <Route path="edit/:id" element={<LeaseEdit />} />
        <Route path="delete/:id" element={<LeaseDelete />} />
      </Routes>
    </div>
  );
};

export default LeasePage;
