import React from 'react';
import './ContactPage.css'; // Create a CSS file for styling


const ContactPage = () => {
  return (
    <div className="contact-page">
      <video className="background-video" autoPlay loop muted>
        <source src="https://www.shutterstock.com/shutterstock/videos/3500786793/preview/stock-footage-business-owner-entrepreneur-packing-cardboard-box-preparing-parcel-for-shipment-online-marketing.webm"type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-container">
        <h1 className="contact-heading">GET IN TOUCH</h1>
        <div className="contact-details">
          <p><strong>Phone:</strong> +2 (02) 2737 6756</p>
          <p><strong>Email:</strong> infoTexMaven@gamil.com</p>
          <p><strong>Address:</strong>123 Fashion Street, Style City, ST 45678</p>
          <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <textarea placeholder="Describe your issue" className="contact-textarea"></textarea>
          <input type="file" className="contact-input" />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;