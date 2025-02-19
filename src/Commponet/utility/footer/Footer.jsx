/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './footer.css'; // External CSS for styling
import twiterimage from '../../../image/twiter.png'
import facebook from '../../../image/facbook.png'
import instagram from '../../../image/instgram.png'
import linkedin from '../../../image/linkedln.png'
import logoimage from '../../../image/Logo.png'
import imageback3 from '../../../image/back3.png'
import imageback4 from '../../../image/back4.jpg'

export default function Footer() {
  return (
    <footer className="footer" style={{position:'relative',zIndex:'1'}}>
      <div className="footer-container">
        {/* Logo and Contact Info */}
        <div className="footer-section">
          <h2 className="footer-logo"><img src={logoimage} alt="" /></h2>
          <p className="footer-text">
            Lorem ipsum is dolor sit amet, consectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
          </p>
          <div className="footer-contact">
            <div className="contact-icon">
              <span role="img" aria-label="Phone">
                📞
              </span>
            </div>
            <div>
              <p className="contact-title">Contact Us</p>
              <p className="contact-number">+01 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Services</li>
            <li>Booking</li>
            <li>FAQ's</li>
            <li>Blogs</li>
            <li>Our Team</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h4 className="footer-heading">Our Service</h4>
          <ul className="footer-links">
            <li>Dental Care</li>
            <li>Cardiac Clinic</li>
            <li>Massage Therapy</li>
            <li>Cardiology</li>
            <li>Precise Diagnosis</li>
            <li>Ambulance Services</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Subscribe</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" className="subscribe-input" />
            <button className="subscribe-button">Subscribe Now</button>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><img src={twiterimage} alt="twiter" /></a>
            <a href="#" className="social-icon"><img src={facebook} alt="facebook" /></a>
            <a href="#" className="social-icon"><img src={instagram} alt="instagram" /></a>
            <a href="#" className="social-icon"><img src={linkedin} alt="linkedin" /></a>
          </div>
        </div>
      </div>

      <div className='background-img-footer'>
        <img src={imageback3} className="img-back3" alt="" />
        <img src={imageback4} className="img-back4" alt="" />
      </div>
    </footer>
  );
}
