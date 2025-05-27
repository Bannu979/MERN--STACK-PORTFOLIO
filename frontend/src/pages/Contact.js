import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <motion.div
      className="contact"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
        <div className="contact-status">{status}</div>
      </form>
    </motion.div>
  );
};

export default Contact; 