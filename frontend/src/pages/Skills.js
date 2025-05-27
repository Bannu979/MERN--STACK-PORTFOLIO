import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState({ languages: [], tools: [], frameworks: [] });

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/skills')
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      className="skills"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <div className="skills-section">
        <div>
          <h3>Languages</h3>
          <ul>{skills.languages.map((lang, idx) => <li key={idx}>{lang}</li>)}</ul>
        </div>
        <div>
          <h3>Developer Tools</h3>
          <ul>{skills.tools.map((tool, idx) => <li key={idx}>{tool}</li>)}</ul>
        </div>
        <div>
          <h3>Frameworks/Technologies</h3>
          <ul>{skills.frameworks.map((fw, idx) => <li key={idx}>{fw}</li>)}</ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills; 