import React from 'react';
import '../styles/home.css';
import profileImage from './my-photo.jpg'; // Update this path

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Hello, It's Me</h1>
        <h2 className="home-name">Satish</h2>
        <p className="home-subheading">And I'm a Web developer!</p>
        <div className="home-social-icons">
          {/* Add your social media icons here */}
        </div>
        <a href="#about" className="home-button">Let's Show My Portfolio</a>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="Satish" />
      </div>
    </div>
  );
};

export default Home;