import React from "react";
import "./SolutionCard.css";
import download1 from "./assets/healthcare-vector.jpg";
import download2 from "./assets/Transport.png";
import download3 from "./assets/Vector (6).png";
import download4 from "./assets/agri.jpg";

const SolutionCard = () => {
  return (
    <div className="solutions">
      <div className="solution-heading">
        <p>Learn more about IoT Center of Excellence for your business </p>
      </div>
      <div className="solution-content">
        <div className="card">
          <h2>Healthcare</h2>
          <img src={download1} alt="true" />
        </div>
        <div className="card">
          <h2>Transport</h2>
          <img src={download2} alt="true" />
        </div>
        <div className="card">
          <h2>Gadgets</h2>
          <img src={download3} alt="true" />
        </div>
        <div className="card">
          <h2>Agriculture</h2>
          <img src={download4} alt="true" />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
