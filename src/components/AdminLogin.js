import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Set default credentials, ideally from environment variables or config file
    const defaultEmail = 'admin@example.com';
    const defaultPassword = 'admin';
    setEmail(defaultEmail);
    setPassword(defaultPassword);
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setFailedMessage('Invalid email address.');
      return;
    }

    setLoading(true);
    setFailedMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/users/admin-login', {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage('Admin login successful! Redirecting to admin dashboard...');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        setFailedMessage(error.response.data.message || 'Login failed.');
      } else {
        setFailedMessage('Login failed: Network error or server not responding.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h2 className="text-center">Admin Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className={`form-control ${!validateEmail(email) && email !== '' ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">Invalid email address.</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
          </div>
          {failedMessage && <p className="text-danger">{failedMessage}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Loading...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
