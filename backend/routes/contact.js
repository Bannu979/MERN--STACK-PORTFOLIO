import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `<b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b> ${message}`
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err });
  }
});

export default router; 