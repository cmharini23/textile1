import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="orders">Orders</Link></li>
        <li><Link to="customer-details">Customer Details</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="cartss">Cart</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="logout">Logout</Link></li> {/* Added logout link */}
      </ul>
    </nav>
  );
};

export default SideNav;
