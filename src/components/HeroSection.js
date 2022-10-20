import "./HeroSection.css";
import React from "react";
import download5 from "./assets/Rectangle 781.png";
import download11 from "./assets/Zahanati.png";
import download21 from "./assets/Rectangle 779.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="content-image">
        <img src={download21} alt="" />
      </div>
      <div className="content">
        <h1>The physical world meets the digital world—and they cooperate.</h1>
      </div>
      <div className="content-heading">
        <h1>Africa’s Leading High-Tech IoT solution company</h1>
        <p>
          In this hyperconnected world, digital systems can record, monitor, and
          adjust each interaction between connected things.The physical world
          meets the digital world— and they cooperate.
        </p>
      </div>
      <div className="content-image2">
        <img src={download5} alt="" />
      </div>
      <div className="content-section1">
        <div className="card1">
          <h2>Solutions for Africans by Africans</h2>
          <p className="health-section">Healthcare</p>
          <p>Manufacturing</p>
          <p>Transportation</p>
          <p>Business</p>
        </div>
      </div>
      <div className="info-card1">
        <div className="informaton-section">
          <p>
            With Zahanati, we aim to build a smart medical pod that whose intent
            and purpose is to alleviate problems/challenges associated with
            primary healthcare in Africa including; Longer wait times for
            diagnosis Incorrect diagnosis Regular medical testing and checkups.
          </p>
        </div>
        <div className="content-image3">
          <img src={download11} alt="" />
        </div>

        <div className="italice">
          <Link to="/Stories" className="btn">
            <p>Read more about Zahanati</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
