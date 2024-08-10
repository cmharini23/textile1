// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:info@texmaven.com">info@texmaven.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>Address: 123 Fashion Street, Style City, ST 45678</p>
      </div>
    </footer>
  );
};

export default Footer;
