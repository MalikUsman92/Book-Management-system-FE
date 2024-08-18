import React from 'react';
import { useNavigate } from 'react-router-dom';
import '..//../assets/styles/header.css';
// import LoginPage from '../../components/login.js';
// import RegisterPage from '../../components/register.js'; 

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav>
        <ul>
        <li><button className="login" onClick={() => navigate('/login')}>Login</button></li>
        <li><button className="register" onClick={() => navigate('/register')}>Register</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
