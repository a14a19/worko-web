// Footer.jsx

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaMailBulk, FaEnvelope, FaTwitter, FaAt, FaSubscript } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import workoIcon from "../../assets/worko.webp";
import subStackIcon from "../../assets/icons/substack.svg";

const Footer = () => {
  return (
    <div className="mt-[10rem] max-w-[1140px] mb-4 mx-auto ">
      {/* Newsletter Box */}
      <div className="newsletter-box flex justify-between item-center flex-col md:flex-row">
        <div className="subscribe-heading bg-gradient-to-b from-gray-600 to-white text-transparent bg-clip-text">
          Join our Newsletter
          <div className="exclusive-content">
            Get exclusive content and become a part of the Worko community.
          </div>
        </div>

        <div className="email-input-container ">
          <input
            type="email"
            placeholder="Enter Email address"
            className="email-input"
            style={{ color: "white" }}
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      {/* Four-Column Footer */}
      <div className="footer-container block justify sm:flex lg:flex bg-transparent">
        <Link to="/">
          <div className="footer-column flex justify-start items-start">
            <img
              src={workoIcon}
              alt=""
              className="h-8 aspect-square me-3 rounded-full"
            />
            <p className="wheading">Worko</p>
          </div>
        </Link>
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
              <Link to="/docs" className="hover:text-gray-100">
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
            <li className="hover:text-gray-100">
              <Link to="/">About Us</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/">Contact</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li className="hover:text-gray-100">
              <Link to="/legal/dpa">DPA</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/legal/privacy-policies">Privacy Policy</Link>
            </li>
            <li className="hover:text-gray-100">
              <Link to="/legal/terms-of-services">Terms of Service</Link>
            </li>
            <li>
              <Link
                to="/legal/report-vulnerability"
                className="hover:text-gray-100"
              >
                Report a Vulnerability
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media Icons */}
      <div className="footer-bottom md:flex-row flex-col md:items-end items-start">
        <div className="footer-copyright md:mb-0 mb-4">
          © 2023 Worko Inc. All rights reserved.
        </div>
        <div className="footer-social-icons">
          {/* Use react-icons here */}
          <Link to="https://www.linkedin.com/company/worko-team/" className="social-icon-link" target="_blank" title="LinkedIn">
            <FaLinkedin className="social-icon" />
          </Link>
          <Link to="mailto:weareworko@gmail.com" className="social-icon-link" target="_blank" title="Mail">
            <FaEnvelope className="social-icon" />
          </Link>
          <Link to="https://x.com/weareworko" className="social-icon-link" target="_blank" title="X">
            <FaTwitter className="social-icon" />
          </Link>
          <Link to="https://instagram.com/joinworko" className="social-icon-link" target="_blank" title="Instagram">
            <FaInstagram className="social-icon" />
          </Link>
          <Link to="https://www.threads.net/@joinworko" className="social-icon-link" target="_blank" title="Thread">
            <FaAt className="social-icon" />
          </Link>
          <Link to="https://substack.com/@worko" className="social-icon-link" target="_blank" title="Substack">
            {/* <FaSubscript className="" /> */}
            <img className="social-icon h-5" src={subStackIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
