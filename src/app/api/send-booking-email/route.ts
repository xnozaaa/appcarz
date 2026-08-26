import { NextRequest, NextResponse } from "next/server";
import { escapeHtml, sendResendEmail } from "@/lib/resend-email";
import {
  cleanText,
  guardPublicPost,
  isValidEmail,
} from "@/lib/request-security";

const serviceTypes: Record<string, string> = {
  "private-hire": "Private Hire Taxi",
  "airport-transfer": "Airport Transfer",
  "special-event": "Special Event Transportation",
  corporate: "Corporate Transportation",
};

export async function POST(request: NextRequest) {
  const blocked = guardPublicPost(request, {
    scope: "booking",
    limit: 8,
    maxBodyBytes: 24_000,
  });
  if (blocked) {
    return NextResponse.json({ error: blocked.error }, { status: blocked.status });
  }

  try {
    const body = await request.json();
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const phone = cleanText(body.phone, 40);
    const pickupLocation = cleanText(body.pickupLocation, 300);
    const dropoffLocation = cleanText(body.dropoffLocation, 300);
    const passengers = cleanText(body.passengers, 2);
    const date = cleanText(body.date, 10);
    const time = cleanText(body.time, 5);
    const service = cleanText(body.vehicleType || body.service, 40);
    const additionalRequirements = cleanText(
      body.additionalRequirements || body.specialRequests,
      2_000,
    );

    if (
      !name ||
      !phone ||
      !pickupLocation ||
      !dropoffLocation ||
      !isValidEmail(email) ||
      !serviceTypes[service] ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) ||
      !/^[1-8]$/.test(passengers) ||
      phone.length < 7
    ) {
      return NextResponse.json(
        { error: "Please check all required booking fields." },
        { status: 400 },
      );
    }

    await sendResendEmail({
      to: process.env.BOOKING_TO_EMAIL?.trim() || "info@appcarz.co.uk",
      subject: `New Booking Request from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B2838; border-bottom: 3px solid #FF6B6B; padding-bottom: 10px;">New Booking Request</h2>
          <h3>Customer information</h3>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <h3>Journey details</h3>
          <p><strong>Pickup:</strong> ${escapeHtml(pickupLocation)}</p>
          <p><strong>Drop-off:</strong> ${escapeHtml(dropoffLocation)}</p>
          <p><strong>Date:</strong> ${escapeHtml(date)}</p>
          <p><strong>Time:</strong> ${escapeHtml(time)}</p>
          <p><strong>Passengers:</strong> ${escapeHtml(passengers)}</p>
          <p><strong>Service:</strong> ${escapeHtml(serviceTypes[service])}</p>
          ${
            additionalRequirements
              ? `<h3>Additional requirements</h3><p>${escapeHtml(additionalRequirements).replaceAll("\n", "<br>")}</p>`
              : ""
          }
          <p style="color: #686868; font-size: 12px;">Submitted through the App Carz website.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Booking request sent successfully" });
  } catch {
    return NextResponse.json(
      { error: "Unable to send the booking request. Please check the form and try again." },
      { status: 500 },
    );
  }
}
