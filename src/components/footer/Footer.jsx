// Footer.jsx

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

// ... rest of the code

const Footer = () => {
  return (
    <div>
      {/* Newsletter Box */}
      <div className="newsletter-box">
        <div className="subscribe-heading">Subscribe to Newsletter</div>
        <div className="exclusive-content">
          Get exclusive content and become a part of the Worko community.
        </div>
        <div className="email-input-container">
          <input
            type="email"
            placeholder="Enter Email address"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      {/* Four-Column Footer */}
      <div className="footer-container">
        <div className="footer-column">
          <p className="wheading">Worko</p>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Integration</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li className="hover:text-gray-100">
              <Link to="#">
                About Us
              </Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="#">
                Contact
              </Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li className="hover:text-gray-100">
              <Link to="/legal/dpa">
                DPA
              </Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/legal/privacy-policies">
                Privacy Policy
              </Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/legal/terms-of-services">
                Terms of Service
              </Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/legal/report-vulnerability">
                Report a Vulnerability
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media Icons */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2023 Worko INC. All rights reserved.
        </div>
        <div className="footer-social-icons">
          {/* Use react-icons here */}
          <a href="#" className="social-icon-link">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="#" className="social-icon-link">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#" className="social-icon-link">
            <FaFacebook className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
