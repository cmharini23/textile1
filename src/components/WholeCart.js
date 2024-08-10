import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './WholeCart.css';

const WholeCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const savedCart = JSON.parse(localStorage.getItem('wholeCart')) || [];
      setCartItems(savedCart);
    };

    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    try {
      const orderData = { items: cartItems }; // Adjust this based on your backend schema
      await fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      // Redirect to the WholeCart page after placing the order
      navigate('/wholecart');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('wholeCart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1

    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('wholeCart', JSON.stringify(updatedCart));
  };

  const handleQuantityIncrement = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    handleQuantityChange(itemId, (item.quantity || 1) + 1);
  };

  const handleQuantityDecrement = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    handleQuantityChange(itemId, (item.quantity || 1) - 1);
  };

  return (
    <Box className="whole-cart-container">
      <Typography variant="h4" className="whole-cart-title" gutterBottom>
        Your Cart
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
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <ListItemText
                  primary={`ID: ${item.id} - ${item.name}`}
                  secondary={`Price: $${item.price} | Quantity: ${item.quantity || 1}`}
                />
                <Box className="quantity-controls">
                  <IconButton
                    onClick={() => handleQuantityDecrement(item.id)}
                    className="quantity-button"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    value={item.quantity || 1}
                    className="quantity-input"
                    inputProps={{ style: { textAlign: 'center' } }}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value >= 1) {
                        handleQuantityChange(item.id, value);
                      }
                    }}
                    type="number"
                  />
                  <IconButton
                    onClick={() => handleQuantityIncrement(item.id)}
                    className="quantity-button"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <IconButton
                  onClick={() => handleDelete(item.id)}
                  className="delete-button"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider className="cart-divider" />
            </React.Fragment>
          ))}
        </List>
      )}

      <Button
        variant="contained"
        color="primary"
        className="checkout-button"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default WholeCart;
