import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';
import { FaArrowLeft } from 'react-icons/fa'; // Ensure you have react-icons installed

const AboutPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="about-page">
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft /> Back
      </button>
      <h1>About TexMaven</h1>
      <div className="about-content">
        <div className="about-card">
          <img src="https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=400" alt="TexMaven" />
          <div className="card-text">
            <h2>Our Mission</h2>
            <p>
              Welcome to TexMaven, your one-stop destination for high-quality, pre-loved clothing. At TexMaven, we believe in the power of sustainability and the beauty of second chances. Our mission is to provide fashionable and affordable clothing while promoting a more sustainable way of living.
            </p>
          </div>
        </div>
        <div className="about-text">
          <p>
            Founded in [Year], TexMaven started as a small initiative to reduce textile waste and has grown into a community of fashion enthusiasts who share our vision. We carefully curate our collection to ensure that each piece meets our high standards of quality and style.
          </p>
          <p>
            At TexMaven, we offer a wide range of clothing for women, men, and kids, as well as a selection of accessories and books. Whether you're looking for a unique vintage piece or a modern wardrobe staple, you'll find something special at TexMaven.
          </p>
          <p>
            Thank you for supporting TexMaven and joining us on our journey towards a more sustainable future. We hope you enjoy shopping with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
