import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert('Order placed successfully!');
  };

  return (
    <Box className="checkout-container">
      <Typography variant="h4" className="checkout-title" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="checkout-form">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                className="checkout-input"
              />
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                className="checkout-input"
              />
              <TextField
                label="Address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                className="checkout-input"
              />
              <TextField
                label="Payment Method"
                name="paymentMethod"
                value={formValues.paymentMethod}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                className="checkout-input"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="checkout-button"
              >
                Place Order
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="checkout-summary">
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Card className="summary-card">
              <CardContent>
                <Typography variant="h6">Product Name</Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: $0.00 | Quantity: 1
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Divider className="checkout-divider" />
      <Typography variant="h6" className="thank-you-message">
        Thank you for shopping with us!
      </Typography>
    </Box>
  );
};

export default CheckoutPage;
