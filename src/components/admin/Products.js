import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Add product rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Products;