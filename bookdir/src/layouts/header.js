import React from 'react';
import '../assests/styles/header.css'; // Optional, for styling

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><button className="login">Login</button></li>
          <li><button className="register">Register</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
