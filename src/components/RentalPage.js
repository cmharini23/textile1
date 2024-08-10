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
import RentalProducts from './RentalProducts'; // Import your rental products data
import './RentalPage.css';

const RentalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleSizeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSizes((prev) =>
      checked ? [...prev, value] : prev.filter((size) => size !== value)
    );
  };

  const handleRentNow = (productId) => {
    // Navigate to the rental process page or handle rental logic
    alert(`Initiate rental process for product ID: ${productId}`);
  };

  const filteredProducts = RentalProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);

    return matchesSearch && matchesCategory && matchesSize;
  });

  return (
    <Box className="rental-page">
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
              {['Shirts', 'T-Shirts', 'Pants', 'Jackets', 'Dresses'].map(
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
            <Typography variant="h6">Sizes</Typography>
            <FormGroup>
              {['S', 'M', 'L', 'XL', 'XXL'].map(
                (size) => (
                  <FormControlLabel
                    key={size}
                    control={
                      <Checkbox value={size} onChange={handleSizeChange} />
                    }
                    label={size}
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
                    {product.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price} / day
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="rent-now-button"
                    onClick={() => handleRentNow(product.id)}
                  >
                    Rent Now
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

export default RentalPage;
