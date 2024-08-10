import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartItems(data);
    };

    fetchCartItems();
  }, []);

  return (
    <div className="carts">
      <h1>Carts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.customer}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
