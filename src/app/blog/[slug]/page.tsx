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
  },
  'corporate-event-transport': {
    title: 'Planning Transportation for Corporate Events',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Corporate Travel',
    content: (
      <>
        <p className="text-lg mb-6">
          When organizing a corporate event, transportation logistics can make or break the attendee experience. Professional transportation services ensure your guests arrive on time, relaxed, and ready to engage with your event.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Why Corporate Event Transportation Matters</h2>
        <p className="mb-6">
          First impressions count in business. Providing professional transportation demonstrates attention to detail and respect for your attendees' time. It eliminates parking concerns, reduces no-shows, and creates a cohesive, professional atmosphere from the moment guests begin their journey.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Start Planning Early</h2>
        <p className="mb-6">
          For large corporate events, begin arranging transportation at least 2-3 weeks in advance. This ensures vehicle availability and allows time to coordinate pickup schedules, especially if you're arranging transportation from multiple locations or accommodating VIP guests.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Consider Your Guest Profile</h2>
        <p className="mb-6">
          Different events require different vehicle types. Executive meetings might call for premium saloon cars, while larger conferences may need minibuses or multiple vehicles. Consider factors like luggage requirements if guests are traveling from hotels, and accessibility needs for all attendees.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Coordinate Timing Precisely</h2>
        <p className="mb-6">
          Create a detailed transportation schedule accounting for traffic patterns, event start times, and any pre-event activities. Build in buffer time - we recommend adding 15-20 minutes to standard journey times during peak hours. Share this schedule with your transportation provider well in advance.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Return Journey Planning</h2>
        <p className="mb-6">
          Don't forget about return transportation. For evening events, arrange for vehicles to be available at scheduled intervals or on-call. This is particularly important if your event serves alcohol - providing safe transportation home is both considerate and responsible.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">App Carz Corporate Services</h2>
        <p className="mb-6">
          At App Carz, we specialize in corporate event transportation across the West Midlands. We offer dedicated account management, invoicing options, and can handle everything from small executive meetings to large conferences with hundreds of attendees. Our professional drivers understand the importance of punctuality and discretion in business settings.
        </p>

        <p className="mb-6">
          We can provide meet-and-greet services, branded signage for easy identification, and real-time journey tracking so your event coordinators always know where vehicles are. Our fleet includes executive vehicles, standard cars, and larger vehicles for group transportation.
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Planning a Corporate Event?</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Let us handle your transportation logistics. Contact our corporate services team on 01922 500 500 to discuss your requirements.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-6 py-3 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </>
    )
  },
  'wedding-transportation-guide': {
    title: 'Complete Guide to Wedding Transportation in West Midlands',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Special Events',
    content: (
      <>
        <p className="text-lg mb-6">
          Your wedding day should be perfect in every detail, and transportation is no exception. From the bride's arrival to guest shuttles, professional wedding transportation ensures everyone arrives in style and on schedule.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Planning Your Wedding Transportation Timeline</h2>
        <p className="mb-6">
          Begin arranging wedding transportation 3-6 months before your big day. Popular wedding dates book up quickly, especially during summer months. Early booking also gives you time to coordinate with your photographer for those special vehicle shots and plan the logistics around your ceremony timing.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Bride and Groom Transportation</h2>
        <p className="mb-6">
          The bride's arrival is one of the most anticipated moments of any wedding. Choose a vehicle that complements your wedding style and provides enough space for wedding dresses and bridesmaids. Consider the journey timing carefully - allow extra time for photos en route and factor in potential traffic delays.
        </p>

        <p className="mb-6">
          For the groom and groomsmen, transportation should be reliable and punctual. The last thing you want is wedding party members arriving late due to parking issues or transport problems.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Guest Transportation Solutions</h2>
        <p className="mb-6">
          Guest transportation is often overlooked but can significantly impact your wedding day. If your ceremony and reception are at different locations, or if your venue has limited parking, arranging guest shuttles is thoughtful and practical. This is especially important if you're serving alcohol at the reception.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Venue-to-Venue Transfers</h2>
        <p className="mb-6">
          Many West Midlands weddings involve multiple locations - church ceremony followed by hotel reception, for example. Professional transportation ensures the wedding party travels together, maintaining the celebratory atmosphere and allowing for more photos. It also prevents the common issue of guests getting lost between venues.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">End of Night Considerations</h2>
        <p className="mb-6">
          Plan for guest departures at the end of the evening. Consider arranging taxis or shuttles to nearby hotels or train stations. For the newlyweds, arrange special transportation to your hotel or airport if you're leaving for your honeymoon immediately.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">West Midlands Wedding Venues We Serve</h2>
        <p className="mb-6">
          App Carz has extensive experience with wedding transportation throughout the West Midlands. We know all the popular venues - from Walsall Arboretum to Wolverhampton's historic hotels, Birmingham's city center venues to countryside locations in Solihull. Our drivers are familiar with venue access, parking arrangements, and the best routes for your special day.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Our Wedding Transportation Service</h2>
        <p className="mb-6">
          We offer dedicated wedding transportation packages that can be customized to your needs. Our vehicles are immaculately maintained and presented. We provide ribbons and decorations if required, and our drivers understand the importance of discretion and professionalism on your wedding day. We also offer complimentary champagne for the bride and groom (where legal and safe).
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Planning Your Wedding Day Transportation?</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Let us help make your special day perfect. Contact us on 01922 500 500 to discuss your wedding transportation needs and receive a personalized quote.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-6 py-3 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
          >
            Request Wedding Quote
          </Link>
        </div>
      </>
    )
  },
  'choosing-right-vehicle': {
    title: 'Choosing the Right Vehicle for Your Journey',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Travel Planning',
    content: (
      <>
        <p className="text-lg mb-6">
          Selecting the appropriate vehicle for your journey ensures comfort, safety, and value for money. Here's our guide to matching your transportation needs with the right vehicle from our diverse fleet.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Standard Saloon Cars</h2>
        <p className="mb-6">
          Perfect for 1-3 passengers with standard luggage. Ideal for airport transfers, business meetings, or general transportation around the West Midlands. Our saloon cars offer excellent fuel efficiency, comfortable seating, and ample boot space for 2-3 suitcases. These vehicles are our most popular choice for individuals and couples.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Executive Vehicles</h2>
        <p className="mb-6">
          For business travelers and those seeking extra comfort, our executive vehicles provide premium interiors, more legroom, and enhanced amenities. These vehicles make a professional impression for corporate travel and are particularly popular for airport transfers where passengers want to work or relax during the journey.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Estate Cars</h2>
        <p className="mb-6">
          Need more luggage space? Estate cars accommodate 1-4 passengers with significantly more boot capacity than standard saloons. They're excellent for family holidays, shopping trips, or anyone traveling with sports equipment, musical instruments, or bulky items. The extra space doesn't compromise comfort - our estates maintain the same high standards as our saloons.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">MPVs and Minibuses</h2>
        <p className="mb-6">
          For groups of 5-8 passengers, our MPVs and minibuses provide the solution. Perfect for family outings, group airport transfers, or corporate transportation. These vehicles offer comfortable seating for all passengers plus ample luggage space. They're particularly popular for group trips to Birmingham Airport or special events where everyone wants to travel together.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Wheelchair Accessible Vehicles</h2>
        <p className="mb-6">
          We believe everyone deserves reliable, comfortable transportation. Our wheelchair accessible vehicles (WAVs) are purpose-built to accommodate wheelchair users and passengers with mobility challenges. These vehicles feature ramps or lifts, secure wheelchair restraints, and are driven by specially trained drivers. Advanced booking recommended to ensure availability.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Factors to Consider</h2>
        <p className="mb-6">
          When choosing your vehicle, consider: passenger count, luggage quantity, journey distance, and any special requirements. For airport transfers, think about hand luggage, checked bags, and shopping. For events, consider formal attire that needs extra space. If unsure, call us on 01922 500 500 - our team can recommend the perfect vehicle for your specific needs.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Pricing and Value</h2>
        <p className="mb-6">
          While larger vehicles cost more, they often provide better value for groups than booking multiple cars. We offer transparent pricing with no hidden fees. Vehicle selection affects your quote, so it's worth taking a moment to consider your actual requirements rather than defaulting to the smallest option.
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Need Help Choosing?</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Our experienced team can recommend the perfect vehicle for your journey. Call 01922 500 500 or describe your requirements in our online booking form.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-6 py-3 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
          >
            Book Your Journey
          </Link>
        </div>
      </>
    )
  },
  'birmingham-airport-guide': {
    title: 'Birmingham Airport: Complete Passenger Guide 2024',
    date: '2024-02-15',
    readTime: '8 min read',
    category: 'Airport Travel',
    content: (
      <>
        <p className="text-lg mb-6">
          Birmingham Airport is the West Midlands' gateway to the world, serving over 12 million passengers annually. Whether you're a frequent flyer or occasional traveler, this comprehensive guide will help you navigate the airport with confidence.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Terminal Layout and Facilities</h2>
        <p className="mb-6">
          Birmingham Airport operates from a single, modern terminal building, making navigation straightforward. The terminal features clearly marked check-in areas, security screening, departure gates, baggage reclaim, and arrivals hall. Recent renovations have significantly improved passenger flow and comfort.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Check-In and Security</h2>
        <p className="mb-6">
          Arrive at least 2 hours before European flights and 3 hours for long-haul departures. Self-service check-in kiosks are available throughout the terminal, though bag-drop queues can vary by time of day. Security is busiest 5-6 AM and 5-7 PM during peak travel season. Fast Track security is available for purchase if you're short on time.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Ground Transportation Options</h2>
        <p className="mb-6">
          <strong>Taxi Ranks:</strong> Official taxi ranks are located directly outside the arrivals hall. However, pre-booking with App Carz ensures fixed pricing, no waiting time, and meet-and-greet service where your driver monitors your flight and adjusts pickup time for delays.
        </p>

        <p className="mb-6">
          <strong>Car Parking:</strong> Multiple parking options from short-stay to long-term, with prices varying significantly. Pre-booking parking online saves money. The airport also offers meet-and-greet parking services where you drop your car at the terminal.
        </p>

        <p className="mb-6">
          <strong>Public Transport:</strong> The airport has train and bus connections to Birmingham city center and beyond. However, with luggage and potentially tired from travel, many passengers prefer the convenience of door-to-door taxi service.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Arrival Process</h2>
        <p className="mb-6">
          After landing, follow signs to baggage reclaim. The arrivals hall is well-signposted with clear directions to transportation options. If you've pre-booked with App Carz, your driver will be tracking your flight and waiting in the arrivals area or at the designated pickup point with a name board. We offer 60 minutes free waiting time for all airport pickups.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Dining and Shopping</h2>
        <p className="mb-6">
          The terminal offers numerous dining options from quick grab-and-go to sit-down restaurants. Popular chains include Wetherspoons, Pret, and various coffee shops. Shopping ranges from duty-free to high-street retailers and travel essentials. Prices are premium, as expected in airports, so consider eating before you arrive if on a budget.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Lounges and Amenities</h2>
        <p className="mb-6">
          Several airport lounges offer comfortable pre-flight relaxation with complimentary food, drinks, and WiFi. These can be pre-booked or accessed with certain credit cards and frequent flyer programs. Other amenities include free WiFi throughout the terminal, charging points, children's play areas, and prayer rooms.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Peak Times and Busy Periods</h2>
        <p className="mb-6">
          Birmingham Airport is busiest during school holidays, particularly summer (July-August) and half-term breaks. Early morning flights (5-8 AM) create concentrated passenger volumes. Friday evenings and Sunday afternoons see high traffic for weekend travelers. If traveling during these times, allow extra time for all airport procedures.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">Special Assistance</h2>
        <p className="mb-6">
          The airport provides comprehensive support for passengers with reduced mobility, disabilities, or other special requirements. Book assistance at least 48 hours in advance through your airline. The airport's dedicated team can help with everything from check-in to boarding.
        </p>

        <h2 className="text-3xl font-semibold text-app-carz-text-secondary mb-4 mt-8">App Carz Airport Transfer Service</h2>
        <p className="mb-6">
          As West Midlands' premier private hire service, we complete thousands of Birmingham Airport transfers each year. We know the airport inside out - the best pickup points, how to navigate the terminal approach roads, and how to avoid traffic delays. Our drivers track your flight in real-time and adjust pickup times accordingly.
        </p>

        <p className="mb-6">
          We offer fixed-price transfers from all West Midlands locations to Birmingham Airport with no surge pricing. Meet-and-greet service is standard, with 60 minutes free waiting time. For departures, we recommend pickup times that get you to the airport with ample buffer time while avoiding unnecessarily early arrivals.
        </p>

        <div className="bg-app-carz-background-primary/10 border-l-4 border-app-carz-primary p-6 rounded-r-lg mt-8">
          <h3 className="text-xl font-semibold text-app-carz-text-secondary mb-3">Book Your Airport Transfer</h3>
          <p className="text-app-carz-text-tertiary mb-4">
            Experience stress-free Birmingham Airport transfers with fixed pricing and professional service. Call 01922 500 500 or book online today.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-app-carz-button-primary text-app-carz-button-text px-6 py-3 rounded-lg hover:bg-app-carz-button-primary/90 transition-colors"
          >
            Book Airport Transfer
          </Link>
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