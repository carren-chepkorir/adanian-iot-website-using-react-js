import React from "react";
import "./PatnerCard.css";
import download7 from "./assets/Zahanati.png";
import download8 from "./assets/Adanian Labs-logo 1.png";
import download9 from "./assets/Phema Agri- logo 1.png";
import download10 from "./assets/Afya Rekod -logo 1.png";
import download12 from "./assets/Rectangle 775.png";
import download13 from "./assets/Rectangle 775 (1).png";
import download14 from "./assets/Rectangle 775 (2).png";
import download15 from "./assets/Rectangle 775 (3).png";
const PatnerCard = () => {
  return (
    <div className="patner">
      <div className="patner-heading">
        <h2>IoT Center of Excellence Partners</h2>
      </div>
      <div className="img1-container">
        <img src={download7} alt="" />
      </div>
      <div className="img2-container">
        <img src={download8} alt="" />
      </div>
      <div className="img3-container">
        <img src={download9} alt="" />
      </div>
      <div className="img4-container">
        <img src={download10} alt="" />
      </div>
      <div className="patner-section">
        <div className="patner1-heading">
          <h2>Zahanati Center- The Smart Pod</h2>
        </div>
        <div className="patner1-container">
          <p>
            Zahanati is a smart medical diagnostic pod. Being the first of it's
            kind, Zahanti is working on the next generation of medical
            diagnostic systems, with the ability to quicky take and record
            patients medical data. All this information is securely stored and
            available for the patient at their convenience through the use of
            the Zahanati App.
          </p>
        </div>

        <div className="name">
          <h1>Bendon Murgor -Founder, Zahanati Center</h1>
        </div>
        <div className="patner1-image">
          <img src={download12} alt="" />
        </div>
        <div className="logo1">
          <img src={download7} alt="" />
        </div>
      </div>
      <div className="patner2-section">
        <div className="patner2-heading">
          <h2>Adanian Labs Global</h2>
        </div>
        <div className="patner2-container">
          <p>
            Adanian Labs is a venture studio that supports startups through a 6
            months to a year Incubation program. Adanian Labs is using IoTCE's
            Smart Employee management solutions to help manage all their
            employees all through their 5 countries. With solutions such as
            smart work badges that helps manage big teams, Adanian Labs has been
            involved from day one incorporating Smart IoT solutions to help face
            out some of the old school ways of managing a workspace.
          </p>
        </div>
        <div className="patner2-image">
          <img src={download13} alt="" />
        </div>
        <div className="logo2">
          <img src={download8} alt="" />
        </div>
      </div>
      <div className="patner3-section">
        <div className="patner3-heading">
          <h2>Phema-Agri</h2>
        </div>
        <div className="patner3-container">
          <p>
            Phema Agri is one of the startups being Incubated by Adanian Labs.
            Launched in Tanzania, Phema Agri looks to help farmers manage their
            farms, livestock and produce all in a smart way. Phema Agri is
            looking to employ SmartFarm, a smart farm management solution by
            IoTCE. Efficient irrigation guided by sensors that monitor soil
            moisture content are just among the solutions in SmartFarm.
          </p>
        </div>
        <div className="patner3-image">
          <img src={download14} alt="" />
        </div>
        <div className="logo3">
          <img src={download9} alt="" />
        </div>
      </div>
      <div className="patner4-section">
        <div className="patner4-heading">
          <h2>Afya Rekod</h2>
        </div>
        <div className="patner4-container">
          <p>
            Phema Agri is one of the startups being Incubated by Adanian Labs.
            Launched in Tanzania, Phema Agri looks to help farmers manage their
            farms, livestock and produce all in a smart way. Phema Agri is
            looking to employ SmartFarm, a smart farm management solution by
            IoTCE. Efficient irrigation guided by sensors that monitor soil
            moisture content are just among the solutions in SmartFarm.
          </p>
        </div>
        <div className="patner4-image">
          <img src={download15} alt="" />
        </div>
        <div className="logo4">
          <img src={download10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PatnerCard;
