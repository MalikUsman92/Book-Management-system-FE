// src/Routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/login.js';
import RegisterPage from '../components/register.js';
import AboutUsPage from '../layouts/about-us.js'; // Import the About Us component
import ContactUsPage from '../layouts/contact-us'; // Import the Contact Us component
import Main from '../layouts/main_layout/main.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/' element={<Main />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
}

export default AppRoutes;
