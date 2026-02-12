// Sample landing page data for each industry
// Separated from demo-industries.ts to keep concerns clean

export interface SamplePageData {
  painPoints: string[];
  processSteps: Array<{ title: string; description: string }>;
  credentials: string[];
  ctaText: string;
  aboutText: string;
}

export const sampleData: Record<string, SamplePageData> = {
  "home-services": {
    painPoints: [
      "Losing jobs to competitors with better online presence?",
      "Tired of paying for leads that never convert?",
      "Spending more time chasing quotes than doing actual work?",
    ],
    processSteps: [
      { title: "Tell Us About Your Problem", description: "Call or book online, describe the issue and we'll give you an honest assessment." },
      { title: "We Diagnose & Fix It", description: "Our certified technicians arrive on time, diagnose the issue, and get it fixed right the first time." },
      { title: "Enjoy Peace of Mind", description: "Every repair comes with our satisfaction guarantee and transparent pricing, no surprises." },
    ],
    credentials: ["Licensed & Insured", "Google Guaranteed", "BBB A+ Rated", "5-Star Google Reviews"],
    ctaText: "Get a Free Quote",
    aboutText: "Family-owned and operated, we've been serving homeowners with reliable, honest service for over 15 years. Our team of certified technicians treats every home like it's their own.",
  },

  "legal": {
    painPoints: [
      "Overwhelmed by legal complexity and unsure where to turn?",
      "Worried about finding a lawyer who actually fights for you?",
      "Concerned about legal costs spiraling out of control?",
    ],
    processSteps: [
      { title: "Free Consultation", description: "Tell us about your case in a confidential, no-obligation meeting: in person or by phone." },
      { title: "We Build Your Strategy", description: "Our legal team develops a tailored approach specific to your situation and goals." },
      { title: "We Fight for You", description: "Aggressive representation, clear communication, and the best possible outcome for your case." },
    ],
    credentials: ["Super Lawyers Rated", "Avvo 10.0 Superb", "Law Society of Ontario", "Canadian Bar Association"],
    ctaText: "Book Free Consultation",
    aboutText: "With over 20 years of combined legal experience, our team of dedicated attorneys has successfully represented thousands of clients across Ontario. We believe everyone deserves access to exceptional legal counsel.",
  },

  "medical-dental": {
    painPoints: [
      "Putting off dental visits because of anxiety or past bad experiences?",
      "Struggling to find a family dentist who accepts your insurance?",
      "Tired of long wait times and impersonal care?",
    ],
    processSteps: [
      { title: "Book Your Visit", description: "Schedule online in seconds, choose your service, provider, and preferred time." },
      { title: "Relax & Receive Care", description: "Our gentle team ensures a comfortable experience with state-of-the-art technology." },
      { title: "Smile with Confidence", description: "Leave with a healthier smile and a personalized care plan for the future." },
    ],
    credentials: ["Ontario Dental Association", "Canadian Dental Association", "Invisalign Certified", "Sedation Dentistry"],
    ctaText: "Book Your Appointment",
    aboutText: "Our patient-first approach has made us the trusted dental care provider for families across the Greater Toronto Area. With state-of-the-art technology and a gentle touch, we make every visit comfortable.",
  },

  "fitness": {
    painPoints: [
      "Tired of starting fitness programs and never sticking with them?",
      "Intimidated by big gyms where no one knows your name?",
      "Frustrated with cookie-cutter workouts that don't get results?",
    ],
    processSteps: [
      { title: "Try a Free Class", description: "No commitment needed. Show up, sweat, and see why our members love it here." },
      { title: "Find Your Program", description: "Work with our trainers to build a plan that fits your goals and schedule." },
      { title: "Transform Your Life", description: "Join a supportive community that pushes you to be your best, every single day." },
    ],
    credentials: ["NASM Certified Trainers", "CrossFit Affiliated", "4.9-Star Google Rating", "500+ Active Members"],
    ctaText: "Start Your Free Trial",
    aboutText: "More than a gym, and we're a community. Since 2015, we've helped hundreds of Calgarians get stronger, healthier, and more confident. Our certified trainers are passionate about helping you reach your goals.",
  },

  "auto-services": {
    painPoints: [
      "Nervous about getting overcharged at the dealership?",
      "Struggling to find a mechanic you can actually trust?",
      "Tired of waiting days to get your car back?",
    ],
    processSteps: [
      { title: "Book Online or Call", description: "Schedule your service appointment in seconds, pick a time that works for you." },
      { title: "Transparent Diagnosis", description: "We inspect your vehicle and explain exactly what's needed, no upsells, no surprises." },
      { title: "Drive Away Happy", description: "Quality repairs backed by our warranty, done on time and at a fair price." },
    ],
    credentials: ["ASE Certified Technicians", "NAPA AutoCare Center", "BBB Accredited", "Warranty on All Work"],
    ctaText: "Book Your Service",
    aboutText: "Family-owned since 2005, we've built our reputation on honest diagnostics, fair pricing, and standing behind every repair. Our ASE-certified technicians treat your vehicle like it's their own.",
  },

  "salons-spas": {
    painPoints: [
      "Can't find a stylist who really listens to what you want?",
      "Tired of salons that rush through your appointment?",
      "Looking for a beauty experience, not just a haircut?",
    ],
    processSteps: [
      { title: "Browse & Book Online", description: "Choose your service, pick your stylist, and book your appointment 24/7." },
      { title: "Relax & Transform", description: "Enjoy a premium experience in our beautiful studio with expert stylists." },
      { title: "Leave Glowing", description: "Walk out feeling confident, beautiful, and already planning your next visit." },
    ],
    credentials: ["Award-Winning Stylists", "Eco-Friendly Products", "4.9-Star on Google", "Featured in BlogTO"],
    ctaText: "Book Your Appointment",
    aboutText: "A boutique beauty experience in the heart of Toronto. Our team of award-winning stylists and estheticians are passionate about helping you look and feel your absolute best.",
  },

  "ecommerce-retail": {
    painPoints: [
      "Tired of competing with Amazon on price instead of quality?",
      "Watching potential customers abandon their carts at checkout?",
      "Struggling to tell your brand story online?",
    ],
    processSteps: [
      { title: "Browse Our Collection", description: "Explore curated Canadian-made products with detailed descriptions and real photos." },
      { title: "Easy, Secure Checkout", description: "Fast checkout with free shipping on orders over $75. Multiple payment options." },
      { title: "Enjoy & Share", description: "Love your purchase? Leave a review and share with friends for rewards." },
    ],
    credentials: ["Secure SSL Checkout", "Free Shipping $75+", "30-Day Returns", "Canadian Owned & Operated"],
    ctaText: "Shop Now",
    aboutText: "We believe in quality Canadian craftsmanship. Every product in our collection is sourced from local makers and artisans who share our commitment to sustainability and excellence.",
  },

  "professional-services": {
    painPoints: [
      "Losing sleep over tax season complexity?",
      "Unsure if your business finances are optimized for growth?",
      "Spending too much time on bookkeeping instead of building your business?",
    ],
    processSteps: [
      { title: "Discovery Call", description: "Share your goals and challenges in a complimentary 30-minute strategy session." },
      { title: "Custom Strategy", description: "We develop a tailored plan aligned with your business objectives and timeline." },
      { title: "Measurable Results", description: "Track your progress with transparent reporting and ongoing strategic guidance." },
    ],
    credentials: ["CPA Certified", "20+ Years Experience", "500+ Clients Served", "Top Rated on Google"],
    ctaText: "Schedule a Consultation",
    aboutText: "Our team of CPA-certified professionals brings over two decades of experience helping Canadian businesses grow. We combine deep expertise with a personal approach to deliver results that matter.",
  },

  "nonprofits": {
    painPoints: [
      "Donations declining despite growing community need?",
      "Struggling to reach younger donors where they are, online?",
      "Volunteer recruitment not keeping up with program demand?",
    ],
    processSteps: [
      { title: "Choose Your Impact", description: "Select a cause area that matters to you, every dollar makes a tangible difference." },
      { title: "Give Securely", description: "Donate online in seconds with complete security. Monthly giving multiplies your impact." },
      { title: "See the Results", description: "Receive regular updates showing exactly how your generosity is changing lives." },
    ],
    credentials: ["Registered Charity", "CRA Compliant", "100% Transparent Financials", "Tax Receipts Issued"],
    ctaText: "Donate Now",
    aboutText: "Since 2010, we've served over 5,000 families across Ontario. Every donation goes directly to programs that feed, shelter, and empower vulnerable community members. Together, we're building a stronger community.",
  },

  "daycare-centers": {
    painPoints: [
      "Worried about finding the right environment for your child?",
      "Frustrated by long waitlists at every daycare you contact?",
      "Concerned about safety, nutrition, and the quality of care?",
    ],
    processSteps: [
      { title: "Schedule a Tour", description: "Visit our facility and see our warm, welcoming learning environment firsthand." },
      { title: "Meet Our Educators", description: "Learn about our ECE-certified team, curriculum, and approach to early childhood development." },
      { title: "Enroll with Confidence", description: "Complete registration online and prepare for your child's exciting new adventure with us." },
    ],
    credentials: ["Licensed by Ontario Ministry", "First Aid Certified Staff", "Low Child-to-Staff Ratios", "Nut-Free Facility"],
    ctaText: "Schedule a Tour",
    aboutText: "A nurturing environment where children learn through play, exploration, and creativity. Our ECE-certified educators are passionate about giving every child the best possible start in life.",
  },

  "contractors-trades": {
    painPoints: [
      "Losing bids to contractors with more professional-looking websites?",
      "Word-of-mouth referrals slowing down and need more leads?",
      "Homeowners questioning your credibility without an online presence?",
    ],
    processSteps: [
      { title: "Request a Free Estimate", description: "Tell us about your project, we'll provide a detailed, no-obligation quote within 48 hours." },
      { title: "We Get to Work", description: "Our licensed team executes with precision, keeping you informed at every milestone." },
      { title: "Love the Results", description: "Enjoy quality craftsmanship backed by our warranty and satisfaction guarantee." },
    ],
    credentials: ["Licensed & Bonded", "WSIB Compliant", "Fully Insured", "10-Year Warranty"],
    ctaText: "Get a Free Estimate",
    aboutText: "Quality craftsmanship is our foundation. With over 15 years in the Hamilton area, we've completed hundreds of projects: from kitchen remodels to full home renovations, earning the trust of homeowners across the GTA.",
  },

  "real-estate": {
    painPoints: [
      "Overwhelmed by the Toronto real estate market?",
      "Worried about overpaying or underselling your property?",
      "Struggling to find an agent who puts your interests first?",
    ],
    processSteps: [
      { title: "Tell Us Your Goals", description: "Buying, selling, or investing, share your vision and we'll create a personalized strategy." },
      { title: "Expert Guidance", description: "From market analysis to negotiations, we're with you at every critical step." },
      { title: "Close with Confidence", description: "Celebrate your successful transaction knowing you got the best possible deal." },
    ],
    credentials: ["Top 1% in Toronto", "500+ Homes Sold", "RECO Registered", "RE/MAX Hall of Fame"],
    ctaText: "Get a Free Valuation",
    aboutText: "With over 500 successful transactions and deep roots in the Toronto real estate market, our team combines local expertise with cutting-edge marketing to help you achieve your real estate goals.",
  },

  "restaurants": {
    painPoints: [
      "Losing 30% of every order to delivery app commissions?",
      "Empty tables during off-peak hours costing you revenue?",
      "Competitors ranking higher in 'restaurants near me' searches?",
    ],
    processSteps: [
      { title: "Browse Our Menu", description: "Explore our seasonal dishes, crafted with locally sourced ingredients and love." },
      { title: "Reserve or Order Direct", description: "Book a table or place a pickup order, fast, easy, and commission-free." },
      { title: "Enjoy Every Bite", description: "Savor handcrafted dishes in our cozy dining room or the comfort of your home." },
    ],
    credentials: ["Top Rated on Google", "Toronto Life Feature", "OpenTable Diners' Choice", "Locally Sourced"],
    ctaText: "Reserve a Table",
    aboutText: "A culinary experience rooted in local flavours and seasonal inspiration. Our chef-driven menu celebrates Canadian ingredients with a modern twist, served in a warm, inviting atmosphere.",
  },
};
