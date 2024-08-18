import React from 'react';
import '../../assets/styles/footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
    <ul>
      <li><p id='link' onClick={() => navigate('/about-us')}>About Us</p></li>
      <li><p id='link' onClick={() => navigate('/contact-us')}>Contact Us</p></li>
    </ul>
    <p>&copy; 2024 All Rights Reserved</p>
  </footer>
  );
}

export default Footer;
