import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FcSalesPerformance } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";

import { IoMdCart } from "react-icons/io";
import { GrRestroomWomen } from "react-icons/gr";
// import { FaBookBookmark } from "react-icons/fa6";
import { MdMan3 } from "react-icons/md";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';
import './HomePage.css';


const TemporaryDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/women">
            <ListItemIcon><GrRestroomWomen />
            </ListItemIcon>
            <ListItemText primary="WOMEN" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/men">
            <ListItemIcon><MdMan3 /></ListItemIcon>
            <ListItemText primary="MEN" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/kids">
            <ListItemIcon><TbMoodKid />
            </ListItemIcon>
            <ListItemText primary="KIDS" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton component={Link} to="/book">
            <ListItemIcon><FaBookBookmark /></ListItemIcon>
            <ListItemText primary="BOOK" />
          </ListItemButton>
        </ListItem> */}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/sell">
            <ListItemIcon><FcSalesPerformance /></ListItemIcon>
            <ListItemText primary="Sell" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/rent">
            <ListItemIcon><FcSalesPerformance /></ListItemIcon>
            <ListItemText primary="Rent" />
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><RiMenu3Line /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

const HomePage = () => {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-project-section');
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <div className="left-header">
          <TemporaryDrawer />
          <div className="app-name"> <img src="https://gurusystems.com/wp-content/uploads/2021/06/maven.jpg" alt="" className="app-logo" />
  
          </div>
        </div>
       
        
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sign">Login</Link>
          <Link to="/contact">Facing issues?</Link>
          <Link to="/scheme">scheme?</Link>
          <Link to="/whole"><IoMdCart /></Link>
        </nav>
      </header>

      {/* <div className="carousel-wrapper">
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
          <div>
            <img src="https://bombayclosetcleanse.in/cdn/shop/files/Banner_03_7d2bfacc-90c5-40a2-ba90-3374cc72bd84.jpg?v=1711607352&width=3840" alt="Slide 2" />
          </div>
          <div>
            <img src="https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_0,h_1181,w_2094,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1594745735/g5/g5-c-5lzenrews-olympus-property-management/g5-cl-1k91bxrnvd-tacara-at-westover-hills/services/July_2020_qlitzd.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc4LWZ4LTg3XzMuanBn.jpg" alt="Slide 3" />
          </div>
        </Carousel>
      </div> */}

<section className="carousel-section">
        <div className="carousel-item">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="carousel-video"
            src="https://videos.pexels.com/video-files/5708451/5708451-hd_1080_1920_25fps.mp4"
          />
        </div>
        <div className="carousel-item">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="carousel-video"
            src="https://marketplace.canva.com/EAFOT-taGGc/1/0/450w/canva-lime-green-thrift-shopping-instagram-story-QBCsq3sKLEw.mp4"
          />
        </div>
        <div className="carousel-item">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="carousel-video"
            src="https://videos.pexels.com/video-files/6335707/6335707-sd_360_640_24fps.mp4"
          />
        </div>
        <div className="carousel-item">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="carousel-video"
            src="https://videos.pexels.com/video-files/6120783/6120783-sd_506_960_25fps.mp4"
          />
        </div>
      </section>
     

      <div className='brand'>
        <h1> BRANDS
        </h1>
        </div>
      <section className="offers-section">
        
        <div className="offer-card">
          <img src="https://rareandfair.com/cdn/shop/files/Rare___Fair_Handmade_Clothes_by_artisans_800x.png?v=1615389368" alt="Offer 1" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Oer67RliUcXJFTfB7sgE8p2w2RV_M18ODIICg-PKpvisbl4Osk2GvPwCgb8M-avz6ns&usqp=CAU" alt="Offer 2" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://static.wixstatic.com/media/84b06e_6c43196ff904457f94a85cd9c99d6244~mv2.png/v1/fill/w_924,h_494,al_c,q_90,enc_auto/84b06e_6c43196ff904457f94a85cd9c99d6244~mv2.png" alt="Offer 3" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tJHe2cDpVSm62EdBHHoai3F0gQziU06omG5PLhKoPXTtSztnRuAuBEePfu_RVewVjKI&usqp=CAU" alt="Offer 1" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHtnub5Mc7D5wIuKU7bBRvQRzMT7o59gKiw&s" alt="Offer 2" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://krankkulture.com/cdn/shop/files/Untitled_2048_x_2048_px_A2_Landscape.png?height=628&pad_color=ffffff&v=1696396640&width=1200" alt="Offer 3" className="offer-image" />
        </div>
      </section>
   

      <div className='brand'>
        <h1> OFFERS & SALES!!
        </h1>
        </div>
      
      <section className="offers-section">
        <div className="offer-card">
          <img src="https://images.pexels.com/photos/7375091/pexels-photo-7375091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Offer 1" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://i.pinimg.com/564x/6d/78/93/6d78933c46d07608927a232ff1f52b2d.jpg" alt="Offer 2" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src="https://marketplace.canva.com/EAE5Nze_bw0/1/0/900w/canva-new-clothing-%28instagram-story%29-BS0SA7LsE7w.jpg" alt="Offer 3" className="offer-image" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
