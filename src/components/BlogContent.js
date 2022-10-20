import React from "react";
import download16 from "./assets/Rectangle 768.png";
import "./BlogContent.css";
const BlogContent = () => {
  return (
    <div className="Blog-section">
      <div className="blog-heading">
        <h2>What is IoTCE?</h2>
      </div>
      <div className="blog-content">
        <p>
          IoTCE is a Center of Excellence focused on IoT. We are a team, a
          shared facility and an entity that provides leadership, best
          practices, research, support and/or training in matters IoT(Internet
          of Things) incl- tangible objects, that are embedded with sensors,
          processing ability, software, and other technologies, and that connect
          and exchange data with other devices and systems over the Internet or
          other communications networks.
        </p>
      </div>
      <div className="Info-heading">
        <h1>Vision 2030</h1>
      </div>
      <div className="info">
        <p>
          The aim of the Vision is to make Kenya a globally competitive and
          prosperous country by transforming it into an industrialized
          middle-income nation, providing high quality of life for all its
          citizens in a clean and secure environment.
        </p>
      </div>
      <div className="Info1-heading">
        <h2>Why IoTCE</h2>
      </div>
      <div className="info2">
        <p>
          As a continent, Africa, there is an eminent need to continue building
          our IT infrastructure in order to develop sustainable smart solutions
          aimed at solving problems with high social impact.
        </p>
      </div>
      <div className="Info2-heading">
        <h1>Our Mandate</h1>
      </div>
      <div className="info3">
        <p>
          At IoT Centre of Excellence, we are passionate about creating value
          and sustainable solutions through implementation, using three modules:
          Research and development, IoT products and services, Knowledge
          sharing, Thought leadership and IoT best practices
        </p>
      </div>
      <div className="sub-head">
        <h1>Driving connectivity and innovation across Africa</h1>
        <p>
          Our key drivers for this new wave of smart solutions include the rise
          of Big Data Analytics, Mobile Communications, Semi-Autonomous Cars and
          to a large degree the need for device interconnectivity across the
          board.
        </p>
      </div>
      <div className="comment">
        <p>Africa is growing and so should you </p>
      </div>
      <div className="sub-head-image">
        <img src={download16} alt="" />
      </div>
    </div>
  );
};

export default BlogContent;
