"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, User, Phone, Mail, Clock } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - for now, just log
    console.log('Booking request:', formData);
    // In production, this would send to an API endpoint
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
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
          <label htmlFor="name" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <User className="mr-2 h-4 w-4" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <Phone className="mr-2 h-4 w-4" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
            placeholder="01922 500 500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
          <Mail className="mr-2 h-4 w-4" />
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
          placeholder="john.smith@example.com"
        />
      </div>

      {/* Journey Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="pickupLocation" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <MapPin className="mr-2 h-4 w-4" />
            Pick-up Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            required
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
            placeholder="165 Stafford Street, Walsall"
          />
        </div>

        <div>
          <label htmlFor="dropoffLocation" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <MapPin className="mr-2 h-4 w-4" />
            Drop-off Location *
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            required
            value={formData.dropoffLocation}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
            placeholder="Birmingham Airport"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="date" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <Calendar className="mr-2 h-4 w-4" />
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            <Clock className="mr-2 h-4 w-4" />
            Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
          />
        </div>

        <div>
          <label htmlFor="passengers" className="mb-2 flex items-center text-sm font-medium text-app-carz-text-secondary">
            Passengers *
          </label>
          <select
            id="passengers"
            name="passengers"
            required
            value={formData.passengers}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-app-carz-text-secondary">
          Service Type *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
        >
          <option value="private-hire">Private Hire Taxi</option>
          <option value="airport-transfer">Airport Transfer</option>
          <option value="special-event">Special Event Transportation</option>
          <option value="corporate">Corporate Transportation</option>
        </select>
      </div>

      <div>
        <label htmlFor="specialRequests" className="mb-2 block text-sm font-medium text-app-carz-text-secondary">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-app-carz-text-secondary focus:border-app-carz-primary focus:outline-none focus:ring-2 focus:ring-app-carz-primary/20"
          placeholder="Child seat needed, wheelchair accessible vehicle, luggage information, etc."
        />
      </div>

      <button
        type="submit"
        className="btn-text w-full rounded-lg bg-app-carz-button-primary px-8 py-4 text-app-carz-button-text transition-all duration-300 hover:bg-app-carz-button-primary/90 hover:shadow-lg"
      >
        Request Booking
      </button>

      <p className="text-center text-sm text-app-carz-text-tertiary">
        By submitting this form, you agree to our terms of service. We'll contact you within 24 hours to confirm your booking.
      </p>
    </form>
  );
};
