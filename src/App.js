import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/project'; // Ensure the import path is correct
import Skills from './components/skills'; // Ensure the import path is correct
import Contact from './components/contact'; // Ensure the import path is correct
import Certification from './components/certification';
import Internship from './components/internship';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certification">certification</a></li>
          <li><a href="#internship">internship</a></li>


          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certification"><Certification /></section>
        <section id="internship"><Internship /></section>
        <section id="contact"><Contact /></section>
        
        
      </main>
    </Router>
  );
}

export default App;
