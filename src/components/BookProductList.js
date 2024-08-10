import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import BookProducts from './BookProducts'; // Import your books' products data
import './BookProductList.css';

const BookProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleAuthorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedAuthors((prev) =>
      checked ? [...prev, value] : prev.filter((author) => author !== value)
    );
  };

  const handleBuyNow = (productId) => {
    // Navigate to the payment page, optionally passing the productId if needed
    navigate(`/payment`);
  };

  const filteredProducts = BookProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesAuthor = selectedAuthors.length === 0 || selectedAuthors.includes(product.author);

    return matchesSearch && matchesCategory && matchesAuthor;
  });

  return (
    <Box className="product-list">
      <Box className="sidebar">
        <Box className="search-filter-container">
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <BiSearchAlt />,
            }}
            className="search-input"
          />
          <Box className="filter-container">
            <Typography variant="h6">Categories</Typography>
            <FormGroup>
              {['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy', 'Biography', 'Mystery'].map(
                (category) => (
                  <FormControlLabel
                    key={category}
                    control={
                      <Checkbox value={category} onChange={handleCategoryChange} />
                    }
                    label={category}
                  />
                )
              )}
            </FormGroup>
            <Typography variant="h6">Authors</Typography>
            <FormGroup>
              {['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'Stephen King', 'Agatha Christie', 'Dan Brown', 'J.D. Salinger'].map(
                (author) => (
                  <FormControlLabel
                    key={author}
                    control={
                      <Checkbox value={author} onChange={handleAuthorChange} />
                    }
                    label={author}
                  />
                )
              )}
            </FormGroup>
          </Box>
        </Box>
      </Box>
      <Box className="content">
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="buy-now-button"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookProductList;
