import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="edu-title">Education</h2>

      <div className="edu-container">
        <div className="edu-card">
          <h3 className="sub-hed">Bachelor Of Engineering</h3>
          <p>Gates Institute Of Technology - Gooty</p>
          <p>Computer Science And Engineering</p>
        </div>

        <div className="edu-card">
          <h3 className="sub-hed">Diploma</h3>
          <p>M.J.R. College of Engineering & Technology - Piler</p>
          <p>Mechanical</p>
        </div>
      </div>
    </div>
  );
};

export default Education;