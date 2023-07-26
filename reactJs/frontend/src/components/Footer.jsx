import React from "react";
import "../Stylesheet/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerlogo">
          {" "}
          <img src="./images/logo(1).png" alt="loading fail" />{" "}
          <span id="companyname">FelxStart</span>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
        </div>

        <div className="footerinfo">
          <div className="footerLink">
            <h2>useful link</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footerservices">
            <h2>OUR SEVICES</h2>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Produect managment</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="footercontactus">
            <h2>Contact us</h2>
            <p>
              A108 Adam Street <br /> New York,NY 535022 <br /> United States
            </p>
            <p>
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p>
              {" "}
              <b>Email:</b> info@example.com
            </p>
          </div>
        </div>
      </div>
      <p>
        © Copyright FlexStart. All Rights Reserved Designed by BootstrapMade
      </p>
    </footer>
  );
};

export default Footer;
