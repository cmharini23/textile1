import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/carts');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleDelete = async (itemToDelete) => {
    try {
      await fetch(`/api/carts/${itemToDelete.id}`, {
        method: 'DELETE',
      });
      setCartItems(cartItems.filter(item => item.id !== itemToDelete.id));
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setFormValues({ name: item.productName, price: item.price });
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

  const handleFormSubmit = async () => {
    try {
      const updatedItem = {
        ...editItem,
        productName: formValues.name,
        price: formValues.price,
      };

      await fetch(`/api/carts/${editItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      setCartItems(cartItems.map(item =>
        item.id === editItem.id ? updatedItem : item
      ));
      handleDialogClose();
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  return (
    <Box className="cart-container">
      <Typography variant="h4" className="cart-title" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography className="empty-cart-message">
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="cart-item">
                <ListItemText
                  primary={item.productName}
                  secondary={`Price: ${item.price}`}
                />
                <IconButton onClick={() => handleEditClick(item)} className="cart-item-icon">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(item)} className="cart-item-icon">
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
        Checkout
      </Button>
      
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

export default CartPage;
