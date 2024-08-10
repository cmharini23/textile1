import React from 'react';
import './Orders.css';

const Orders = () => {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add order rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;