import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const username = event.target.username.value;
    const password = event.target.password.value;
    const loginValues = { username, password };

    try {
      const response = await axios.post('http://localhost:9000/getUserLogin', loginValues);
      const userData = response.data;
      localStorage.setItem('loggedInUser', JSON.stringify(userData)); // Store user data as a string
      setLoggedInUser(userData);
      navigate('/dashboard'); // Navigate to profile after login

    } catch (err) {
      setErrorMessage('Error in Login. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login ✉️</h1>
        <div className="input-group">
          <input type="text" id="username" name="username" placeholder="Username" required />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Log in'}
        </button>
        <p className="signup-link">
          Don't have an account? <a href="#" onClick={(e) => {
            e.preventDefault();
            navigate('/signup');
          }}>Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
