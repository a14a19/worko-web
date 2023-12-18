import React from "react";
import "./Contact.css";
import { TiMessages } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <div className="ct">
        <div className="ct1">
          <p>Worko CONTACT</p>
        </div>
        <div className="ct2">
          <h1>
            Get in touch with us <br /> today!
          </h1>
          <div className="ct3">
            <p>
              Contact our sales and support teams for demos, onboarding
              assistance, <br /> or any product inquiries.
            </p>
          </div>
        </div>
        <div className="ct4">
          {/* <div>
            <TiMessages/>
            <h1>Message us</h1>
            <p>Message us using our online chat system for <br /> quick and efficient support.</p>
            <hr />
            <p>support@worko.com</p>
          </div> */}
          <div className="message-box">
            <TiMessages />
            <h1>Message us</h1>
            <p>
              Message us using our online chat system for <br /> quick and
              efficient support.
            </p>
            <hr />
            <p>support@worko.com</p>
          </div>
          <div className="message-box">
          <IoCallOutline/>

            <h1>Message us</h1>
            <p>
              Message us using our online chat system for <br /> quick and
              efficient support.
            </p>
            <hr />
            <p>support@worko.com</p>
          </div>
          <div className="message-box">
            <CiLocationOn/>
            <h1>Message us</h1>
            <p>
              Message us using our online chat system for <br /> quick and
              efficient support.
            </p>
            <hr />
            <p>support@wrko.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
