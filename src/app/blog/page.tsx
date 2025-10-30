import React from 'react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Tips & News - App Carz Blog | West Midlands Transport Advice',
  description: 'Expert advice on airport transfers, safe travel tips, and transportation news in the West Midlands. Learn from App Carz professional drivers.',
  keywords: 'airport transfer tips, taxi safety, West Midlands transport, Birmingham Airport advice, travel planning',
};

const blogPosts = [
  {
    slug: 'airport-transfer-tips',
    title: 'Essential Tips for Stress-Free Airport Transfers',
    excerpt: 'Planning an airport journey? Learn how to ensure a smooth, punctual transfer to Birmingham Airport with our expert advice from 15 years of experience.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Airport Travel'
  },
  {
    slug: 'safe-taxi-travel',
    title: 'How to Ensure Safe Taxi Travel in the West Midlands',
    excerpt: 'Your safety is paramount. Discover what to look for in a licensed taxi service and how to verify your driver\'s credentials before your journey.',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Safety'
  },
  {
    slug: 'corporate-event-transport',
    title: 'Planning Transportation for Corporate Events',
    excerpt: 'Organizing a business event? Learn how professional transportation services can enhance your corporate gathering and ensure all attendees arrive on time.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Corporate Travel'
  },
  {
    slug: 'wedding-transportation-guide',
    title: 'Complete Guide to Wedding Transportation in West Midlands',
    excerpt: 'Make your special day perfect with the right transportation. From bride and groom to guests, we cover everything you need to know about wedding car services.',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Special Events'
  },
  {
    slug: 'choosing-right-vehicle',
    title: 'Choosing the Right Vehicle for Your Journey',
    excerpt: 'Not sure which vehicle to book? We break down our fleet options to help you select the perfect car for your specific travel needs and group size.',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Travel Planning'
  },
  {
    slug: 'birmingham-airport-guide',
    title: 'Birmingham Airport: Complete Passenger Guide 2024',
    excerpt: 'Everything you need to know about Birmingham Airport terminals, parking, check-in procedures, and how to coordinate your taxi pickup for a seamless experience.',
    date: '2024-02-15',
    readTime: '8 min read',
    category: 'Airport Travel'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0B2838] py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
                Travel Tips & News
              </h1>
              <p className="text-xl text-white/80">
                Expert advice and insights from West Midlands' trusted private hire service
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0B2838] to-[#FF6B6B]/20" />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#686868] mb-3">
                      <span className="bg-[#FF6B6B]/10 text-[#FF6B6B] px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-[#0B2838] mb-3 group-hover:text-[#FF6B6B] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[#686868] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-[#686868]">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}</span>
                      </div>

                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-[#FF6B6B] hover:gap-3 transition-all font-medium"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#0B2838] py-20 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Subscribe to our newsletter for travel tips, special offers, and West Midlands transport news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-[#0B2838] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                />
                <button className="btn-text bg-white text-[#0B2838] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}