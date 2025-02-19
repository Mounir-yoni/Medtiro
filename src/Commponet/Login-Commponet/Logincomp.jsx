/* eslint-disable no-unused-vars */
import React from 'react';
import imagelogo from "../../image/Logo.png";
import './login.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={imagelogo} alt="Logo" className="logo" />

        <form action="/login" method="post" className="login-form">
          <div className="form-group">
            <input type="text" name="username" placeholder="Username" required />
          </div>

          <div className="form-group">
            <input type="password" name="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <p>Dont have any account?</p>
        <Link to="/register">
        <button className='btn-register'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
