// Footer.jsx

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import workoIcon from "../../assets/worko.webp";

const Footer = () => {
  return (
    <div className="mt-16 max-w-[1140px] mb-20 mx-auto">
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
        <div className="footer-column flex justify-start items-start">
          <img src={workoIcon} alt="" className="h-8 aspect-square me-3 rounded-full" />
          <p className="wheading">
            Worko
          </p>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>
              <Link to="/integration" className="hover:text-gray-100">
                Integration
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-gray-100">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-100">
                Docs
              </Link>
            </li>
            <li>
              <Link to="/changelog" className="hover:text-gray-100">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about" className="hover:text-gray-100">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-100">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-100">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/legal/dpa" className="hover:text-gray-100">
                DPA
              </Link>
            </li>
            <li>
              <Link to="/legal/privacy-policies" className="hover:text-gray-100">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/legal/terms-of-services" className="hover:text-gray-100">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/legal/report-vulnerability" className="hover:text-gray-100">
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
