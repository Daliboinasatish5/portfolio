import React from 'react';
import '../styles/About.css'; // Adjust path if needed
import myPhoto from './my-photo.jpg'; // Adjust path if needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>


      
      <img src={myPhoto} alt="DALIBOINA SATISH" className="about-photo" />
      <p className="about-text">
        Hello! I'm DALIBOINA SATISH, a passionate developer with a keen interest in 3
        building innovative solutions. I have experience in various technologies including 
        Python, HTML/CSS, and machine learning. My journey in tech began with a fascination 
        for how software can solve real-world problems, and I have since honed my skills 
        through numerous projects and continuous learning.
      </p>
      <p className="about-text">
        My expertise spans across several domains:
        <ul>
          <li><strong>Python:</strong> Proficient in Python programming and various libraries.</li>
          <li><strong>HTML/CSS:</strong> Skilled in creating responsive and visually appealing web pages.</li>
          <li><strong>Flask:</strong> Experience in developing web applications using Flask.</li>
          <li><strong>Machine Learning:</strong> Knowledgeable in applying machine learning techniques to analyze and predict data.</li>
        </ul>
      </p>
      <p className="about-text">
        I'm constantly seeking new challenges and opportunities to grow. Feel free to connect with me or check out my projects!
      </p>
    </div>
  );
};

export default About;





