import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './KidCheckoutPage.css';

const KidCheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from local storage or any other source
    const savedCart = JSON.parse(localStorage.getItem('kidCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handlePlaceOrder = () => {
    // Handle order placement logic
    // Clear cart and navigate to a confirmation or thank you page
    localStorage.removeItem('kidCart');
    navigate('/order-confirmation'); // Redirect to an order confirmation page
  };

  return (
    <Box className="kids-checkout-container">
      <Typography variant="h4" className="kids-checkout-title" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="kids-shipping-info">
            <Typography variant="h6" gutterBottom>
              Shipping Information
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              label="Payment Method"
              variant="outlined"
              fullWidth
              margin="normal"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="kids-cart-summary">
            <Typography variant="h6" gutterBottom>
              Cart Summary
            </Typography>
            {cartItems.map((item) => (
              <Card className="kids-summary-card" key={item.id}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {item.price} | Quantity: {item.quantity || 1}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className="kids-place-order-button"
        onClick={handlePlaceOrder}
        disabled={!name || !address || !paymentMethod}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default KidCheckoutPage;
