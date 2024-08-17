import React from 'react';
import Header from './header';
import Footer from './footer';
import '../assests/styles/main.css';
import mainImage from '../assests/images/main.jpg'; 

function Main() {
    return (
        <div className="main-container">
        <Header />
        <main className="main">
        <img src={mainImage} alt="Main" />
          <h1>Welcome to Our Website</h1>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Main;