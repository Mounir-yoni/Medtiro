/* eslint-disable no-unused-vars */
import React from 'react';
import imagelogo from "../../image/Logo.png";
import './register.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={imagelogo} alt="Logo" className="logo" />

        <form action="/login" method="post" className="login-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Eame" required />
          </div>



          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>




          <div className="form-group">
            <input type="text" name="username" placeholder="Username" required />
          </div>

          <div className="form-group">
            <input type="password" name="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-btn">Register</button>
        </form>


        <p>do you have an account?</p>
        <Link to="/login">
        <button className='btn-register'>login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
