import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/education')
      .then(res => setEducation(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      className="education"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, idx) => (
          <div className="education-card" key={idx}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <span>CGPA: {edu.cgpa}</span>
            <span>{edu.year}</span>
            <span>{edu.location}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education; 