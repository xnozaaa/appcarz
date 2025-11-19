import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || process.env.GMAIL_USER,
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify connection configuration
transporter.verify((error) => {
  if (error) {
    console.error('❌ Nodemailer configuration error:', error);
    console.error('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER ? '✓ Set' : '✗ Not set',
      EMAIL_PASS: process.env.EMAIL_PASS ? '✓ Set' : '✗ Not set',
      GMAIL_USER: process.env.GMAIL_USER ? '✓ Set' : '✗ Not set',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? '✓ Set' : '✗ Not set',
    });
  } else {
    console.log('✓ Nodemailer is ready to send emails');
  }
});