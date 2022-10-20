import React from "react";
import "./Footer.css";
import download17 from "./assets/playstore.webp";
import download18 from "./assets/Vector (2).png";
import download19 from "./assets/Screen.png";
import download20 from "./assets/Vector (5).png";
import download21 from "./assets/Zahanati.png";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="information-page">
        <div className="text">
          <h1>Download the Zahanati app today</h1>
        </div>
        <div className="icon-a">
          <img src={download17} alt="" />
        </div>
        <div className="text1">
          <Link to="/https://play.google.com/store/apps?">
            <p>Google play store</p>
          </Link>
        </div>
        <div className="icon-b">
          <img src={download18} alt="" />
        </div>
      </div>
      <div className="text2">
        <p>Apple play store</p>
      </div>
      <div className="screen">
        <img src={download19} alt="" />
      </div>
      <div className="screen2">
        <img src={download20} alt="" />
      </div>
      <div className="right">
        <p>Get Zahanati mobile app</p>
      </div>
      <div className="img-right">
        <img src={download21} alt="" />
      </div>
      <div className="social">
        <Link to="/https://twitter.com/CarrenChepkori4">
          <FaTwitter
            size={30}
            style={{ color: "#000000", marginRight: "2rem" }}
          />
        </Link>
        <FaFacebook
          size={30}
          style={{ color: "#000000", marginRight: "2rem" }}
        />
        <FaInstagram
          size={30}
          style={{ color: "#000000", marginRight: "2rem" }}
        />
        <FaTiktok size={30} style={{ color: "#000000", marginRight: "2rem" }} />
      </div>
      <div className="right1">
        <p>Products and pricing </p>
        <p>Products</p>
        <p>Pricing</p>
        <p>Free services </p>
        <p>Flexible purchase options </p>
      </div>
      <div className="right2">
        <p>Solutions and support</p>
        <p>Solutions</p>
        <p>Resources for COVID-19</p>
        <p>Solution architectures </p>
        <p>Support </p>
      </div>
      <div className="left1">
        <p>Partners </p>
        <p>IoTCE Marketplace</p>
        <p>Find a partner </p>
        <p>Technology Partners </p>
      </div>
      <div className="left2">
        <p>Resources</p>
        <p>Training and Certification</p>
        <p>Documentation</p>
        <p>Updates</p>
        <p>Blog </p>
        <p>Events and Webinars </p>
      </div>
    </div>
  );
};

export default Footer;
