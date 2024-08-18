import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests
import '../assets/styles/register.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState(''); // State for feedback messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      const response = await axios.post('http://localhost:3308/register', { name, email, password, role });
      setMessage(response.data.message); // Set success message from backend
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        setMessage(error.response.data.message); // Set error message from backend
      } else {
        setMessage('An unexpected error occurred.'); // Generic error message
      }
    }
  };

  return (
    <main className='main'>
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display message */}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
    </main>
  );
}

export default RegisterPage;
