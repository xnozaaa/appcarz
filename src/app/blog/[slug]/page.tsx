import React from 'react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog content
const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  'airport-transfer-tips': {
    title: 'Essential Tips for Stress-Free Airport Transfers',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Airport Travel',
    content: (
      <>
        <p className="text-lg mb-6">
          Airport transfers can be stressful, but with proper planning and the right transportation partner, your journey can be smooth and hassle-free. Here are our top tips from 15 years of experience in West Midlands airport transportation.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">1. Book in Advance</h2>
        <p className="mb-6">
          We recommend booking your airport transfer at least 24-48 hours in advance. This ensures vehicle availability and allows us to plan the most efficient route for your journey. Last-minute bookings are often possible, but advance booking guarantees peace of mind.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">2. Provide Accurate Flight Information</h2>
        <p className="mb-6">
          When booking, always provide your flight number and scheduled landing time. Professional services like ours monitor flight arrivals in real-time, automatically adjusting pickup times if your flight is delayed. This means you won't incur additional charges for delays beyond your control.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">3. Allow Extra Time</h2>
        <p className="mb-6">
          For departures, we recommend arriving at Birmingham Airport at least 2 hours before domestic flights and 3 hours before international flights. Factor in potential traffic delays, especially during peak hours (7-9 AM and 4-7 PM on weekdays).
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">4. Communicate Luggage Requirements</h2>
        <p className="mb-6">
          Let your taxi service know how many suitcases you'll have. This ensures the right vehicle is assigned to your journey. Standard cars accommodate 2-3 large suitcases, while larger vehicles or estate cars can handle more luggage plus shopping bags.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">5. Save Contact Details</h2>
        <p className="mb-6">
          Keep your taxi company's phone number handy (save 01922 500 500 in your contacts). If your plans change or you need to communicate during the journey, you'll be able to reach us quickly.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Why Choose Professional Airport Transfers?</h2>
        <p className="mb-6">
          Professional airport transfer services offer significant advantages over regular taxis or public transport. Fixed pricing means no surprises, flight monitoring ensures your driver adjusts to delays, and meet-and-greet services provide extra convenience after long flights.
        </p>

        <p className="mb-6">
          At App Carz, we've refined our airport transfer service over 15 years, completing thousands of successful journeys to Birmingham Airport and beyond. Our drivers know the best routes, parking areas, and terminal procedures inside out.
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Ready to Book?</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Experience stress-free airport transportation with App Carz. Call us on 01922 500 500 or book online today.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-6 py-3 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
          >
            Book Your Transfer
          </Link>
        </div>
      </>
    )
  },
  'safe-taxi-travel': {
    title: 'How to Ensure Safe Taxi Travel in the West Midlands',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Safety',
    content: (
      <>
        <p className="text-lg mb-6">
          Your safety should always be the top priority when using taxi services. Here's what you need to know about staying safe and choosing reputable private hire companies in the West Midlands.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Check for Licensing</h2>
        <p className="mb-6">
          All legitimate taxi and private hire drivers in the West Midlands must be licensed by their local authority. Before getting into any vehicle, verify that the driver has visible identification and licensing documents. Professional companies like App Carz display licenses prominently and provide driver details when you book.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Book Through Established Companies</h2>
        <p className="mb-6">
          Always book through reputable, established taxi companies rather than hailing unlicensed vehicles on the street. Established companies maintain records of all journeys, employ vetted drivers, and carry comprehensive insurance. This creates accountability and ensures help is available if issues arise.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Verify Your Vehicle</h2>
        <p className="mb-6">
          When your taxi arrives, check that the vehicle matches the description provided when you booked. This includes the make, model, color, and registration number. Legitimate drivers will happily confirm your name and destination before you enter the vehicle.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Share Your Journey Details</h2>
        <p className="mb-6">
          Let a friend or family member know your travel plans, including pickup and drop-off locations, estimated arrival time, and the taxi company name. Many modern booking apps automatically share journey tracking with nominated contacts for added security.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">What Makes App Carz Safe?</h2>
        <p className="mb-6">
          At App Carz, safety is our cornerstone. All our drivers undergo enhanced DBS checks, hold valid licenses, and receive regular training. Our vehicles are fully insured, regularly maintained, and equipped with GPS tracking. We maintain detailed journey records and provide customer support 24/7.
        </p>

        <p className="mb-6">
          Every driver in our fleet has years of experience navigating West Midlands roads safely. We prioritize defensive driving, adhere to speed limits, and ensure all passengers feel comfortable throughout their journey.
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Travel with Confidence</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Experience safe, professional transportation with fully licensed drivers and modern vehicles. Call 01922 500 500 to book your safe journey.
          </p>
        </div>
      </>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-app-carz-background-primary py-16 lg:py-20">
          <div className="container">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-app-carz-text-primary hover:text-app-carz-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mx-auto max-w-4xl">
              <span className="bg-app-carz-primary/20 text-app-carz-primary px-4 py-2 rounded-full font-medium text-sm inline-block mb-4">
                {post.category}
              </span>

              <h1 className="text-4xl lg:text-5xl font-semibold text-app-carz-text-primary mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-app-carz-text-primary/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-app-carz-background-secondary py-16 lg:py-20">
          <div className="container">
            <article className="mx-auto max-w-4xl bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 lg:p-12">
              <div className="prose prose-lg max-w-none text-app-carz-text-tertiary">
                {post.content}
              </div>
            </article>

            {/* Related Posts CTA */}
            <div className="mx-auto max-w-4xl mt-12 text-center">
              <Link 
                href="/blog"
                className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-8 py-4 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
