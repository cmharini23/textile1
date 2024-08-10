import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Card Holder Name:', cardHolderName);
  };

  return (
    <Box className="payment-page">
      <video className="background-video" autoPlay muted loop>
        <source src="https://www.shutterstock.com/shutterstock/videos/3553678033/preview/stock-footage-fashion-blogger-concept-young-asian-women-selling-clothes-on-video-streaming-startup-small.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container maxWidth="sm">
        <Box className="payment-page-container">
          <Typography variant="h4" gutterBottom>
            Payment Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  inputProps={{ maxLength: 16 }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Expiration Date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  inputProps={{ maxLength: 4 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Card Holder Name"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit Payment
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentPage;
