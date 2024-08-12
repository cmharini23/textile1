import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      const savedCart = JSON.parse(localStorage.getItem('wholeCart')) || [];
      console.log('Fetched Cart Items:', savedCart); // Log fetched cart items
      setCartItems(savedCart);
    };

    fetchCartItems();
  }, []);

  // Handle checkout: send cart items to backend
// Handle checkout: send only the product IDs to the backend
// Handle checkout: send only the product IDs to the backend
// Handle checkout: send the product ID, price, and name to the backend
const handleCheckout = async () => {
  const orderData = cartItems.map(item => ({
    prodid: item.id,
    productName: item.name,
    price: parseFloat(item.price.replace('Rs. ', '')), // Ensure price is a number
  }));

  try {
    const response = await axios.post('http://localhost:8080/cart', orderData);
    console.log('Response from Backend:', response.data);

    localStorage.removeItem('wholeCart');
    setCartItems([]);
    navigate('/cart-payment');
  } catch (error) {
    console.error('Error during checkout:', error);
  }
};





  // Handle deletion of an item from the cart
  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('wholeCart', JSON.stringify(updatedCart));
  };

  // Handle quantity change for an item
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

  // Increment quantity
  const handleQuantityIncrement = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    handleQuantityChange(itemId, (item.quantity || 1) + 1);
  };

  // Decrement quantity
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
       proceed to pay
      </Button>
    </Box>
  );
};

export default WholeCart;
