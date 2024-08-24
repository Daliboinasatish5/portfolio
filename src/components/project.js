import React from 'react';
import '../styles/project.css'; // Adjust path if needed

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <ul className="projects-list">
        <li>
          <strong>Sentimental Analysis</strong>: A web application built using HTML and CSS for analyzing sentiments.
        </li>
        <li>
          <strong>Phonebook App</strong>: A phonebook application developed using the MERN stack (MongoDB, Express, React, Node.js).
        </li>
        <li>
          <strong>Note Making App</strong>: A note-taking application created with FastAPI for the backend and React for the frontend.
        </li>
      </ul>
    </div>
  );
};

export default Projects;


