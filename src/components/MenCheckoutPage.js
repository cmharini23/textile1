import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import './MenCheckoutPage.css';

const MenCheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('menCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handlePlaceOrder = () => {
    // Retrieve existing items from wholeCart if any
    const existingWholeCart = JSON.parse(localStorage.getItem('wholeCart')) || [];
    
    // Combine with items from menCart
    const updatedWholeCart = [...existingWholeCart, ...cartItems];

    // Save updated items to WholeCart
    localStorage.setItem('wholeCart', JSON.stringify(updatedWholeCart));

    // Clear the menCart
    localStorage.removeItem('menCart');

    setOrderPlaced(true);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/men');
  };

  const handleGoToCart = () => {
    setOpenDialog(false);
    navigate('/whole');
  };

  const handleWrongButtonClick = () => {
    setOpenDialog(false);
    navigate('/whole'); // Redirects to WholeCartPage
  };

  return (
    <Box className="men-checkout-outer-container">
      <Box className="men-checkout-container">
        <Typography variant="h4" className="men-checkout-title" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box className="men-shipping-info">
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
            <Box className="men-cart-summary">
              <Typography variant="h6" gutterBottom>
                Cart Summary
              </Typography>
              {cartItems.map((item) => (
                <Card className="men-summary-card" key={item.id}>
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
          className="men-place-order-button"
          onClick={handlePlaceOrder}
          disabled={!name || !address || !paymentMethod}
        >
          Place Order
        </Button>

        {/* Success Dialog */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>
            Order Confirmation
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography>
              Your order has been placed successfully!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
            <Button onClick={handleGoToCart} color="secondary">Go to Cart</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default MenCheckoutPage;
