import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import Orders from './Orders';
import CustomerDetailsForm from './CustomerDetails'; // Ensure correct import
import Products from './Products';

import Profile from './Profile';

import './AdminDashboard.css';
import Cart from './Cart';

const AdminDashboard = () => {
  return (



    <div className="admin-dashboard">
      <SideNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customer-details" element={<CustomerDetailsForm />} /> {/* Correct route */}
          <Route path="products" element={<Products />} />
          <Route path="cartsss" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Navigate to="/sign" />} />
          <Route path="notification" element={<div>Notification Page</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
