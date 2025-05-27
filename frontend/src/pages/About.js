import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => (
  <motion.div
    className="about"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2>About Me</h2>
    <p>
      I am a passionate Computer Science student at Rajiv Gandhi University of Knowledge and Technologies, with a strong interest in full stack development, data analytics, and building impactful solutions. I love learning new technologies and applying them to real-world projects.
    </p>
    <a href="/PRABHAS-RESUME.pdf" download className="resume-btn">Download Resume</a>
  </motion.div>
);

export default About; 