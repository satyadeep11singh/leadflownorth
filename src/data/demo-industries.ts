// Shared data layer for all 13 industry demo configurations
// Used by: /demos/, /demos/[industry], and enhanced industry pages

export interface IndustryDemo {
  slug: string;
  name: string;
  icon: string;
  description: string;
  defaults: {
    businessName: string;
    tagline: string;
    phone: string;
    email: string;
    location: string;
    primaryColor: string;
    accentColor: string;
  };
  services: string[];
  preview: {
    heroImage: string;
    heroStyle: "split" | "centered" | "bold" | "elegant";
    sections: string[];
    uniqueSection: {
      type: string;
      title: string;
      items: string[];
    };
  };
  faqs: Array<{ question: string; answer: string }>;
  industryPageHref: string;
  roiPreset: string;
}

export const demoIndustries: IndustryDemo[] = [
  // ─── 1. HOME SERVICES ───
  {
    slug: "home-services",
    name: "Home Services",
    icon: "\u{1F527}",
    description: "Plumbing, HVAC, electrical, and renovation websites that book more service calls.",
    defaults: {
      businessName: "Maple Leaf Plumbing",
      tagline: "Your Trusted Local Plumber — Available 24/7",
      phone: "(905) 555-0123",
      email: "info@mapleleafplumbing.ca",
      location: "Toronto, ON",
      primaryColor: "#1e40af",
      accentColor: "#16a34a",
    },
    services: [
      "Emergency Repairs",
      "Drain Cleaning",
      "Water Heater Installation",
      "Pipe Repair & Replacement",
      "Bathroom Renovations",
      "Kitchen Plumbing",
      "Sump Pump Service",
      "Backflow Prevention",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
      heroStyle: "split",
      sections: ["services", "trust-badges", "gallery", "testimonials", "contact"],
      uniqueSection: {
        type: "emergency-banner",
        title: "24/7 Emergency Service",
        items: ["Burst Pipes", "Flooding", "No Hot Water", "Gas Leaks"],
      },
    },
    faqs: [
      { question: "How much does a plumber's website cost?", answer: "Our plumbing websites start at $999 for a 3-page starter site and go up to $2,999 for a full lead generation system with online booking, SMS notifications, and automated follow-ups." },
      { question: "How long does it take to build a home services website?", answer: "Most home service websites are delivered in 7-21 business days depending on the package. Our Professional package (most popular for plumbers) takes about 14 business days." },
      { question: "Will my website show up when people search 'plumber near me'?", answer: "Yes. Every package includes SEO optimization. Our SEO & Content monthly service ($399/mo) adds ongoing keyword targeting, blog content, and Google Business Profile management to keep you ranking." },
      { question: "Can customers book appointments directly from my website?", answer: "Absolutely. Our Professional and Lead Generation packages include online booking forms with automated SMS/email confirmations and reminders to reduce no-shows." },
      { question: "Do you work with HVAC, electrical, and other trades too?", answer: "Yes — we serve all home service trades including plumbing, HVAC, electrical, roofing, landscaping, and general contracting. Each site is customized for your specific trade." },
      { question: "Will I own my website?", answer: "Yes, 100%. You own your website, your domain, and all your content. No lock-in contracts. If you ever leave, everything is yours." },
    ],
    industryPageHref: "/industries/home-services",
    roiPreset: "home-services",
  },

  // ─── 2. LEGAL SERVICES ───
  {
    slug: "legal",
    name: "Legal Services",
    icon: "\u{2696}\u{FE0F}",
    description: "Professional law firm websites that build trust and generate consultations.",
    defaults: {
      businessName: "Northgate Law Group",
      tagline: "Experienced Legal Counsel You Can Trust",
      phone: "(416) 555-0456",
      email: "intake@northgatelaw.ca",
      location: "Edmonton, AB",
      primaryColor: "#1e3a5f",
      accentColor: "#b8860b",
    },
    services: [
      "Personal Injury",
      "Family Law",
      "Criminal Defense",
      "Estate Planning",
      "Immigration Law",
      "Real Estate Law",
      "Business Law",
      "Employment Law",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
      heroStyle: "centered",
      sections: ["services", "credentials", "case-results", "testimonials", "contact"],
      uniqueSection: {
        type: "practice-areas",
        title: "Practice Areas",
        items: ["Free Initial Consultation", "No Win, No Fee Options", "Flexible Payment Plans", "Evening & Weekend Appointments"],
      },
    },
    faqs: [
      { question: "How much does a law firm website cost?", answer: "Law firm websites start at $999 for a clean 3-page site. Most firms choose our Professional package at $1,749 which includes practice area pages, intake forms, and CRM integration." },
      { question: "Can potential clients book consultations online?", answer: "Yes. We integrate calendar booking (like Cal.com or Calendly) so prospects can schedule consultations 24/7 without calling your office." },
      { question: "Is the website compliant with law society advertising rules?", answer: "We design with Canadian law society guidelines in mind, including proper disclaimers, avoiding guarantees of outcomes, and appropriate testimonial handling." },
      { question: "Will the website capture leads when the office is closed?", answer: "Absolutely. Contact forms, intake questionnaires, and automated email responses work 24/7. You'll get instant notifications for every new lead." },
      { question: "Can you help with SEO for competitive legal keywords?", answer: "Yes. Our SEO & Content service ($399/mo) targets keywords like 'personal injury lawyer Toronto' with blog content, local SEO, and Google Business Profile optimization." },
      { question: "Do you build websites for solo practitioners or just firms?", answer: "Both. We serve solo practitioners, boutique firms, and mid-size practices. The approach is tailored to your size and goals." },
    ],
    industryPageHref: "/industries/legal",
    roiPreset: "legal",
  },

  // ─── 3. MEDICAL & DENTAL ───
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    icon: "\u{1F3E5}",
    description: "Patient-focused clinic websites with online booking and trust-building design.",
    defaults: {
      businessName: "Lakeview Family Dental",
      tagline: "Gentle Care for the Whole Family",
      phone: "(905) 555-0789",
      email: "appointments@lakeviewdental.ca",
      location: "Mississauga, ON",
      primaryColor: "#0891b2",
      accentColor: "#059669",
    },
    services: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Teeth Whitening",
      "Dental Implants",
      "Emergency Dental Care",
      "Pediatric Dentistry",
      "Preventive Care",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop",
      heroStyle: "split",
      sections: ["services", "team", "insurance", "testimonials", "contact"],
      uniqueSection: {
        type: "booking-widget",
        title: "Book Your Appointment",
        items: ["New Patient Exam", "Cleaning & Check-up", "Emergency Visit", "Cosmetic Consultation"],
      },
    },
    faqs: [
      { question: "Is the website design HIPAA/PIPEDA compliant?", answer: "We design with privacy in mind. Contact forms use encrypted submissions, and we never store patient health information on the website. For full compliance, we recommend pairing with a PIPEDA-compliant CRM." },
      { question: "Can patients book appointments online?", answer: "Yes. We integrate online booking that syncs with your practice management software, sends automated reminders, and reduces no-shows by up to 60%." },
      { question: "Will the website list our accepted insurance plans?", answer: "Absolutely. We create a dedicated insurance/payment page that lists accepted plans, payment options, and financing information to reduce front-desk phone calls." },
      { question: "How do you help us get more Google reviews?", answer: "Our Lead Generation package includes automated review request sequences — after each appointment, patients receive a text/email prompting them to leave a Google review." },
      { question: "Can we showcase our team and office on the website?", answer: "Yes. Team bios with photos and an office gallery are standard in our Professional and Lead Generation packages. This builds trust before patients walk in." },
      { question: "Do you work with medical clinics too, or just dental?", answer: "We serve dental practices, medical clinics, physiotherapy, chiropractic, optometry, and specialty practices. Each site is tailored to your specific healthcare vertical." },
    ],
    industryPageHref: "/industries/medical-dental",
    roiPreset: "medical-dental",
  },

  // ─── 4. FITNESS & GYMS ───
  {
    slug: "fitness",
    name: "Fitness & Gyms",
    icon: "\u{1F4AA}",
    description: "High-energy fitness websites that convert visitors into paying members.",
    defaults: {
      businessName: "Summit Fitness Co.",
      tagline: "Train Hard. Live Strong. Join the Community.",
      phone: "(403) 555-0234",
      email: "join@summitfitness.ca",
      location: "Calgary, AB",
      primaryColor: "#dc2626",
      accentColor: "#f59e0b",
    },
    services: [
      "Personal Training",
      "Group Classes",
      "CrossFit",
      "Yoga & Pilates",
      "Nutrition Coaching",
      "Boxing & Kickboxing",
      "Strength Training",
      "Recovery & Stretching",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
      heroStyle: "bold",
      sections: ["services", "schedule", "membership", "testimonials", "contact"],
      uniqueSection: {
        type: "class-schedule",
        title: "This Week's Classes",
        items: ["Monday: HIIT 6AM", "Tuesday: Yoga Flow 7AM", "Wednesday: CrossFit 6PM", "Thursday: Boxing 5PM"],
      },
    },
    faqs: [
      { question: "Can members sign up and pay online?", answer: "Yes. We integrate membership signup with online payment processing so new members can join 24/7. Works with Stripe, Square, or your existing payment system." },
      { question: "Will the website show our class schedule?", answer: "Absolutely. We build a dynamic class schedule section that you can update easily. It can sync with tools like Mindbody, Glofox, or a simple calendar." },
      { question: "How do you help gyms compete with big chains?", answer: "We focus on what chains can't offer — community, personal attention, and local connection. Your site will highlight member stories, trainer bios, and the unique culture of your gym." },
      { question: "Can you add a member referral system?", answer: "Yes. Our Lead Generation package includes referral tracking so you can reward members who bring in friends — automated and hands-off." },
      { question: "Do you build websites for yoga studios and martial arts too?", answer: "Yes. We serve gyms, CrossFit boxes, yoga/pilates studios, martial arts dojos, dance studios, and personal training businesses." },
      { question: "What if I just need a simple one-page site?", answer: "Our Starter package ($999) gives you a clean 3-page site perfect for a new gym. As you grow, we can expand it." },
    ],
    industryPageHref: "/industries/fitness",
    roiPreset: "fitness",
  },

  // ─── 5. AUTO SERVICES ───
  {
    slug: "auto-services",
    name: "Auto Services",
    icon: "\u{1F697}",
    description: "Trust-building auto shop websites that book more appointments and reduce no-shows.",
    defaults: {
      businessName: "Reliable Auto Centre",
      tagline: "Honest Service. Fair Prices. Family Owned Since 2005.",
      phone: "(905) 555-0567",
      email: "service@reliableauto.ca",
      location: "Brampton, ON",
      primaryColor: "#1e3a5f",
      accentColor: "#ef4444",
    },
    services: [
      "Oil Changes & Maintenance",
      "Brake Service",
      "Engine Diagnostics",
      "Tire Sales & Installation",
      "Transmission Repair",
      "AC & Heating",
      "Body Work & Painting",
      "Pre-Purchase Inspections",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop",
      heroStyle: "split",
      sections: ["services", "pricing", "certifications", "testimonials", "contact"],
      uniqueSection: {
        type: "service-menu",
        title: "Service Menu & Pricing",
        items: ["Oil Change from $49.99", "Brake Inspection FREE", "Tire Rotation from $29.99", "Full Diagnostic from $89.99"],
      },
    },
    faqs: [
      { question: "Can customers book service appointments online?", answer: "Yes. Online booking with automated SMS/email confirmations and reminders. Our clients see up to 60% fewer no-shows after implementing this." },
      { question: "Can we show transparent pricing on the website?", answer: "Absolutely. We build a service menu with pricing that builds trust — the #1 factor customers cite when choosing an independent shop over a dealership." },
      { question: "Will the site help us compete with dealership service centers?", answer: "Yes. We design trust-first websites with certifications, video testimonials, warranty information, and transparent pricing that positions you as the honest alternative." },
      { question: "Can customers leave reviews directly from the website?", answer: "We integrate review request automation — after each service visit, customers get a text/email prompting them to leave a Google review." },
      { question: "Do you work with dealerships and body shops too?", answer: "Yes. We serve independent shops, dealerships, body shops, detailing businesses, tire shops, and fleet service centers." },
      { question: "How fast can the website be ready?", answer: "Our Starter package delivers in 7-10 business days. Most auto shops choose the Professional package (14 days) for the full booking and review system." },
    ],
    industryPageHref: "/industries/auto-services",
    roiPreset: "auto-services",
  },

  // ─── 6. SALONS & SPAS ───
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    icon: "\u{1F485}",
    description: "Beautiful salon websites with online booking that fills your calendar.",
    defaults: {
      businessName: "Blush Beauty Studio",
      tagline: "Where Beauty Meets Confidence",
      phone: "(416) 555-0890",
      email: "hello@blushbeauty.ca",
      location: "Toronto, ON",
      primaryColor: "#9333ea",
      accentColor: "#ec4899",
    },
    services: [
      "Haircuts & Styling",
      "Color & Highlights",
      "Facials & Skin Care",
      "Manicures & Pedicures",
      "Massage Therapy",
      "Waxing & Threading",
      "Bridal & Event Styling",
      "Lash & Brow Services",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop",
      heroStyle: "elegant",
      sections: ["services", "gallery", "team", "testimonials", "contact"],
      uniqueSection: {
        type: "booking-calendar",
        title: "Book Your Appointment",
        items: ["Choose Your Stylist", "Pick Your Service", "Select Date & Time", "Confirm & Relax"],
      },
    },
    faqs: [
      { question: "Can clients book appointments online?", answer: "Yes. We integrate with booking platforms like Fresha, Vagaro, or Square Appointments so clients can book 24/7 — even at midnight when inspiration strikes." },
      { question: "Will the website showcase our work?", answer: "Absolutely. We build stunning galleries and before/after showcases that highlight your team's talent. Instagram feed integration is also available." },
      { question: "Can we have individual pages for each stylist?", answer: "Yes. Our Professional package includes team profile pages with bios, specialties, and individual booking links for each team member." },
      { question: "How do you help salons attract new clients?", answer: "SEO for searches like 'hair salon near me', automated Google review requests after visits, and a site design that converts browsers into bookers." },
      { question: "Do you work with barbershops and med spas too?", answer: "Yes. We serve hair salons, barbershops, day spas, med spas, nail studios, and beauty bars. Each design matches your specific vibe." },
      { question: "Can I sell products through the website?", answer: "Yes. Our e-commerce add-on lets you sell retail products (hair care, skincare) directly from your website with secure payment processing." },
    ],
    industryPageHref: "/industries/salons-spas",
    roiPreset: "salons-spas",
  },

  // ─── 7. E-COMMERCE & RETAIL ───
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    icon: "\u{1F6D2}",
    description: "Conversion-focused online stores that turn browsers into buyers.",
    defaults: {
      businessName: "Northern Goods Co.",
      tagline: "Canadian-Made Products Delivered to Your Door",
      phone: "(604) 555-0345",
      email: "shop@northerngoods.ca",
      location: "Vancouver, BC",
      primaryColor: "#0f172a",
      accentColor: "#f59e0b",
    },
    services: [
      "Product Catalog",
      "Shopping Cart & Checkout",
      "Inventory Management",
      "Order Tracking",
      "Customer Accounts",
      "Wishlists & Favorites",
      "Gift Cards",
      "Loyalty Rewards Program",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      heroStyle: "bold",
      sections: ["products", "categories", "features", "testimonials", "contact"],
      uniqueSection: {
        type: "featured-products",
        title: "Best Sellers",
        items: ["Premium Maple Syrup — $24.99", "Wool Toque — $34.99", "Artisan Candle Set — $42.99", "Coffee Sampler — $29.99"],
      },
    },
    faqs: [
      { question: "What e-commerce platform do you use?", answer: "We build on platforms best suited to your needs — Shopify for full-featured stores, WooCommerce for WordPress integration, or custom Astro + Snipcart for lightweight catalogs." },
      { question: "Can the store handle Canadian shipping and taxes?", answer: "Yes. We configure GST/HST/PST calculations, Canada Post or other carrier integrations, and shipping zones for domestic and international delivery." },
      { question: "How do you optimize for conversions?", answer: "Every store includes A/B tested checkout flows, abandoned cart recovery, product recommendation engines, and mobile-optimized browsing — because 70%+ of shopping is on mobile." },
      { question: "Can I manage products myself?", answer: "Absolutely. We provide an easy-to-use admin dashboard where you can add products, update prices, manage inventory, and process orders without any technical knowledge." },
      { question: "Do you handle payment processing?", answer: "We integrate Stripe, PayPal, and other Canadian-friendly payment processors. All transactions are PCI-compliant and secured with SSL encryption." },
      { question: "What about marketing and SEO for the store?", answer: "Our SEO & Content monthly service includes product page optimization, blog content for organic traffic, and email marketing automation for repeat purchases." },
    ],
    industryPageHref: "/industries/ecommerce-retail",
    roiPreset: "ecommerce",
  },

  // ─── 8. PROFESSIONAL SERVICES ───
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "\u{1F4BC}",
    description: "Authority-building websites for accountants, advisors, and consultants.",
    defaults: {
      businessName: "Pinnacle Advisory Group",
      tagline: "Strategic Financial Guidance for Growing Businesses",
      phone: "(416) 555-0678",
      email: "info@pinnacleadvisory.ca",
      location: "Toronto, ON",
      primaryColor: "#1e3a5f",
      accentColor: "#0d9488",
    },
    services: [
      "Tax Planning & Preparation",
      "Bookkeeping",
      "Financial Advisory",
      "Business Consulting",
      "Payroll Services",
      "Audit & Assurance",
      "Corporate Strategy",
      "Wealth Management",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
      heroStyle: "centered",
      sections: ["services", "credentials", "insights", "testimonials", "contact"],
      uniqueSection: {
        type: "credentials",
        title: "Why Choose Us",
        items: ["CPA Certified Professionals", "20+ Years Experience", "500+ Clients Served", "Industry-Specific Expertise"],
      },
    },
    faqs: [
      { question: "How do you help professional service firms get more clients?", answer: "We build authority-driven websites that establish credibility through case studies, thought leadership content, team credentials, and clear service descriptions that attract high-value clients." },
      { question: "Can clients book consultations online?", answer: "Yes. Calendar integration allows prospects to book discovery calls or consultations directly — no phone tag needed." },
      { question: "Will the website convey professionalism and trust?", answer: "Absolutely. Our designs for professional services emphasize clean layouts, professional imagery, credential badges, and client testimonials — all optimized to build confidence." },
      { question: "Can we publish articles and insights on the website?", answer: "Yes. Our blog/insights section lets you publish thought leadership content that establishes expertise and drives organic search traffic for relevant keywords." },
      { question: "Do you work with solo practitioners?", answer: "Yes. Whether you're a solo CPA, a boutique consulting firm, or a mid-size advisory practice, we tailor the website to your scale and growth goals." },
      { question: "Is there a client portal feature?", answer: "We can integrate secure client portal solutions for document sharing, messaging, and appointment scheduling — ideal for accountants and financial advisors." },
    ],
    industryPageHref: "/industries/professional-services",
    roiPreset: "professional-services",
  },

  // ─── 9. NONPROFITS ───
  {
    slug: "nonprofits",
    name: "Nonprofits",
    icon: "\u{1F49A}",
    description: "Mission-driven websites that inspire donors and grow your cause.",
    defaults: {
      businessName: "Northern Hope Foundation",
      tagline: "Building Stronger Communities, One Family at a Time",
      phone: "(613) 555-0901",
      email: "hello@northernhope.ca",
      location: "Ottawa, ON",
      primaryColor: "#166534",
      accentColor: "#ea580c",
    },
    services: [
      "Online Donations",
      "Volunteer Registration",
      "Event Management",
      "Newsletter Signup",
      "Impact Reporting",
      "Membership Portal",
      "Fundraising Campaigns",
      "Community Blog",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
      heroStyle: "centered",
      sections: ["mission", "impact", "programs", "testimonials", "contact"],
      uniqueSection: {
        type: "donation-cta",
        title: "Make a Difference Today",
        items: ["$25 — Feeds a Family for a Week", "$50 — School Supplies for a Child", "$100 — Month of Mentorship", "$250 — Community Program Sponsorship"],
      },
    },
    faqs: [
      { question: "Can people donate directly through the website?", answer: "Yes. We integrate secure donation processing with one-time and recurring options. Works with Stripe, PayPal, and Canada Helps." },
      { question: "Do you offer nonprofit pricing?", answer: "Our founding client pricing is already deeply discounted. We're happy to discuss custom arrangements for registered nonprofits — reach out and let's talk." },
      { question: "Can volunteers sign up through the website?", answer: "Absolutely. We build volunteer registration forms with availability scheduling, skills matching, and automated onboarding emails." },
      { question: "Will the website show our impact and transparency?", answer: "Yes. We create dedicated impact pages with statistics, annual report downloads, financial transparency sections, and stories from the people you've helped." },
      { question: "Can we manage events on the website?", answer: "Yes. Event listings with registration, ticketing, and calendar integration are available in our Professional and Lead Generation packages." },
      { question: "Do you work with faith organizations?", answer: "Yes. We serve charities, foundations, associations, and faith-based organizations. Each site is designed to reflect your unique mission and community." },
    ],
    industryPageHref: "/industries/nonprofits",
    roiPreset: "nonprofits",
  },

  // ─── 10. DAYCARE CENTERS ───
  {
    slug: "daycare-centers",
    name: "Daycare Centers",
    icon: "\u{1F476}",
    description: "Parent-friendly childcare websites that build trust and fill enrollment.",
    defaults: {
      businessName: "Little Explorers Daycare",
      tagline: "Where Every Child's Adventure Begins",
      phone: "(905) 555-0112",
      email: "enroll@littleexplorers.ca",
      location: "Oakville, ON",
      primaryColor: "#7c3aed",
      accentColor: "#f59e0b",
    },
    services: [
      "Infant Care (0-18 months)",
      "Toddler Program (18-30 months)",
      "Preschool (2.5-4 years)",
      "Before & After School Care",
      "Summer Camp Programs",
      "Drop-In Care",
      "Early Learning Curriculum",
      "Nutritious Meal Program",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=1200&h=600&fit=crop",
      heroStyle: "split",
      sections: ["programs", "safety", "team", "testimonials", "contact"],
      uniqueSection: {
        type: "programs",
        title: "Our Programs",
        items: ["Infant Care (6 weeks - 18 months)", "Toddler Program (18-30 months)", "Preschool (2.5-4 years)", "School-Age (4-12 years)"],
      },
    },
    faqs: [
      { question: "Can parents register or apply online?", answer: "Yes. We build enrollment inquiry forms and waitlist registration so parents can apply anytime — no need to call during business hours." },
      { question: "Will the website help build trust with parents?", answer: "Absolutely. We showcase your facility with photos, staff bios with credentials, safety certifications, curriculum details, and parent testimonials — everything a parent needs to feel confident." },
      { question: "Can we show our daily schedule and curriculum?", answer: "Yes. Dedicated program pages show age-specific curricula, daily schedules, meal plans, and learning outcomes." },
      { question: "Is the website mobile-friendly?", answer: "100%. Parents are searching on their phones during lunch breaks and commutes. Every page is optimized for mobile browsing and form submission." },
      { question: "Can we have a parent portal?", answer: "We can integrate parent communication tools for daily updates, photo sharing, and messaging — though this typically pairs with a platform like HiMama or Brightwheel." },
      { question: "Do you help with Google visibility?", answer: "Yes. Local SEO ensures you show up for searches like 'daycare near me' in your area. Our SEO service maintains and improves your rankings monthly." },
    ],
    industryPageHref: "/industries/daycare-centers",
    roiPreset: "daycare",
  },

  // ─── 11. CONTRACTORS & TRADES ───
  {
    slug: "contractors-trades",
    name: "Contractors & Trades",
    icon: "\u{1F528}",
    description: "Portfolio-driven contractor websites that win more bids and referrals.",
    defaults: {
      businessName: "Ironwood Construction",
      tagline: "Quality Craftsmanship. Honest Estimates. Built to Last.",
      phone: "(905) 555-0334",
      email: "estimates@ironwoodconstruction.ca",
      location: "Hamilton, ON",
      primaryColor: "#78350f",
      accentColor: "#d97706",
    },
    services: [
      "Home Renovations",
      "Kitchen & Bath Remodeling",
      "Basement Finishing",
      "Deck & Patio Construction",
      "Roofing & Siding",
      "Interior Painting",
      "Exterior Painting",
      "Commercial Build-Outs",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop",
      heroStyle: "split",
      sections: ["services", "portfolio", "licensing", "testimonials", "contact"],
      uniqueSection: {
        type: "project-gallery",
        title: "Recent Projects",
        items: ["Kitchen Remodel — Oakville", "Basement Finish — Burlington", "Deck Build — Hamilton", "Commercial Fit-Out — Toronto"],
      },
    },
    faqs: [
      { question: "Can I showcase before/after project photos?", answer: "Yes. We build stunning project galleries with before/after sliders, project details, and client testimonials per project — your best sales tool." },
      { question: "Can customers request free estimates online?", answer: "Absolutely. Our estimate request forms capture project details, photos, and contact info so you can provide accurate quotes faster." },
      { question: "Will the website show my licensing and insurance?", answer: "Yes. Dedicated trust sections display your license numbers, insurance coverage, WSIB compliance, and any trade certifications prominently." },
      { question: "How does this help me win more bids?", answer: "A professional website with project galleries, testimonials, and transparent credentials makes you the obvious choice when homeowners are comparing 3-4 contractors." },
      { question: "Can I get leads from the website while I'm on a job site?", answer: "Yes. Instant SMS/email notifications for every form submission mean you never miss a lead — even when you're swinging a hammer." },
      { question: "Do you work with painters and specialized trades?", answer: "Yes. General contractors, painters, roofers, electricians, framers, flooring installers — we serve all construction trades." },
    ],
    industryPageHref: "/industries/contractors-trades",
    roiPreset: "contractors",
  },

  // ─── 12. REAL ESTATE ───
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "\u{1F3E0}",
    description: "Lead-generating real estate websites that attract buyers and sellers on autopilot.",
    defaults: {
      businessName: "Horizon Realty Group",
      tagline: "Your Home Journey Starts Here",
      phone: "(416) 555-0556",
      email: "info@horizonrealty.ca",
      location: "Toronto, ON",
      primaryColor: "#1e3a5f",
      accentColor: "#10b981",
    },
    services: [
      "Residential Sales",
      "Buyer Representation",
      "Seller Representation",
      "Property Valuation",
      "Pre-Construction Sales",
      "Investment Properties",
      "Relocation Services",
      "Market Analysis",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
      heroStyle: "bold",
      sections: ["listings", "services", "market-stats", "testimonials", "contact"],
      uniqueSection: {
        type: "property-listings",
        title: "Featured Listings",
        items: ["3BR Detached — $899,000", "2BR Condo — $549,000", "4BR Semi — $749,000", "Townhouse — $629,000"],
      },
    },
    faqs: [
      { question: "Can I display MLS listings on my website?", answer: "We can integrate IDX/MLS feeds so your website displays real-time listings. Visitors can search, filter, and save properties directly on your site." },
      { question: "Will the website generate buyer and seller leads?", answer: "Yes. Home valuation tools, property search, and lead capture forms attract both buyers and sellers. Our Lead Generation package includes automated nurture sequences." },
      { question: "Can I have neighborhood and community pages?", answer: "Absolutely. Neighborhood guides with local amenities, school info, and market data are powerful SEO tools that attract relocating families." },
      { question: "Does the site comply with RECO advertising guidelines?", answer: "We design with Ontario RECO and Canadian real estate board guidelines in mind, including proper brokerage attribution and advertising standards." },
      { question: "Can I feature my sold properties?", answer: "Yes. A 'Recently Sold' section showcases your track record and builds confidence with prospective sellers." },
      { question: "Is a CRM included?", answer: "We integrate with popular real estate CRMs (Follow Up Boss, kvCORE, HubSpot) to ensure every lead is tracked and nurtured automatically." },
    ],
    industryPageHref: "/industries/real-estate",
    roiPreset: "real-estate",
  },

  // ─── 13. RESTAURANTS ───
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "\u{1F37D}\u{FE0F}",
    description: "Appetizing restaurant websites that fill tables and boost direct orders.",
    defaults: {
      businessName: "The Rustic Table",
      tagline: "Farm-Fresh Flavours in the Heart of the City",
      phone: "(416) 555-0778",
      email: "reservations@rustictable.ca",
      location: "Toronto, ON",
      primaryColor: "#7c2d12",
      accentColor: "#ca8a04",
    },
    services: [
      "Online Menu",
      "Online Ordering",
      "Table Reservations",
      "Catering Requests",
      "Gift Cards",
      "Loyalty Program",
      "Event Booking",
      "Delivery Integration",
    ],
    preview: {
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
      heroStyle: "bold",
      sections: ["menu", "ordering", "ambiance", "testimonials", "contact"],
      uniqueSection: {
        type: "menu-section",
        title: "Today's Specials",
        items: ["Maple-Glazed Salmon — $28", "Truffle Mushroom Risotto — $24", "AAA Striploin — $38", "Seasonal Crumble — $12"],
      },
    },
    faqs: [
      { question: "Can customers order directly from our website?", answer: "Yes. We build branded online ordering that sends orders to your kitchen — no 30% commission fees to delivery apps. You keep the profit and own the customer relationship." },
      { question: "Can guests make reservations online?", answer: "Absolutely. We integrate reservation systems like OpenTable, Resy, or a built-in booking widget so guests can reserve tables 24/7." },
      { question: "Will the website show our full menu?", answer: "Yes. A beautiful, mobile-friendly menu with sections, descriptions, pricing, and dietary labels. Easy for you to update when specials change." },
      { question: "How do you help restaurants reduce delivery app dependency?", answer: "Direct ordering through your website means no commission fees. Combine with a loyalty program and email marketing, and your regulars will order direct every time." },
      { question: "Can we sell gift cards online?", answer: "Yes. Digital gift card purchasing and redemption is available — a great revenue stream, especially during holidays." },
      { question: "Do you help with Google visibility for restaurants?", answer: "Yes. Local SEO, Google Business Profile optimization, and review automation ensure you show up for 'restaurants near me' and similar searches in your area." },
    ],
    industryPageHref: "/industries/restaurants",
    roiPreset: "restaurants",
  },
];

// Lookup map for quick access by slug
export const demoIndustryMap: Record<string, IndustryDemo> = Object.fromEntries(
  demoIndustries.map((ind) => [ind.slug, ind])
);
