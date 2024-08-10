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
import kidProducts from './KidProducts'; // Import your kids' products data
import './KidProductList.css';

const KidProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
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

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prev) =>
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
  };

  const handleBuyNow = (productId) => {
    // Add to cart and navigate to KidCartPage
    const cart = JSON.parse(localStorage.getItem('kidCart')) || [];
    const product = kidProducts.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      localStorage.setItem('kidCart', JSON.stringify(cart));
    }
    navigate('/kid-cart'); // Redirect to KidCartPage
  };

  const filteredProducts = kidProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesCategory && matchesBrand;
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
              {['Toys', 'Clothes', 'Books', 'Games', 'Accessories'].map(
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
            <Typography variant="h6">Brands</Typography>
            <FormGroup>
              {['Lego', 'Mattel', 'Hasbro', 'Disney', 'Melissa & Doug'].map(
                (brand) => (
                  <FormControlLabel
                    key={brand}
                    control={
                      <Checkbox value={brand} onChange={handleBrandChange} />
                    }
                    label={brand}
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
                    {product.brand}
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

export default KidProductList;
