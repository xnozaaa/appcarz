import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      pickupLocation,
      dropoffLocation,
      passengers,
      date,
      time,
      vehicleType,
      additionalRequirements
    } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'appcarz4@gmail.com',
      subject: `New Booking Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B2838; border-bottom: 3px solid #FF6B6B; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Journey Details</h3>
            <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
            <p><strong>Dropoff Location:</strong> ${dropoffLocation}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Number of Passengers:</strong> ${passengers}</p>
            <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
          </div>

          ${additionalRequirements ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Additional Requirements</h3>
            <p>${additionalRequirements}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #686868; font-size: 12px;">
            <p>This booking request was submitted through the App Carz website.</p>
            <p>Please respond to the customer as soon as possible.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}