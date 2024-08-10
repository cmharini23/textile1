import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import './MenCartPage.css';

const MenCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem('menCart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleCheckout = () => {
    navigate('/men-checkout'); // Navigate to MenCheckoutPage
  };

  const handleDelete = (itemToDelete) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToDelete.id);
    setCartItems(updatedCart);
    localStorage.setItem('menCart', JSON.stringify(updatedCart));
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setFormValues({ name: item.name, price: item.price });
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditItem(null);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = () => {
    const updatedCart = cartItems.map(item => 
      item.id === editItem.id ? { ...item, ...formValues } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('menCart', JSON.stringify(updatedCart));
    handleDialogClose();
  };

  return (
    <Box className="men-cart-container">
      <Typography variant="h4" className="men-cart-title" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography className="men-empty-cart-message">
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="men-cart-item">
                <ListItemText
                  primary={item.name}
                  secondary={`Price: ${item.price}`}
                />
                <IconButton onClick={() => handleEditClick(item)} className="men-cart-item-icon">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(item)} className="men-cart-item-icon">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider className="men-cart-divider" />
            </React.Fragment>
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        className="men-checkout-button"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
        Checkout
      </Button>
      
      {/* Edit Item Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleFormChange}
            fullWidth
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

export default MenCartPage;
