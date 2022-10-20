import "./NavbarStyles.css";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="">
        <h1>Adanians IoTCE</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="About/">About IoTCE</Link>
        </li>
        <li>
          <Link to="Products/">Products</Link>
        </li>
        <li>
          <Link to="OurSolution/">Our Solution</Link>
        </li>
        <li>
          <Link to="Blog/">Blog</Link>
        </li>
        <li>
          <Link to="stories/">IoTCE Stories</Link>
        </li>
        <li>
          <Link to="signIn/">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
