import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      <div className="social-media-links">
        <a href="#">Facebook</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
