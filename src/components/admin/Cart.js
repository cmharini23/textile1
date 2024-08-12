import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching items data:', error));
  }, []);

  return (
    <Box className="admin-cart-container">
      <Typography variant="h4" className="admin-cart-title" gutterBottom>
        Admin Cart Page
      </Typography>

      {cartItems.length === 0 ? (
        <Typography className="empty-cart-message">
          No items in the cart.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="cart-item">
                {item.image && <img src={item.image} alt={item.productName} className="cart-item-image" />}
                <ListItemText
                  primary={`ID: ${item.id} - ${item.productName}`}
                  secondary={`Price: $${item.price} | Quantity: ${item.quantity || 1}`}
                />
              </ListItem>
              <Divider className="cart-divider" />
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Cart;
