"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, User, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'private-hire',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };
      
      if (response.ok) {
        toast.success('Booking request sent successfully!', {
          description: 'We will contact you within 24 hours to confirm your reservation.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          dropoffLocation: '',
          date: '',
          time: '',
          passengers: '1',
          service: 'private-hire',
          specialRequests: ''
        });
      } else {
        toast.error('Failed to send booking request', {
          description: result.error || 'Please try again or call us directly at 01922 500 500.'
        });
      }
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or call us directly at 01922 500 500.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <User className="mr-2 h-4 w-4 text-[#0B2838]" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <Phone className="mr-2 h-4 w-4 text-[#0B2838]" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="01922 500 500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
          <Mail className="mr-2 h-4 w-4 text-[#0B2838]" />
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="john.smith@example.com"
        />
      </div>

      {/* Journey Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="pickupLocation" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <MapPin className="mr-2 h-4 w-4 text-[#0B2838]" />
            Pick-up Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            required
            value={formData.pickupLocation}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="165 Stafford Street, Walsall"
          />
        </div>

        <div>
          <label htmlFor="dropoffLocation" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <MapPin className="mr-2 h-4 w-4 text-[#0B2838]" />
            Drop-off Location *
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            required
            value={formData.dropoffLocation}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Birmingham Airport"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="date" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <Calendar className="mr-2 h-4 w-4 text-[#0B2838]" />
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            disabled={isSubmitting}
            min={new Date().toISOString().split('T')[0]}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <Clock className="mr-2 h-4 w-4 text-[#0B2838]" />
            Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="passengers" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
            <User className="mr-2 h-4 w-4 text-[#0B2838]" />
            Passengers *
          </label>
          <select
            id="passengers"
            name="passengers"
            required
            value={formData.passengers}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
          Service Type *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="private-hire">Private Hire Taxi</option>
          <option value="airport-transfer">Airport Transfer</option>
          <option value="special-event">Special Event Transportation</option>
          <option value="corporate">Corporate Transportation</option>
        </select>
      </div>

      <div>
        <label htmlFor="specialRequests" className="mb-2 flex items-center text-sm font-semibold text-[#0B2838]">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={4}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-[#0B2838] focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Child seat needed, wheelchair accessible vehicle, luggage information, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#FF6B6B] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#ff5252] hover:shadow-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
      </button>

      <p className="text-center text-sm text-[#686868]">
        By submitting this form, you agree to our terms of service. We'll contact you within 24 hours to confirm your booking.
      </p>
    </form>
  );
};
