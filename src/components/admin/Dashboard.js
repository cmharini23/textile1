import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Orders taken: 50</p>
      <p>Leftover dresses: 20</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Dashboard;