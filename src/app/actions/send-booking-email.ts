'use server';

import { escapeHtml, sendResendEmail, text } from '@/lib/resend-email';

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
    const name = text(data.name);
    const email = text(data.email);
    const phone = text(data.phone);
    const pickupLocation = text(data.pickupLocation);
    const dropoffLocation = text(data.dropoffLocation);
    const date = text(data.date);
    const time = text(data.time);
    const passengers = text(data.passengers);
    const service = text(data.service);
    const specialRequests = text(data.specialRequests);

    if (
      !name ||
      !email ||
      !phone ||
      !pickupLocation ||
      !dropoffLocation ||
      !date ||
      !time ||
      !passengers ||
      !service
    ) {
      return {
        success: false,
        error: 'Please complete all required booking fields.',
      };
    }

    const serviceTypes: Record<string, string> = {
      'private-hire': 'Private Hire Taxi',
      'airport-transfer': 'Airport Transfer',
      'special-event': 'Special Event Transportation',
      'corporate': 'Corporate Transportation',
    };

    const serviceName = serviceTypes[service] || service;
    const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString(
      'en-GB',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );

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
                <span class="value">${escapeHtml(name)}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${escapeHtml(email)}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${escapeHtml(phone)}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Journey Details</div>
              <div class="info-row">
                <span class="label">Pick-up Location:</span>
                <span class="value">${escapeHtml(pickupLocation)}</span>
              </div>
              <div class="info-row">
                <span class="label">Drop-off Location:</span>
                <span class="value">${escapeHtml(dropoffLocation)}</span>
              </div>
              <div class="info-row">
                <span class="label">Date:</span>
                <span class="value">${formattedDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Time:</span>
                <span class="value">${escapeHtml(time)}</span>
              </div>
              <div class="info-row">
                <span class="label">Passengers:</span>
                <span class="value">${escapeHtml(passengers)}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Service Type</div>
              <div class="info-row">
                <span class="value">${escapeHtml(serviceName)}</span>
              </div>
            </div>

            ${specialRequests ? `
              <div class="section">
                <div class="section-title">Special Requests</div>
                <div class="highlight">
                  ${escapeHtml(specialRequests)}
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
Name: ${name}
Email: ${email}
Phone: ${phone}

JOURNEY DETAILS
Pick-up Location: ${pickupLocation}
Drop-off Location: ${dropoffLocation}
Date: ${formattedDate}
Time: ${time}
Passengers: ${passengers}

SERVICE TYPE
${serviceName}

${specialRequests ? `SPECIAL REQUESTS\n${specialRequests}\n` : ''}
---
This booking request was submitted via the App Carz website.
Please contact the customer within 24 hours to confirm the booking.
    `;

    const messageId = await sendResendEmail({
      to: process.env.BOOKING_TO_EMAIL?.trim() || 'info@appcarz.co.uk',
      subject: `New Booking Request - ${name} - ${new Date(
        `${date}T00:00:00`
      ).toLocaleDateString('en-GB')}`,
      text: emailText,
      html: emailHtml,
      replyTo: email,
    });

    console.log('✓ Booking email sent successfully:', messageId);
    return { 
      success: true, 
      messageId,
      message: 'Booking request sent successfully!' 
    };
  } catch (error) {
    console.error('❌ Failed to send booking email:', error);
    return { 
      success: false, 
      error: 'Failed to send booking request. Please try again or call us directly at 01922 500 500.'
    };
  }
}
