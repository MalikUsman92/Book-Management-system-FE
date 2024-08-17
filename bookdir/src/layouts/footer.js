import React from 'react';
import '../assests/styles/footer.css'; // Optional, for styling

function Footer() {
  return (
    <footer className="footer">
    <ul>
      <li><a href="#about-us">About Us</a></li>
      <li><a href="#contact-us">Contact Us</a></li>
    </ul>
    <p>&copy; 2024 All Rights Reserved</p>
  </footer>
  );
}

export default Footer;
