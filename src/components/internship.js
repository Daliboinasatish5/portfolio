import React from 'react';
import '../styles/internship.css';
import cer1 from './cer1.jpg';
import cer2 from './cer2.jpg';
import cer3 from './cer3.jpg';

const Internship = () => {
  return (
    <div className="internship-container">
      <h2>Internships</h2>
      <div className="internship-details">
        <h3>Company Name</h3>
        <p>Role: Software Developer Intern</p>
        <p>Duration: MAY 2024 - August 2024</p>
        <p>Responsibilities:</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
          <li>Implemented RESTful APIs and integrated them with frontend components.</li>
        </ul>
      </div>
      <div className="certificates">
        <h3>Certificates</h3>
        <div className="certificate-list">
          <div className="certificate-item">
            <img src={cer1} alt="Certificate 1" />
            <p>MOTIONCUT PYTHON </p>
          </div>
          <div className="certificate-item">
            <img src={cer2} alt="Certificate 2" />
            <p>SWECHA AI INTERNSHIP</p>
          </div>
          <div className="certificate-item">
            <img src={cer3} alt="Certificate 3" />
            <p>FMML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
