import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './CartPayment.css';

const CartPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    // Implement payment logic here
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // Navigate to a success or order confirmation page
    navigate('/order-confirmation');
  };

  return (
    <Box className="payment-container">
      <Typography variant="h4" gutterBottom>
        Payment Details
      </Typography>
      <Divider className="payment-divider" />
      <Grid container spacing={3} className="payment-form">
        <Grid item xs={12}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Or Pay with QR Code</Typography>
          <Box className="qr-code-box">
            <img src="/path-to-your-qr-code-image.png" alt="QR Code" className="qr-code-image" />
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className="pay-now-button"
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </Box>
  );
};

export default CartPayment;
