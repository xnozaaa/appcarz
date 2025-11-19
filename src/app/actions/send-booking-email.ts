'use server';

import { transporter } from '@/lib/nodemailer';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  service: string;
  specialRequests?: string;
}

export async function sendBookingEmail(data: BookingData) {
  try {
    const serviceTypes: Record<string, string> = {
      'private-hire': 'Private Hire Taxi',
      'airport-transfer': 'Airport Transfer',
      'special-event': 'Special Event Transportation',
      'corporate': 'Corporate Transportation',
    };

    const serviceName = serviceTypes[data.service] || data.service;

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Poppins', Arial, sans-serif;
              line-height: 1.6;
              color: #0B2838;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #0B2838;
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .logo {
              font-size: 32px;
              font-weight: 700;
              margin-bottom: 10px;
            }
            .logo-app {
              color: white;
            }
            .logo-carz {
              color: #FF6B6B;
            }
            .content {
              background-color: #ffffff;
              padding: 30px;
              border: 1px solid #e5e5e5;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              font-size: 18px;
              font-weight: 600;
              color: #0B2838;
              margin-bottom: 15px;
              padding-bottom: 8px;
              border-bottom: 2px solid #FF6B6B;
            }
            .info-row {
              display: flex;
              margin-bottom: 12px;
            }
            .label {
              font-weight: 600;
              color: #0B2838;
              width: 180px;
              flex-shrink: 0;
            }
            .value {
              color: #686868;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #686868;
              border-radius: 0 0 8px 8px;
            }
            .highlight {
              background-color: #fff3cd;
              padding: 15px;
              border-radius: 6px;
              border-left: 4px solid #FF6B6B;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">
              <span class="logo-app">APP</span><span class="logo-carz">CARZ</span>
            </div>
            <p style="margin: 0; font-size: 16px;">New Booking Request</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">Customer Information</div>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${data.name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${data.email}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${data.phone}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Journey Details</div>
              <div class="info-row">
                <span class="label">Pick-up Location:</span>
                <span class="value">${data.pickupLocation}</span>
              </div>
              <div class="info-row">
                <span class="label">Drop-off Location:</span>
                <span class="value">${data.dropoffLocation}</span>
              </div>
              <div class="info-row">
                <span class="label">Date:</span>
                <span class="value">${new Date(data.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="info-row">
                <span class="label">Time:</span>
                <span class="value">${data.time}</span>
              </div>
              <div class="info-row">
                <span class="label">Passengers:</span>
                <span class="value">${data.passengers}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Service Type</div>
              <div class="info-row">
                <span class="value">${serviceName}</span>
              </div>
            </div>

            ${data.specialRequests ? `
              <div class="section">
                <div class="section-title">Special Requests</div>
                <div class="highlight">
                  ${data.specialRequests}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="footer">
            <p style="margin: 0 0 10px 0;">This booking request was submitted via the App Carz website.</p>
            <p style="margin: 0;">Please contact the customer within 24 hours to confirm the booking.</p>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const emailText = `
NEW BOOKING REQUEST - APP CARZ

CUSTOMER INFORMATION
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

JOURNEY DETAILS
Pick-up Location: ${data.pickupLocation}
Drop-off Location: ${data.dropoffLocation}
Date: ${new Date(data.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time: ${data.time}
Passengers: ${data.passengers}

SERVICE TYPE
${serviceName}

${data.specialRequests ? `SPECIAL REQUESTS\n${data.specialRequests}\n` : ''}
---
This booking request was submitted via the App Carz website.
Please contact the customer within 24 hours to confirm the booking.
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"App Carz Booking System" <${process.env.EMAIL_USER}>`,
      to: 'appcarz4@gmail.com',
      subject: `New Booking Request - ${data.name} - ${new Date(data.date).toLocaleDateString('en-GB')}`,
      text: emailText,
      html: emailHtml,
      replyTo: data.email,
    });

    console.log('✓ Booking email sent successfully:', info.messageId);
    return { 
      success: true, 
      messageId: info.messageId,
      message: 'Booking request sent successfully!' 
    };
  } catch (error) {
    console.error('❌ Failed to send booking email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send booking request. Please try again or call us directly at 01922 500 500.' 
    };
  }
}
