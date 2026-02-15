// Landing page data for each industry
// Used by: /demos/[industry]/landing
// Supplements data from demo-industries.ts and sample-page-data.ts

export interface LandingTestimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface LandingStat {
  value: string;
  label: string;
}

export interface LandingFormField {
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder: string;
  options?: string[];
}

export interface LandingFAQ {
  question: string;
  answer: string;
}

export interface LandingPageData {
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  trustStat: string;

  primaryOffer: string;
  offerValue: string;
  offerDetails: string[];
  ctaButtonText: string;
  ctaMicroCopy: string;

  urgencyType: 'countdown' | 'limited-spots' | 'expiring' | 'progress-bar';
  urgencyText: string;
  urgencySubtext?: string;
  progressPercent?: number;
  progressGoal?: string;

  testimonials: LandingTestimonial[];
  stats: LandingStat[];

  formStep1Fields: LandingFormField[];
  formStep2Fields: LandingFormField[];
  formHeadline: string;
  formSubheadline: string;

  faqs: LandingFAQ[];

  closingHeadline: string;
  closingSubheadline: string;
}

export const landingData: Record<string, LandingPageData> = {
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // HOME SERVICES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'home-services': {
    heroHeadline: 'Burst Pipe at 2 AM? We\'re Already on the Way.',
    heroSubheadline: '24/7 emergency plumbing with guaranteed 30-minute response times. Toronto\'s most trusted plumber since 2009.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Trusted by 2,500+ Toronto homeowners',

    primaryOffer: 'Emergency Service, 30-Min Response + $50 Off',
    offerValue: '$50 Off',
    offerDetails: [
      'Guaranteed 30-minute response time, 24/7',
      '$50 off any emergency repair (new customers)',
      'Free diagnostic with any completed repair',
      'Full 1-year warranty on all work',
    ],
    ctaButtonText: 'Get My Emergency Quote',
    ctaMicroCopy: 'No credit card required. Average response: 18 minutes.',

    urgencyType: 'limited-spots',
    urgencyText: 'Limited slots available today',
    urgencySubtext: '3 emergency crews currently available in the GTA',

    testimonials: [
      { quote: 'Pipe burst at 3 AM on a Sunday. They were here in 22 minutes. Saved our basement from flooding. Can\'t recommend enough.', name: 'Sarah M.', role: 'Homeowner, Mississauga', initials: 'SM' },
      { quote: 'Finally found a plumber who shows up on time, explains what\'s wrong in plain English, and doesn\'t gouge you on price.', name: 'David K.', role: 'Homeowner, Toronto', initials: 'DK' },
      { quote: 'They replaced our water heater the same day we called. Professional, clean, and the price was exactly what they quoted.', name: 'Linda R.', role: 'Homeowner, Brampton', initials: 'LR' },
    ],

    stats: [
      { value: '18 min', label: 'Avg. Response Time' },
      { value: '2,500+', label: 'Homes Serviced' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '100%', label: 'Satisfaction Guarantee' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(905) 555-0000' },
      { label: 'Type of Issue', type: 'select', placeholder: 'Select your issue', options: ['Burst Pipe / Leak', 'Drain Clog', 'Water Heater', 'No Hot Water', 'Bathroom Renovation', 'Other'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
      { label: 'Preferred Time', type: 'select', placeholder: 'When do you need us?', options: ['ASAP. Emergency', 'Today', 'This Week', 'I\'m Flexible'] },
      { label: 'Anything else?', type: 'textarea', placeholder: 'Describe the issue briefly...' },
    ],
    formHeadline: 'Get Your Free Quote in 30 Seconds',
    formSubheadline: 'Tell us what\'s going on and we\'ll call you back within 15 minutes.',

    faqs: [
      { question: 'Do you charge for emergency call-outs?', answer: 'No separate call-out fee. You only pay for the work done, and we always provide a quote before starting. The $50 off applies to your total bill.' },
      { question: 'Are your plumbers licensed and insured?', answer: 'Every plumber on our team is fully licensed by the Ontario College of Trades and carries comprehensive liability insurance. You\'re always protected.' },
      { question: 'What if the repair costs more than the quote?', answer: 'Our quotes are locked in. If we discover additional work is needed, we\'ll explain what and why before proceeding. No surprises, ever.' },
      { question: 'What areas do you serve?', answer: 'We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Oakville, Burlington, Hamilton, and surrounding communities.' },
    ],

    closingHeadline: 'Don\'t Wait Until It\'s an Emergency',
    closingSubheadline: 'Book your free plumbing assessment today and get $50 off your first service. Limited spots available.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // LEGAL
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'legal': {
    heroHeadline: 'Injured? You Deserve a Lawyer Who Fights as Hard as You Do.',
    heroSubheadline: 'Get the compensation you deserve. Free case evaluation, no fees unless we win your case.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over $25M recovered for our clients',

    primaryOffer: 'Free Case Evaluation. No Win, No Fee',
    offerValue: 'Free',
    offerDetails: [
      'Confidential case evaluation at no cost',
      'No fees unless we win, guaranteed',
      'Direct access to a senior partner',
      'Same-day response on urgent matters',
    ],
    ctaButtonText: 'Get My Free Case Evaluation',
    ctaMicroCopy: '100% confidential. No obligation. Response within 1 hour.',

    urgencyType: 'expiring',
    urgencyText: 'Time-sensitive: Statutes of limitations may apply to your case',

    testimonials: [
      { quote: 'After my accident, I didn\'t know where to turn. Northgate Law fought for me and secured a settlement that covered all my medical bills and lost wages.', name: 'Michael T.', role: 'Personal Injury Client', initials: 'MT' },
      { quote: 'Professional, compassionate, and relentless. They kept me informed every step of the way and the outcome exceeded my expectations.', name: 'Jennifer A.', role: 'Employment Law Client', initials: 'JA' },
      { quote: 'I was intimidated by the legal process, but they made everything clear and simple. I felt supported from day one.', name: 'Robert C.', role: 'Family Law Client', initials: 'RC' },
    ],

    stats: [
      { value: '$25M+', label: 'Recovered for Clients' },
      { value: '98%', label: 'Case Success Rate' },
      { value: '500+', label: 'Cases Won' },
      { value: '4.9★', label: 'Client Rating' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Type of Case', type: 'select', placeholder: 'Select case type', options: ['Personal Injury', 'Family Law', 'Employment Law', 'Real Estate Law', 'Business Law', 'Other'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
      { label: 'Brief Description', type: 'textarea', placeholder: 'Tell us about your situation (confidential)...' },
    ],
    formHeadline: 'Start Your Free Case Evaluation',
    formSubheadline: 'A senior attorney will review your case and call you within 1 hour.',

    faqs: [
      { question: 'What does "no win, no fee" actually mean?', answer: 'It means exactly what it says. You pay nothing upfront and nothing out of pocket. We only get paid if we win your case. If we don\'t win, you owe us nothing.' },
      { question: 'How long will my case take?', answer: 'Every case is different. During your free evaluation, we\'ll give you a realistic timeline based on the specifics of your situation. Many cases resolve in 3-6 months.' },
      { question: 'Is my consultation really confidential?', answer: 'Absolutely. Everything you share is protected by attorney-client privilege. Your information is never shared with anyone without your explicit consent.' },
      { question: 'What if I can\'t come to your office?', answer: 'We offer virtual consultations via video call and can meet at a location convenient to you. Your accessibility is our priority.' },
    ],

    closingHeadline: 'Every Day You Wait Could Affect Your Case',
    closingSubheadline: 'Don\'t let time run out. Get your free, confidential case evaluation today.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MEDICAL / DENTAL
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'medical-dental': {
    heroHeadline: 'Nervous About the Dentist? We Specialize in Gentle Care.',
    heroSubheadline: 'Modern technology, compassionate staff, and a calm environment designed for anxious patients. New patient special available.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over 5,000 happy patients across the GTA',

    primaryOffer: '$99 New Patient Special. Exam, X-Rays & Cleaning',
    offerValue: '$99',
    offerDetails: [
      'Comprehensive dental exam with digital X-rays',
      'Professional cleaning by a certified hygienist',
      'Personalized treatment plan discussion',
      'Same-day appointments available',
    ],
    ctaButtonText: 'Book My $99 Appointment',
    ctaMicroCopy: 'Most insurance accepted. Evening & weekend hours available.',

    urgencyType: 'limited-spots',
    urgencyText: 'Only 8 new patient spots remaining this month',
    urgencySubtext: 'Next available: Tomorrow at 9:00 AM',

    testimonials: [
      { quote: 'I hadn\'t been to the dentist in years because of anxiety. Dr. Chen made me feel so comfortable. I actually look forward to my visits now.', name: 'Amanda P.', role: 'Patient, 3 Years', initials: 'AP' },
      { quote: 'The whole family goes here. They\'re great with kids, and the online booking makes scheduling a breeze.', name: 'Jason W.', role: 'Family Patient', initials: 'JW' },
      { quote: 'Got a crown done in a single visit with their same-day technology. No temporary, no second appointment. Incredible.', name: 'Patricia L.', role: 'Cosmetic Patient', initials: 'PL' },
    ],

    stats: [
      { value: '5,000+', label: 'Happy Patients' },
      { value: '15+', label: 'Years of Experience' },
      { value: '4.9★', label: 'Patient Rating' },
      { value: 'Same-Day', label: 'Appointments Available' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(905) 555-0000' },
      { label: 'Service Needed', type: 'select', placeholder: 'What brings you in?', options: ['New Patient Exam', 'Cleaning', 'Toothache / Pain', 'Cosmetic Consultation', 'Emergency', 'Other'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
      { label: 'Preferred Day', type: 'select', placeholder: 'When works best?', options: ['As Soon as Possible', 'Weekday Morning', 'Weekday Evening', 'Saturday'] },
      { label: 'Insurance Provider', type: 'text', placeholder: 'e.g., Sun Life, Manulife, or None' },
    ],
    formHeadline: 'Book Your $99 New Patient Visit',
    formSubheadline: 'Fill out this quick form and we\'ll confirm your appointment within 2 hours.',

    faqs: [
      { question: 'What\'s included in the $99 new patient special?', answer: 'A full comprehensive exam, digital X-rays, a professional cleaning, and a one-on-one consultation with the dentist to discuss your treatment plan. Regular value is $350+.' },
      { question: 'Do you accept my insurance?', answer: 'We accept all major dental insurance plans including Sun Life, Manulife, Great-West Life, Blue Cross, and more. We also offer direct billing so you pay less out of pocket.' },
      { question: 'What if I\'m really anxious about dental visits?', answer: 'We specialize in treating anxious patients. We offer sedation options, noise-canceling headphones, and a calm, spa-like environment. Many of our patients came to us specifically because of dental anxiety.' },
      { question: 'Can I get a same-day appointment for emergencies?', answer: 'Yes! We reserve emergency slots every day. Call us and we\'ll get you in as soon as possible, often within hours.' },
    ],

    closingHeadline: 'Your Smile Shouldn\'t Wait',
    closingSubheadline: 'Book your $99 new patient special today. Only 8 spots left this month.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // FITNESS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'fitness': {
    heroHeadline: 'Stop Starting Over. Start Seeing Results.',
    heroSubheadline: 'Join Toronto\'s most supportive fitness community. Your first week is completely free, no contracts, no pressure.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over 1,200 members transforming their lives',

    primaryOffer: 'Free 7-Day All-Access Pass + Personal Training Session',
    offerValue: 'Free Trial',
    offerDetails: [
      '7 full days of unlimited access to all classes & equipment',
      '1 complimentary personal training session ($75 value)',
      'Custom workout plan based on your goals',
      'No commitment, cancel anytime with zero fees',
    ],
    ctaButtonText: 'Claim My Free 7-Day Pass',
    ctaMicroCopy: 'No credit card required. No obligation. Walk in tomorrow.',

    urgencyType: 'countdown',
    urgencyText: 'Free trial offer expires in',

    testimonials: [
      { quote: 'I\'ve tried every gym in the city. Summit is different, the trainers actually care, the community keeps you accountable, and I\'ve lost 30 lbs in 4 months.', name: 'Chris B.', role: 'Member, 8 Months', initials: 'CB' },
      { quote: 'As someone who was intimidated by gyms, Summit made me feel welcome from day one. The beginner classes are amazing.', name: 'Priya S.', role: 'Member, 1 Year', initials: 'PS' },
      { quote: 'The personal training session during my free trial completely changed my approach to fitness. I signed up that same week.', name: 'Mark D.', role: 'Member, 6 Months', initials: 'MD' },
    ],

    stats: [
      { value: '1,200+', label: 'Active Members' },
      { value: '30+', label: 'Weekly Classes' },
      { value: '95%', label: 'Member Retention' },
      { value: '4.8★', label: 'Google Rating' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Alex Johnson' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Fitness Goal', type: 'select', placeholder: 'What\'s your primary goal?', options: ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'General Fitness', 'Train for Event', 'Stress Relief'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'alex@example.com' },
      { label: 'Preferred Start Date', type: 'select', placeholder: 'When would you like to start?', options: ['Tomorrow', 'This Week', 'Next Week', 'Just Exploring'] },
    ],
    formHeadline: 'Start Your Free 7-Day Trial',
    formSubheadline: 'Fill this out and your pass will be ready when you walk in.',

    faqs: [
      { question: 'Do I really need no credit card for the trial?', answer: 'Correct, no credit card, no hidden fees, no auto-billing. Just show up with your ID and your free pass is activated. If you love it, we\'ll talk membership options on day 7.' },
      { question: 'I\'m a complete beginner, will I fit in?', answer: 'Absolutely! Over 40% of our members started as complete beginners. We have dedicated beginner classes, and every trainer is certified to work with all fitness levels.' },
      { question: 'What\'s included in the personal training session?', answer: 'A 45-minute one-on-one session with a certified trainer who will assess your fitness level, discuss your goals, and create a customized workout plan you can follow on your own.' },
      { question: 'What happens after my 7-day trial?', answer: 'Nothing automatic, we\'ll never charge you without your consent. If you want to join, memberships start at $49/month with no long-term contracts.' },
    ],

    closingHeadline: 'Your Transformation Starts with Day One',
    closingSubheadline: 'Claim your free 7-day pass now. No credit card. No commitment. Just results.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // AUTO SERVICES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'auto-services': {
    heroHeadline: 'Tired of Getting the Runaround at the Dealership?',
    heroSubheadline: 'Honest diagnostics, transparent pricing, and certified technicians who treat your car like their own.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Trusted by 3,000+ vehicle owners in the GTA',

    primaryOffer: 'Free 42-Point Vehicle Inspection ($89 Value)',
    offerValue: '$89 Value. Free',
    offerDetails: [
      'Comprehensive 42-point safety inspection',
      'Written report with photos of any issues found',
      'Honest recommendation, no pressure to repair',
      '12-month / 20,000 km warranty on all work',
    ],
    ctaButtonText: 'Book My Free Inspection',
    ctaMicroCopy: 'Takes about 30 minutes. No obligation to repair.',

    urgencyType: 'expiring',
    urgencyText: 'Free inspection offer valid through end of month',

    testimonials: [
      { quote: 'The dealership quoted me $2,400 for brakes. Reliable Auto did the same job for $800 with better parts. I\'m never going back to the dealer.', name: 'Kevin L.', role: 'Toyota Owner', initials: 'KL' },
      { quote: 'They showed me photos of everything they found during the inspection and explained what was urgent vs. what could wait. No pressure at all.', name: 'Susan H.', role: 'Honda Owner', initials: 'SH' },
      { quote: 'Brought my car in for a weird noise. They diagnosed it in 20 minutes, fixed it same day, and it was half what I expected to pay.', name: 'Greg T.', role: 'Ford Owner', initials: 'GT' },
    ],

    stats: [
      { value: '3,000+', label: 'Vehicles Serviced' },
      { value: '40%', label: 'Avg. Savings vs Dealer' },
      { value: '4.9★', label: 'Google Rating' },
      { value: 'Same-Day', label: 'Service Available' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(905) 555-0000' },
      { label: 'Vehicle Make & Model', type: 'text', placeholder: 'e.g., 2021 Toyota Camry' },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
      { label: 'Service Needed', type: 'select', placeholder: 'What do you need?', options: ['Free Inspection', 'Oil Change', 'Brakes', 'Engine / Transmission', 'Tires', 'Check Engine Light', 'Other'] },
      { label: 'Preferred Day', type: 'select', placeholder: 'When works best?', options: ['As Soon as Possible', 'This Week', 'Next Week', 'I\'m Flexible'] },
    ],
    formHeadline: 'Book Your Free Vehicle Inspection',
    formSubheadline: 'Drop off or wait, we\'ll have your report ready in about 30 minutes.',

    faqs: [
      { question: 'Is the 42-point inspection really free?', answer: 'Yes, completely free with no strings attached. We\'ll give you a detailed written report with photos. Whether you choose to repair with us or not is entirely up to you.' },
      { question: 'Do you work on all vehicle makes?', answer: 'We service all major makes including Toyota, Honda, Ford, Chevrolet, Hyundai, Kia, Nissan, BMW, Mercedes, and more. Our technicians are ASE-certified and factory-trained.' },
      { question: 'What does your warranty cover?', answer: 'Every repair comes with a 12-month / 20,000 km warranty covering both parts and labour. If anything we fixed fails within that period, we fix it again at no charge.' },
      { question: 'Can I wait while you do the inspection?', answer: 'Absolutely. We have a comfortable waiting area with Wi-Fi and complimentary coffee. Most inspections take about 30 minutes.' },
    ],

    closingHeadline: 'Stop Overpaying at the Dealership',
    closingSubheadline: 'Book your free 42-point inspection today and see the difference honest auto care makes.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SALONS & SPAS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'salons-spas': {
    heroHeadline: 'You Deserve More Than a Haircut. You Deserve an Experience.',
    heroSubheadline: 'Award-winning stylists, luxurious treatments, and a space designed to make you feel like your best self.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Rated #1 salon in Toronto on Google',

    primaryOffer: 'First Visit 25% Off + Free Deep Conditioning Treatment',
    offerValue: '25% Off',
    offerDetails: [
      '25% off any service on your first visit',
      'Complimentary deep conditioning treatment ($45 value)',
      'Free consultation with a senior stylist',
      'Complimentary beverage & relaxation time',
    ],
    ctaButtonText: 'Book My First Visit',
    ctaMicroCopy: 'Book online in 30 seconds. Same-week appointments available.',

    urgencyType: 'expiring',
    urgencyText: 'This week only, first visit special ends Sunday',

    testimonials: [
      { quote: 'I walked in with frizzy, damaged hair and walked out looking like I just left a magazine shoot. The deep conditioning treatment was a game-changer.', name: 'Nicole F.', role: 'First-Time Client', initials: 'NF' },
      { quote: 'Best salon experience I\'ve ever had. The atmosphere, the service, the results, everything was perfect. I\'ve been coming back monthly for two years.', name: 'Rachel T.', role: 'Regular Client', initials: 'RT' },
      { quote: 'My stylist actually listened to what I wanted and delivered exactly that. Plus the complimentary champagne was a nice touch!', name: 'Danielle M.', role: 'Color Client', initials: 'DM' },
    ],

    stats: [
      { value: '2,000+', label: 'Happy Clients' },
      { value: '#1', label: 'Rated Salon in Toronto' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '12+', label: 'Award-Winning Stylists' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Sarah Johnson' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Service Interest', type: 'select', placeholder: 'What are you looking for?', options: ['Haircut & Style', 'Color / Highlights', 'Balayage / Ombre', 'Keratin Treatment', 'Spa / Facial', 'Bridal / Event'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'sarah@example.com' },
      { label: 'Preferred Day', type: 'select', placeholder: 'When works best?', options: ['This Week', 'Next Week', 'Weekday', 'Weekend'] },
    ],
    formHeadline: 'Book Your First Visit, 25% Off',
    formSubheadline: 'Claim your new client special and enjoy the Blush Beauty experience.',

    faqs: [
      { question: 'Can I use the 25% off on any service?', answer: 'Yes! The 25% discount applies to any single service on your first visit, hair, colour, spa treatments, facials, everything. Plus you get the free deep conditioning on top.' },
      { question: 'How long should I expect my appointment to take?', answer: 'A cut and style is about 60-90 minutes. Colour services are 2-3 hours depending on the look. We\'ll give you an exact estimate when you book.' },
      { question: 'What if I\'m not happy with the result?', answer: 'Your satisfaction is our promise. If you\'re not thrilled with your service, we\'ll make it right within 7 days at no extra charge.' },
    ],

    closingHeadline: 'Treat Yourself. You\'ve Earned It',
    closingSubheadline: 'Book your first visit this week and save 25%. Plus a free deep conditioning treatment on us.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // E-COMMERCE / RETAIL
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'ecommerce-retail': {
    heroHeadline: 'Canadian-Made. Delivered to Your Door. No Compromises.',
    heroSubheadline: 'Discover premium, locally crafted products with free shipping across Canada. Join 10,000+ happy customers.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: '10,000+ orders shipped across Canada',

    primaryOffer: '15% Off Your First Order + Free Shipping',
    offerValue: '15% Off',
    offerDetails: [
      '15% off your entire first order, no minimum',
      'Free shipping on all orders across Canada',
      '30-day hassle-free returns on everything',
      'Exclusive access to member-only sales',
    ],
    ctaButtonText: 'Get My 15% Off Code',
    ctaMicroCopy: 'Just enter your email. Code delivered instantly.',

    urgencyType: 'countdown',
    urgencyText: 'Flash sale ends in',

    testimonials: [
      { quote: 'The quality is incredible for the price. I ordered the leather weekender bag and it\'s nicer than anything I\'ve seen at twice the cost.', name: 'Emma R.', role: 'Verified Buyer', initials: 'ER' },
      { quote: 'Fast shipping, beautiful packaging, and the product was exactly as described. Ordered 3 more items the same week.', name: 'Tyler J.', role: 'Repeat Customer', initials: 'TJ' },
      { quote: 'Love supporting Canadian businesses. The quality speaks for itself and the customer service is top-notch.', name: 'Maria C.', role: 'Loyal Customer', initials: 'MC' },
    ],

    stats: [
      { value: '10,000+', label: 'Happy Customers' },
      { value: '4.8★', label: 'Average Rating' },
      { value: '2-Day', label: 'Avg. Delivery Time' },
      { value: '30-Day', label: 'Free Returns' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Alex Johnson' },
      { label: 'Email Address', type: 'email', placeholder: 'alex@example.com' },
    ],
    formStep2Fields: [
      { label: 'What interests you?', type: 'select', placeholder: 'Select a category', options: ['Home & Living', 'Fashion & Accessories', 'Food & Drink', 'Gifts', 'Everything!'] },
    ],
    formHeadline: 'Get Your 15% Off Code',
    formSubheadline: 'Enter your email and your discount code will arrive instantly.',

    faqs: [
      { question: 'Is shipping really free?', answer: 'Yes, free standard shipping on all orders across Canada, no minimum purchase required. Express shipping is available at a flat rate of $9.99.' },
      { question: 'What\'s your return policy?', answer: '30-day hassle-free returns on all items. If you\'re not happy, send it back for a full refund, we even cover return shipping on defective items.' },
      { question: 'Are all products really Canadian-made?', answer: 'Every product in our store is designed, crafted, or sourced from Canadian artisans and small businesses. We verify every supplier.' },
    ],

    closingHeadline: 'Don\'t Miss Out on 15% Off',
    closingSubheadline: 'Join 10,000+ happy customers. Get your discount code now, offer ends soon.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // PROFESSIONAL SERVICES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'professional-services': {
    heroHeadline: 'Your Business Is Growing. Your Finances Should Keep Up.',
    heroSubheadline: 'Strategic accounting, tax planning, and business advisory for entrepreneurs who want to scale , not just survive.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Managing $200M+ in client assets',

    primaryOffer: 'Free Business Financial Audit. Uncover Hidden Savings',
    offerValue: 'Free Audit',
    offerDetails: [
      'Comprehensive review of your financial operations',
      'Tax optimization opportunities identified',
      'Cash flow improvement recommendations',
      'Custom growth roadmap tailored to your business',
    ],
    ctaButtonText: 'Request My Free Audit',
    ctaMicroCopy: 'Limited to 5 businesses per quarter. Confidential.',

    urgencyType: 'limited-spots',
    urgencyText: 'Only 3 audit spots remaining this quarter',
    urgencySubtext: 'Next quarter opens April 1st',

    testimonials: [
      { quote: 'The free audit uncovered $47,000 in tax savings we were leaving on the table. Pinnacle paid for themselves in the first month.', name: 'Richard H.', role: 'Tech Startup Founder', initials: 'RH' },
      { quote: 'Finally found an accounting firm that understands growing businesses. They don\'t just file taxes, they help us make strategic decisions.', name: 'Lisa W.', role: 'Restaurant Chain Owner', initials: 'LW' },
      { quote: 'Switched from a big firm to Pinnacle and the difference is night and day. Personal attention, proactive advice, and they actually answer the phone.', name: 'James P.', role: 'Real Estate Investor', initials: 'JP' },
    ],

    stats: [
      { value: '$200M+', label: 'Client Assets Managed' },
      { value: '$4.2M', label: 'Tax Savings Found' },
      { value: '300+', label: 'Businesses Served' },
      { value: '98%', label: 'Client Retention Rate' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
      { label: 'Business Name', type: 'text', placeholder: 'Your Company Inc.' },
      { label: 'Business Type', type: 'select', placeholder: 'Select your industry', options: ['E-commerce', 'Professional Services', 'Real Estate', 'Restaurant / Hospitality', 'Technology', 'Construction', 'Healthcare', 'Other'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Annual Revenue Range', type: 'select', placeholder: 'Approximate revenue', options: ['Under $250K', '$250K - $500K', '$500K - $1M', '$1M - $5M', '$5M+'] },
    ],
    formHeadline: 'Request Your Free Business Audit',
    formSubheadline: 'A senior advisor will review your finances and present findings within 5 business days.',

    faqs: [
      { question: 'What does the free audit include?', answer: 'We review your tax returns, financial statements, cash flow, and business structure. You\'ll receive a written report with specific, actionable recommendations , typically identifying $10,000-$100,000+ in potential savings.' },
      { question: 'Is this really free? What\'s the catch?', answer: 'No catch. We offer the audit because most businesses we audit choose to become clients. But there\'s zero pressure or obligation. The audit report is yours to keep either way.' },
      { question: 'How is this different from my current accountant?', answer: 'Most accountants are reactive, they file your taxes after the year ends. We\'re proactive strategic advisors who help you plan ahead, minimize tax liability, and make smarter financial decisions year-round.' },
      { question: 'How long does the audit process take?', answer: 'We\'ll need about 30 minutes of your time for an initial call, plus access to your recent financial documents. We handle everything else and deliver your report within 5 business days.' },
    ],

    closingHeadline: 'Stop Leaving Money on the Table',
    closingSubheadline: 'Request your free business audit before spots fill up. Only 3 remaining this quarter.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // NONPROFITS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'nonprofits': {
    heroHeadline: 'Every Dollar Plants a Seed of Change.',
    heroSubheadline: 'Your donation provides meals, shelter, and hope to families across Northern Ontario. 92 cents of every dollar goes directly to programs.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over 12,000 families helped since 2015',

    primaryOffer: 'Make a Tax-Deductible Donation Today',
    offerValue: 'Tax Deductible',
    offerDetails: [
      '$25 provides meals for a family for one week',
      '$50 supplies school essentials for a child',
      '$100 funds emergency shelter for a family',
      'Monthly donors get exclusive impact reports',
    ],
    ctaButtonText: 'Donate Now',
    ctaMicroCopy: 'Tax receipt issued instantly. Every amount makes a difference.',

    urgencyType: 'progress-bar',
    urgencyText: 'Winter Campaign Goal',
    progressPercent: 73,
    progressGoal: '$50,000',

    testimonials: [
      { quote: 'I\'ve been a monthly donor for 3 years. The impact reports show exactly where my money goes. This is one of the most transparent nonprofits I\'ve supported.', name: 'Catherine B.', role: 'Monthly Donor', initials: 'CB' },
      { quote: 'Northern Hope helped my family when we had nowhere to turn. Now I volunteer to give back. They truly change lives.', name: 'Maria G.', role: 'Community Member', initials: 'MG' },
      { quote: 'As a corporate sponsor, we\'ve seen firsthand the incredible work this team does. Their efficiency and heart set them apart.', name: 'David N.', role: 'Corporate Partner', initials: 'DN' },
    ],

    stats: [
      { value: '12,000+', label: 'Families Helped' },
      { value: '92¢', label: 'Of Every Dollar to Programs' },
      { value: '4.8★', label: 'Charity Rating' },
      { value: '500+', label: 'Active Volunteers' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
      { label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
    ],
    formStep2Fields: [
      { label: 'Phone Number (Optional)', type: 'tel', placeholder: '(705) 555-0000' },
      { label: 'How Would You Like to Help?', type: 'select', placeholder: 'Select an option', options: ['One-Time Donation', 'Monthly Donation', 'Volunteer', 'Corporate Partnership', 'In-Kind Donation'] },
    ],
    formHeadline: 'Join Our Mission',
    formSubheadline: 'Every contribution, no matter the size, creates lasting change.',

    faqs: [
      { question: 'How much of my donation goes to programs?', answer: '92 cents of every dollar goes directly to our programs and services. Our administrative overhead is among the lowest in the sector, verified by independent auditors.' },
      { question: 'Will I receive a tax receipt?', answer: 'Yes, all donations are tax-deductible and you\'ll receive an official tax receipt via email within minutes of your donation.' },
      { question: 'Can I set up monthly donations?', answer: 'Absolutely! Monthly donors are the backbone of our work. You can set any amount, change it anytime, and you\'ll receive quarterly impact reports showing exactly how your donations are being used.' },
      { question: 'How can I volunteer?', answer: 'We welcome volunteers year-round! Fill out the form above and select "Volunteer", our coordinator will reach out within 48 hours with available opportunities in your area.' },
    ],

    closingHeadline: 'Be the Difference Someone Needs Today',
    closingSubheadline: 'Help us reach our $50,000 winter campaign goal. Every dollar brings warmth and hope to a family in need.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // DAYCARE CENTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'daycare-centers': {
    heroHeadline: 'Finding Childcare Shouldn\'t Feel Like a Second Full-Time Job.',
    heroSubheadline: 'A safe, nurturing environment where your child learns, grows, and thrives, while you focus on work with peace of mind.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Trusted by 300+ families in the community',

    primaryOffer: 'Book a Free Tour + Your Child\'s Free Trial Day',
    offerValue: 'Free Tour + Trial',
    offerDetails: [
      'Guided tour of our facility and classrooms',
      'Meet our certified early childhood educators',
      'Your child enjoys a full free trial day',
      'No enrollment commitment required',
    ],
    ctaButtonText: 'Book Our Free Tour',
    ctaMicroCopy: 'Tours available Monday-Friday. Limited spots for Fall enrollment.',

    urgencyType: 'limited-spots',
    urgencyText: 'Fall enrollment filling fast, only 6 spots remaining',
    urgencySubtext: 'Waitlist starts after spots are filled',

    testimonials: [
      { quote: 'The transition from home to daycare was seamless. My daughter cries when it\'s time to leave because she loves it so much. That tells you everything.', name: 'Aisha K.', role: 'Parent of 3-Year-Old', initials: 'AK' },
      { quote: 'The daily updates with photos and progress reports give us so much peace of mind. We know exactly what our son is learning and doing every day.', name: 'Jeff M.', role: 'Parent of 2-Year-Old', initials: 'JM' },
      { quote: 'We toured five daycares before choosing Little Explorers. The staff-to-child ratio, the curriculum, and the facility are in a league of their own.', name: 'Sandra L.', role: 'Parent of 4-Year-Old', initials: 'SL' },
    ],

    stats: [
      { value: '300+', label: 'Families Trust Us' },
      { value: '4:1', label: 'Child-to-Staff Ratio' },
      { value: '15+', label: 'Years in Operation' },
      { value: '4.9★', label: 'Parent Rating' },
    ],

    formStep1Fields: [
      { label: 'Parent\'s Name', type: 'text', placeholder: 'Jane Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(905) 555-0000' },
      { label: 'Child\'s Age', type: 'select', placeholder: 'How old is your child?', options: ['Infant (0-18 months)', 'Toddler (18 months - 2.5 years)', 'Preschool (2.5 - 4 years)', 'Junior Kindergarten (4-5 years)'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
      { label: 'Preferred Start Date', type: 'select', placeholder: 'When do you need care?', options: ['As Soon as Possible', 'Next Month', 'Fall Enrollment', 'January Start', 'Just Exploring'] },
      { label: 'Anything we should know?', type: 'textarea', placeholder: 'Allergies, special needs, questions...' },
    ],
    formHeadline: 'Book Your Free Facility Tour',
    formSubheadline: 'See our classrooms, meet our educators, and let your child enjoy a free trial day.',

    faqs: [
      { question: 'What is your staff-to-child ratio?', answer: 'We maintain a 4:1 ratio for toddlers and a 8:1 ratio for preschoolers, exceeding provincial requirements. Every educator is certified in early childhood education and holds current first aid certification.' },
      { question: 'What does a typical day look like?', answer: 'Our structured curriculum includes circle time, creative play, outdoor exploration, music, early literacy, and rest periods. We follow a play-based learning philosophy that prepares children for school while keeping them engaged and happy.' },
      { question: 'Do you accommodate allergies and dietary needs?', answer: 'Absolutely. We are a nut-free facility and accommodate all dietary restrictions. Our on-site kitchen prepares nutritious meals and snacks daily, with menus available for parents to review.' },
      { question: 'What are your hours and holiday schedule?', answer: 'We\'re open Monday-Friday, 7:00 AM to 6:00 PM. We follow the Ontario statutory holiday schedule. A full calendar is provided upon enrollment.' },
    ],

    closingHeadline: 'Give Your Child the Best Start',
    closingSubheadline: 'Book your free tour today and see why 300+ families trust Little Explorers with their most precious treasure.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CONTRACTORS / TRADES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'contractors-trades': {
    heroHeadline: 'Quality Craftsmanship Shouldn\'t Be This Hard to Find.',
    heroSubheadline: 'Licensed, insured, and backed by a satisfaction guarantee. Get a transparent quote for your project, no surprises, no hidden fees.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over 800 projects completed across the GTA',

    primaryOffer: 'Free Project Estimate + We\'ll Review Your Existing Quote',
    offerValue: 'Free Estimate',
    offerDetails: [
      'Detailed written estimate with material breakdown',
      'We\'ll review any competing quote for free',
      'Timeline commitment, we start and finish on schedule',
      '5-year workmanship warranty on all projects',
    ],
    ctaButtonText: 'Get My Free Estimate',
    ctaMicroCopy: 'On-site estimates within 48 hours. Zero obligation.',

    urgencyType: 'limited-spots',
    urgencyText: 'Spring booking slots filling up fast',
    urgencySubtext: 'Currently booking 3-4 weeks out',

    testimonials: [
      { quote: 'They rebuilt our entire kitchen on time and on budget. The attention to detail was incredible, crown moulding, custom cabinets, everything perfect.', name: 'Paul D.', role: 'Kitchen Renovation', initials: 'PD' },
      { quote: 'After two bad contractor experiences, Ironwood restored my faith. They showed up when they said they would, did what they promised, and cleaned up after themselves.', name: 'Martha S.', role: 'Bathroom Renovation', initials: 'MS' },
      { quote: 'Got three quotes for our deck build. Ironwood wasn\'t the cheapest, but they were the most transparent about materials and timelines. Worth every penny.', name: 'Andrew B.', role: 'Deck & Patio Build', initials: 'AB' },
    ],

    stats: [
      { value: '800+', label: 'Projects Completed' },
      { value: '25+', label: 'Years of Experience' },
      { value: '4.9★', label: 'Client Rating' },
      { value: '5-Year', label: 'Workmanship Warranty' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'John Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(905) 555-0000' },
      { label: 'Project Type', type: 'select', placeholder: 'What kind of project?', options: ['Kitchen Renovation', 'Bathroom Renovation', 'Basement Finishing', 'Deck / Patio', 'Addition / Extension', 'Whole Home Renovation', 'Commercial Build-Out', 'Other'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
      { label: 'Approximate Budget', type: 'select', placeholder: 'Rough budget range', options: ['Under $10K', '$10K - $25K', '$25K - $50K', '$50K - $100K', '$100K+', 'Not Sure Yet'] },
      { label: 'Project Details', type: 'textarea', placeholder: 'Tell us about your project...' },
    ],
    formHeadline: 'Get Your Free Project Estimate',
    formSubheadline: 'Tell us about your project and we\'ll schedule an on-site estimate within 48 hours.',

    faqs: [
      { question: 'Do you provide a detailed written estimate?', answer: 'Yes, every estimate includes a full breakdown of materials, labour, timelines, and total cost. No vague numbers or hidden fees. What we quote is what you pay.' },
      { question: 'Are you licensed and insured?', answer: 'Fully licensed by the Ontario College of Trades, WSIB covered, and carrying $5M in comprehensive liability insurance. We\'ll provide proof before any work begins.' },
      { question: 'What happens if the project goes over budget?', answer: 'We work on fixed-price contracts. If we discover unexpected issues (like hidden water damage), we\'ll show you exactly what we found, explain the options, and get your approval before any additional work.' },
      { question: 'Will you review a quote I got from another contractor?', answer: 'Absolutely, bring us any competing quote and we\'ll review it for free. We\'ll help you understand if the scope, materials, and pricing are fair, even if you don\'t choose us.' },
    ],

    closingHeadline: 'Your Dream Project Starts with One Call',
    closingSubheadline: 'Get your free estimate today. Spring booking slots are filling up, don\'t wait to start your renovation.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // REAL ESTATE
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'real-estate': {
    heroHeadline: 'What\'s Your Home Really Worth? Find Out in 60 Seconds.',
    heroSubheadline: 'Get a free, no-obligation market analysis based on recent sales in your neighbourhood. Powered by real MLS data.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Over $150M in properties sold',

    primaryOffer: 'Free Home Market Analysis. Instant Online Report',
    offerValue: 'Free Report',
    offerDetails: [
      'Current estimated value based on recent comparable sales',
      'Neighbourhood market trends and price history',
      'Days-on-market data for your area',
      'Personalized selling strategy call with a top agent',
    ],
    ctaButtonText: 'Get My Free Home Value',
    ctaMicroCopy: 'Takes 60 seconds. No obligation. 100% free.',

    urgencyType: 'expiring',
    urgencyText: 'Market conditions are shifting, get your updated valuation now',

    testimonials: [
      { quote: 'The market analysis showed our home was worth $85,000 more than we expected. Horizon Realty sold it above asking in 6 days.', name: 'Janet & Tom R.', role: 'Home Sellers, North York', initials: 'JR' },
      { quote: 'As first-time buyers, we were overwhelmed. Our agent walked us through every step and found us a home $20K under budget.', name: 'Amit P.', role: 'First-Time Buyer', initials: 'AP' },
      { quote: 'I\'ve sold two properties with Horizon now. Their market knowledge and negotiation skills are unmatched in the GTA.', name: 'George K.', role: 'Property Investor', initials: 'GK' },
    ],

    stats: [
      { value: '$150M+', label: 'In Properties Sold' },
      { value: '103%', label: 'Avg. Sale-to-List Ratio' },
      { value: '12 Days', label: 'Avg. Days on Market' },
      { value: '4.9★', label: 'Client Rating' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
      { label: 'Property Address', type: 'text', placeholder: '123 Main Street, Toronto' },
      { label: 'Property Type', type: 'select', placeholder: 'Select property type', options: ['Detached House', 'Semi-Detached', 'Townhouse', 'Condo / Apartment', 'Multi-Family', 'Land / Lot'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Your Timeline', type: 'select', placeholder: 'When are you thinking of selling?', options: ['As Soon as Possible', 'Within 3 Months', 'Within 6 Months', 'Next Year', 'Just Curious'] },
    ],
    formHeadline: 'Get Your Free Home Valuation',
    formSubheadline: 'Enter your address and get an instant estimate based on real MLS data.',

    faqs: [
      { question: 'How accurate is the home valuation?', answer: 'Our valuations are based on actual MLS sales data for comparable properties in your neighbourhood. For the most precise value, we follow up with a complimentary in-person assessment that factors in upgrades, condition, and lot specifics.' },
      { question: 'Am I obligated to list my home after the valuation?', answer: 'Absolutely not. The valuation is completely free with zero obligation. Many homeowners use it simply to understand their equity or plan for the future.' },
      { question: 'What makes you different from other agents?', answer: 'We sell homes 40% faster than the market average at 103% of listing price. Our marketing includes professional photography, virtual tours, targeted digital advertising, and a buyer network of 5,000+.' },
      { question: 'Do you help buyers too?', answer: 'Yes! Whether you\'re buying, selling, or both, we provide full-service representation. First-time buyers get a dedicated buyer\'s guide and step-by-step support throughout the process.' },
    ],

    closingHeadline: 'Your Home\'s Value May Surprise You',
    closingSubheadline: 'Get your free market analysis now. The market is moving, find out where you stand.',
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // RESTAURANTS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  'restaurants': {
    heroHeadline: 'Skip the Delivery Apps. Dine with Us Direct.',
    heroSubheadline: 'Farm-to-table dining in the heart of Toronto. Reserve your table and enjoy 10% off your first dinner with us.',
    heroImage: '/illustrations/hero-success.svg',
    trustStat: 'Toronto\'s #1 rated farm-to-table restaurant on Google',

    primaryOffer: 'Reserve Your Table + 10% Off Your First Dinner',
    offerValue: '10% Off',
    offerDetails: [
      '10% off your entire bill on your first visit',
      'Priority seating, skip the wait',
      'Complimentary amuse-bouche from our chef',
      'Access to our seasonal tasting menu events',
    ],
    ctaButtonText: 'Reserve My Table',
    ctaMicroCopy: 'Reservations confirmed instantly. Walk-ins also welcome.',

    urgencyType: 'expiring',
    urgencyText: 'Limited-time seasonal menu available through end of month',

    testimonials: [
      { quote: 'Best dining experience in Toronto, hands down. The seasonal risotto was life-changing and the wine pairing was spot-on. We\'ve been back 4 times.', name: 'Laura & Sam K.', role: 'Regular Diners', initials: 'LK' },
      { quote: 'We hosted our anniversary dinner here and they made it absolutely magical. The staff remembered our names on our second visit.', name: 'Olivia H.', role: 'Anniversary Celebration', initials: 'OH' },
      { quote: 'As someone with dietary restrictions, I\'m used to limited options. Here, the chef created a custom 3-course meal just for me. That kind of care is rare.', name: 'Daniel W.', role: 'Dietary-Conscious Diner', initials: 'DW' },
    ],

    stats: [
      { value: '#1', label: 'Farm-to-Table in Toronto' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '95%', label: 'Locally Sourced' },
      { value: '15,000+', label: 'Guests Served' },
    ],

    formStep1Fields: [
      { label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
      { label: 'Phone Number', type: 'tel', placeholder: '(416) 555-0000' },
      { label: 'Party Size', type: 'select', placeholder: 'How many guests?', options: ['1-2 Guests', '3-4 Guests', '5-6 Guests', '7-8 Guests', 'Large Party (9+)', 'Private Event'] },
    ],
    formStep2Fields: [
      { label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
      { label: 'Preferred Date', type: 'select', placeholder: 'When would you like to visit?', options: ['Tonight', 'This Weekend', 'Next Week', 'Planning Ahead'] },
      { label: 'Special Requests', type: 'textarea', placeholder: 'Dietary needs, celebrations, seating preference...' },
    ],
    formHeadline: 'Reserve Your Table',
    formSubheadline: 'Book now and get 10% off your first dinner. Confirmation is instant.',

    faqs: [
      { question: 'Do I need a reservation?', answer: 'Reservations are recommended, especially for weekend evenings. Walk-ins are welcome but may have a wait during peak hours. Reserving online guarantees your table and unlocks the 10% first-visit discount.' },
      { question: 'Can you accommodate dietary restrictions?', answer: 'Absolutely. We accommodate vegetarian, vegan, gluten-free, dairy-free, and all allergy requirements. Just note your needs when booking and our chef will prepare something special for you.' },
      { question: 'Do you host private events?', answer: 'Yes! We have a private dining room for up to 30 guests and can arrange custom menus for any occasion , birthdays, anniversaries, corporate dinners, and more. Contact us for event pricing.' },
      { question: 'What\'s the dress code?', answer: 'Smart casual. We want you to feel comfortable while enjoying an elevated dining experience. No formal attire required.' },
    ],

    closingHeadline: 'Your Table Is Waiting',
    closingSubheadline: 'Reserve now and enjoy 10% off your first dinner. Don\'t miss our limited-time seasonal menu.',
  },
};

