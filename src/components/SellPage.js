import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import './SellPage.css';

const SellPage = () => {
  const [username, setUsername] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [country, setCountry] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Username:', username);
    console.log('Price:', price);
    console.log('Image:', image);
    console.log('Country:', country);
  };

  return (
    <Container maxWidth="sm">
      <div className="sell-page-wrapper">
        <div className="sell-page-background">
       

          
          <video autoPlay loop muted>
            <source src="https://www.shutterstock.com/shutterstock/videos/3553678033/preview/stock-footage-fashion-blogger-concept-young-asian-women-selling-clothes-on-video-streaming-startup-small.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
        </div>
        <Box className="sell-page-container" mt={4}>
          <Typography variant="h4" gutterBottom>
            Sell Your Item
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Place of Origin</InputLabel>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Place of Origin"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="Brazil">Brazil</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-image"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="upload-image">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<PhotoCamera />}
                  >
                    Upload Image
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                {imagePreview && (
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={imagePreview}
                      alt="Uploaded Image"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {image.name}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sell
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </Container>
  );
};

export default SellPage;
