// src/components/Certificates.js
import React from 'react';
import '../styles/certificate.css'; // Ensure this file exists and is properly linked
import cert1Image from './certificate.jpg';
import cert2Image from './certificate2.jpg';
import cert3Image from './certificate3.jpg';

function Certificates() {
  return (
    <section id="certificates">
      <centre><h1>Certificates</h1></centre>
      <ul className="certificates-list">
        <li className="certificate-item">
          <img src={cert1Image} alt="Certificate 1" className="certificate-image" />
          <div className="certificate-details">
            <h3>UDEMY HTML AND CSS,JAVASCRIPT,REACT COURSE</h3>
            <p></p>
            <a href="https://example.com/certificate1" className="certificate-link" target="_blank" rel="noopener noreferrer">
              
            </a>
          </div>
        </li>
        <li className="certificate-item">
          <img src={cert2Image} alt="Certificate 2" className="certificate-image" />
          <div className="certificate-details">
            <h3>EDX:TINY ML</h3>
            <p></p>
            <a href="https://example.com/certificate2" className="certificate-link" target="_blank" rel="noopener noreferrer">
             
            </a>
          </div>
        </li>
        <li className="certificate-item">
          <img src={cert3Image} alt="Certificate 3" className="certificate-image" />
          <div className="certificate-details">
            <h3>EDX:WEB DEVELOPMENT FOR BEGINNERS</h3>
            <p>.</p>
            <a href="https://example.com/certificate3" className="certificate-link" target="_blank" rel="noopener noreferrer">
              
            </a>
          </div>
        </li>
        
      </ul>
    </section>
  );
}

export default Certificates;
