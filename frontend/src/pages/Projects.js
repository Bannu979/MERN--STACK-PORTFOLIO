import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      className="projects"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffd0" }}
          >
            <h3>{proj.title}</h3>
            <span className="project-stack">{proj.stack}</span>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Live site</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 