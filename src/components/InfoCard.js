import React from "react";
import "./InfoCard.css";
import download5 from "./assets/Rectangle 781.png";
import download11 from "./assets/Zahanati.png";
import { Link } from "react-router-dom";
const InfoCard = () => {
  return (
    <div className="product">
      <div className="product-heading">
        <h1>Africa’s Leading High-Tech IoT solution company</h1>
        <p>
          In this hyperconnected world, digital systems can record, monitor, and
          adjust each interaction between connected things.The physical world
          meets the digital world— and they cooperate.
        </p>
      </div>
      <div className="product-container">
        <div className="card">
          <h2>Solutions for Africans by Africans</h2>
          <p className="health">Healthcare</p>
          <p>Manufacturing</p>
          <p>Transportation</p>
          <p>Business</p>
        </div>
      </div>
      <div className="image-container">
        <img src={download5} alt="" />
      </div>
      <div className="info-card">
        <div className="informaton">
          <p>
            With Zahanati, we aim to build a smart medical pod that whose intent
            and purpose is to alleviate problems/challenges associated with
            primary healthcare in Africa including; Longer wait times for
            diagnosis Incorrect diagnosis Regular medical testing and checkups.
          </p>
        </div>
        <div className="image2-container">
          <img src={download11} alt="" />
        </div>

        <div className="italic">
          <Link to="/Stories" className="btn">
            <p>Read more about Zahanati</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
