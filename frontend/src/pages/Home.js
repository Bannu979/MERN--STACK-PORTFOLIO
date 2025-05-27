import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => (
  <motion.div
    className="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="home-content">
      <h1>Badugu Prabhas</h1>
      <h2>Full Stack Developer & Data Enthusiast</h2>
      <p>
        Motivated Computer Science student seeking opportunities to apply technical skills in software development and web technologies.
      </p>
      <div className="home-socials">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:bprabhas979@gmail.com"><FaEnvelope /></a>
        <a href="/PRABHAS-RESUME.pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
      </div>
    </div>
    <div className="home-bg-effect"></div>
  </motion.div>
);

export default Home; 