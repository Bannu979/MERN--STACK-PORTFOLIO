import express from 'express';

const router = express.Router();

router.get('/projects', (req, res) => {
  res.json([
    {
      title: "Hospital Management System",
      stack: "MERN Stack",
      description: "A comprehensive software solution designed to streamline hospital operations...",
      link: "https://your-hospital-management-demo.com"
    },
    {
      title: "Teckzite2K25 EEE Event Web Portals",
      stack: "MERN Stack",
      description: "Developed for a technical fest in the EEE department using MERN stack and Socket.io...",
      link: "https://your-teckzite-demo.com"
    },
    {
      title: "E-commerce website",
      stack: "MERN Stack",
      description: "A full-stack e-commerce platform built using MongoDB, Express.js, React, and Node.js...",
      link: "https://your-ecommerce-demo.com"
    },
    {
      title: "HR Analytics Dashboard",
      stack: "Power BI",
      description: "Developed an interactive dashboard to analyze employee attrition...",
      link: "https://your-hr-analytics-demo.com"
    }
  ]);
});

router.get('/education', (req, res) => {
  res.json([
    {
      institution: "Rajiv Gandhi University of Knowledge and Technologies",
      degree: "BTech in Computer Science and Engineering",
      cgpa: "8.45",
      year: "2022 – 2026",
      location: "Andhrapradesh, India"
    },
    {
      institution: "Rajiv Gandhi University of Knowledge and Technologies",
      degree: "Pre University Course",
      cgpa: "9.70",
      year: "2020 – 2022",
      location: "Andhrapradesh, India"
    },
    {
      institution: "Sravanthi High School",
      degree: "SSC",
      cgpa: "10.0",
      year: "2020",
      location: "Andhrapradesh, India"
    }
  ]);
});

router.get('/skills', (req, res) => {
  res.json({
    languages: ["Java", "C", "JavaScript", "Power BI (DAX, Power Query)", "SQL", "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)", "Excel", "Generative AI"],
    tools: ["VS Code", "IntelliJ Idea Ultimate"],
    frameworks: ["GitHub", "ReactJS", "Redux", "NodeJS", "ExpressJS", "Git", "MongoDB", "Tailwind Css", "HTML", "CSS"]
  });
});

export default router; 