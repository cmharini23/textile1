import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
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
import './WomenCartPage.css';

const WomenCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [showCinematic, setShowCinematic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('womenCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleCheckout = () => {
    navigate('/women-checkout');
  };

  return (
    <Box className="women-cart-outer-container">
      <Box className="women-cart-container">
        <Typography variant="h4" className="women-cart-title" gutterBottom>
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography>No items in the cart.</Typography>
        ) : (
          cartItems.map((item) => (
            <Card className="women-cart-card" key={item.id}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {item.price} | Quantity: {item.quantity || 1}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
        <Button
          variant="contained"
          color="primary"
          className="women-checkout-button"
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default WomenCartPage;
