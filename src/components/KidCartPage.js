import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import './KidCartPage.css';

const KidCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('kidCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleCheckout = () => {
    navigate('/kid-checkout');
  };

  return (
    <Box className="kids-cart-container">
      <Typography variant="h4" className="kids-cart-title">
        Kids Cart
      </Typography>
      {cartItems.length > 0 ? (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card className="kids-cart-item">
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {item.price} | Quantity: {item.quantity || 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography className="kids-empty-cart-message">
          Your cart is empty
        </Typography>
      )}
      {cartItems.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          className="kids-checkout-button"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      )}
    </Box>
  );
};

export default KidCartPage;
