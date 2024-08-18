import React from 'react';
import Header from '../main_layout/header';
import Footer from '../main_layout/footer';
import '../../assets/styles/main.css';
import mainImage from '../../assets/images/main.jpg'; 

function Main() {
    return (
        <div className="main-container">
        <Header />
        <main className="main">
        <img src={mainImage} alt="Main" />
          <h1>Welcome to Book Dictionary</h1>
          <p>A Classic Book Management System</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Main;