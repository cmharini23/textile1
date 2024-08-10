import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './KidCartPage.css';

const KidCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [editQuantity, setEditQuantity] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch cart items from local storage or any other source
    const savedCart = JSON.parse(localStorage.getItem('kidCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleDeleteItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('kidCart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setEditQuantity(item.quantity || 1);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditItem(null);
  };

  const handleFormSubmit = () => {
    const updatedCart = cartItems.map(item =>
      item.id === editItem.id ? { ...item, quantity: editQuantity } : item
    );
    localStorage.setItem('kidCart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    handleDialogClose();
  };

  const handleCheckout = () => {
    // Redirect to the checkout page
    navigate('/kid-checkout');
  };

  return (
    <Box className="kids-cart-container">
      <Typography variant="h4" className="kids-cart-title" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" className="kids-empty-cart-message">
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="kids-cart-item">
                <ListItemText
                  primary={item.name}
                  secondary={`Price: ${item.price} | Quantity: ${item.quantity || 1}`}
                />
                <div>
                  <IconButton onClick={() => handleEditItem(item)} className="kids-cart-item-icon">
                    <AiFillEdit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteItem(item.id)} className="kids-cart-item-icon">
                    <AiFillDelete />
                  </IconButton>
                </div>
              </ListItem>
              <Divider className="kids-cart-divider" />
            </React.Fragment>
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        className="kids-checkout-button"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
        Checkout
      </Button>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Quantity"
            type="number"
            fullWidth
            value={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default KidCartPage;
