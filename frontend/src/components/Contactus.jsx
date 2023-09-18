import React from "react";
import "../Stylesheet/Contactus.css";
const Contactus = () => {
  return (
    <>
      <div className="section-header">
        <h3>CONTACT</h3>
        <h2>CONTACT US</h2>
      </div>
      <div className="contactus">
        <div className="contactusinfo">
          <div className="address">
            <h2>Address</h2>
            <p>A108 Adam Street,</p>
            <p>New York, NY 535022</p>
          </div>
          <div className="callus">
            <h2>Call Us</h2>
            <p>+1 5589 55488 55</p>
            <p>+1 6678 254445 41</p>
          </div>
          <div className="email">
            <h2>Email Us</h2>
            <p>info@example.com</p>
            <p>contact@example.com</p>
          </div>
          <div className="hours">
            <h2>Open Hours</h2>
            <p>Monday - Friday</p>
            <p>9:00AM - 05:00PM</p>
          </div>
        </div>

        <div className="form">
          <div>
            <input type="text" placeholder="Your Name" name="" id="" />
            <input type="text" placeholder="Your Email" name="" id="" />
          </div>
          <input type="text" placeholder="Subject" name="" id="" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contactus;
