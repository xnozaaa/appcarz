import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Google App Password
  },
});

// Verify connection configuration
transporter.verify((error) => {
  if (error) {
    console.error('❌ Nodemailer configuration error:', error);
  } else {
    console.log('✓ Nodemailer is ready to send emails');
  }
});
