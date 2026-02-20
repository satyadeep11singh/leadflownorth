// Shared blog post data used by blog index, RSS feed, and sitemap

export interface GeneralPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export interface IndustryPost {
  slug: string;
  title: string;
  industry: string;
  type: 'Guide' | 'Case Study';
}

export const generalPosts: GeneralPost[] = [
  {
    slug: "local-seo-guide-canadian-small-business",
    title: "The Complete Local SEO Guide for Canadian Small Businesses",
    excerpt: "Learn how to dominate local search results and attract more customers from your area.",
    category: "SEO",
    date: "January 10, 2026"
  },
  {
    slug: "website-conversion-rate-optimization",
    title: "10 Quick Wins to Boost Your Website Conversion Rate",
    excerpt: "Simple changes you can make today to turn more website visitors into leads.",
    category: "Conversion",
    date: "January 5, 2026"
  },
  {
    slug: "why-small-business-needs-automation",
    title: "Why Every Small Business Needs Marketing Automation in 2026",
    excerpt: "Stop losing leads because you're too busy. Here's how automation can help.",
    category: "Automation",
    date: "December 28, 2025"
  },
  {
    slug: "why-every-business-needs-roi-calculator",
    title: "Why Every Business Needs an ROI Calculator",
    excerpt: "Learn how ROI calculators help you make smarter marketing decisions and justify ad spend.",
    category: "Strategy",
    date: "February 15, 2026"
  }
];

export const industryContent: IndustryPost[] = [
  // Home Services
  { slug: "plumbing-marketing-guide-canada", title: "Plumbing Marketing Automation Guide", industry: "Home Services", type: "Guide" },
  { slug: "plumbing-case-study-rodriguez", title: "Case Study: Rodriguez Plumbing", industry: "Home Services", type: "Case Study" },
  { slug: "hvac-marketing-guide-canada", title: "HVAC Marketing Automation Guide", industry: "Home Services", type: "Guide" },
  { slug: "hvac-case-study-blackwood", title: "Case Study: Blackwood HVAC", industry: "Home Services", type: "Case Study" },
  { slug: "electrical-marketing-guide-canada", title: "Electrical Contractor Marketing Guide", industry: "Home Services", type: "Guide" },
  { slug: "electrical-case-study-williams", title: "Case Study: Williams Electric", industry: "Home Services", type: "Case Study" },
  { slug: "general-contractor-marketing-guide-canada", title: "General Contractor Marketing Guide", industry: "Home Services", type: "Guide" },
  { slug: "general-contractor-case-study-morrison", title: "Case Study: Morrison Construction", industry: "Home Services", type: "Case Study" },

  // Legal Services
  { slug: "personal-injury-marketing-guide-canada", title: "Personal Injury Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "personal-injury-case-study-martinez", title: "Case Study: Martinez Law", industry: "Legal", type: "Case Study" },
  { slug: "family-law-marketing-guide-canada", title: "Family Law Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "family-law-case-study-kim", title: "Case Study: Kim Family Law", industry: "Legal", type: "Case Study" },
  { slug: "criminal-defense-marketing-guide-canada", title: "Criminal Defense Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "criminal-defense-case-study-torres", title: "Case Study: Torres Defense", industry: "Legal", type: "Case Study" },
  { slug: "estate-planning-marketing-guide-canada", title: "Estate Planning Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "estate-planning-case-study-leblanc", title: "Case Study: LeBlanc Estate", industry: "Legal", type: "Case Study" },
  { slug: "immigration-marketing-guide-canada", title: "Immigration Law Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "immigration-case-study-sharma", title: "Case Study: Sharma Immigration", industry: "Legal", type: "Case Study" },
  { slug: "real-estate-law-marketing-guide-canada", title: "Real Estate Law Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "real-estate-law-case-study-patel", title: "Case Study: Patel Real Estate Law", industry: "Legal", type: "Case Study" },
  { slug: "small-business-law-marketing-guide-canada", title: "Small Business Law Marketing Guide", industry: "Legal", type: "Guide" },
  { slug: "small-business-law-case-study-wong", title: "Case Study: Wong Business Law", industry: "Legal", type: "Case Study" },

  // Medical & Dental
  { slug: "medical-clinics-marketing-guide-canada", title: "Medical Clinic Marketing Guide", industry: "Medical", type: "Guide" },
  { slug: "medical-clinics-case-study-desai", title: "Case Study: Desai Medical Clinic", industry: "Medical", type: "Case Study" },
  { slug: "dental-practices-marketing-guide-canada", title: "Dental Practice Marketing Guide", industry: "Medical", type: "Guide" },
  { slug: "dental-practices-case-study-chen", title: "Case Study: Chen Dental", industry: "Medical", type: "Case Study" },
  { slug: "specialty-practices-marketing-guide-canada", title: "Specialty Practice Marketing Guide", industry: "Medical", type: "Guide" },
  { slug: "specialty-practices-case-study-thompson", title: "Case Study: Thompson Specialist", industry: "Medical", type: "Case Study" },

  // Fitness & Gyms
  { slug: "gym-marketing-guide-canada", title: "Gym Marketing Automation Guide", industry: "Fitness", type: "Guide" },
  { slug: "gym-case-study-peak-fitness", title: "Case Study: Peak Fitness", industry: "Fitness", type: "Case Study" },
  { slug: "personal-training-marketing-guide-canada", title: "Personal Training Marketing Guide", industry: "Fitness", type: "Guide" },
  { slug: "personal-training-case-study-sarah", title: "Case Study: Sarah Personal Training", industry: "Fitness", type: "Case Study" },
  { slug: "yoga-studio-marketing-guide-canada", title: "Yoga Studio Marketing Guide", industry: "Fitness", type: "Guide" },
  { slug: "yoga-studio-case-study-lotus", title: "Case Study: Lotus Yoga", industry: "Fitness", type: "Case Study" },
  { slug: "crossfit-marketing-guide-canada", title: "CrossFit Marketing Guide", industry: "Fitness", type: "Guide" },
  { slug: "crossfit-case-study-northern", title: "Case Study: Northern CrossFit", industry: "Fitness", type: "Case Study" },
  { slug: "martial-arts-marketing-guide-canada", title: "Martial Arts Marketing Guide", industry: "Fitness", type: "Guide" },
  { slug: "martial-arts-case-study-dragon", title: "Case Study: Dragon Martial Arts", industry: "Fitness", type: "Case Study" },
  { slug: "dance-studio-marketing-guide-canada", title: "Dance Studio Marketing Guide", industry: "Fitness", type: "Guide" },
  { slug: "dance-studio-case-study-spotlight", title: "Case Study: Spotlight Dance", industry: "Fitness", type: "Case Study" },

  // Auto Services
  { slug: "auto-repair-marketing-guide-canada", title: "Auto Repair Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "auto-repair-case-study-marchetti", title: "Case Study: Marchetti Auto", industry: "Auto", type: "Case Study" },
  { slug: "dealership-marketing-guide-canada", title: "Dealership Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "dealership-case-study-kowalski", title: "Case Study: Kowalski Motors", industry: "Auto", type: "Case Study" },
  { slug: "body-shop-marketing-guide-canada", title: "Body Shop Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "body-shop-case-study-deluca", title: "Case Study: DeLuca Body Shop", industry: "Auto", type: "Case Study" },
  { slug: "detailing-marketing-guide-canada", title: "Detailing Business Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "detailing-case-study-pristine", title: "Case Study: Pristine Detailing", industry: "Auto", type: "Case Study" },
  { slug: "service-center-marketing-guide-canada", title: "Service Center Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "service-center-case-study-precision", title: "Case Study: Precision Service", industry: "Auto", type: "Case Study" },
  { slug: "tire-shop-marketing-guide-canada", title: "Tire Shop Marketing Guide", industry: "Auto", type: "Guide" },
  { slug: "tire-shop-case-study-northern", title: "Case Study: Northern Tire", industry: "Auto", type: "Case Study" },

  // Salons & Spas
  { slug: "hair-salons-marketing-guide-canada", title: "Hair Salon Marketing Guide", industry: "Salons", type: "Guide" },
  { slug: "hair-salons-case-study-studiolv", title: "Case Study: Studio LV Hair", industry: "Salons", type: "Case Study" },
  { slug: "barbershops-marketing-guide-canada", title: "Barbershop Marketing Guide", industry: "Salons", type: "Guide" },
  { slug: "barbershops-case-study-sharpcuts", title: "Case Study: Sharp Cuts", industry: "Salons", type: "Case Study" },
  { slug: "day-spas-marketing-guide-canada", title: "Day Spa Marketing Guide", industry: "Salons", type: "Guide" },
  { slug: "day-spas-case-study-serenity", title: "Case Study: Serenity Spa", industry: "Salons", type: "Case Study" },
  { slug: "med-spas-marketing-guide-canada", title: "Med Spa Marketing Guide", industry: "Salons", type: "Guide" },
  { slug: "med-spas-case-study-radiance", title: "Case Study: Radiance Med Spa", industry: "Salons", type: "Case Study" },

  // E-commerce & Retail
  { slug: "online-store-marketing-guide-canada", title: "Online Store Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "online-store-case-study-maple", title: "Case Study: Maple & Oak", industry: "Retail", type: "Case Study" },
  { slug: "brick-mortar-retail-marketing-guide-canada", title: "Brick & Mortar Retail Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "brick-mortar-case-study-urban-finds", title: "Case Study: Urban Finds", industry: "Retail", type: "Case Study" },
  { slug: "fashion-apparel-marketing-guide-canada", title: "Fashion & Apparel Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "fashion-apparel-case-study-atelier", title: "Case Study: Atelier Fashion", industry: "Retail", type: "Case Study" },
  { slug: "beauty-cosmetics-marketing-guide-canada", title: "Beauty & Cosmetics Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "beauty-cosmetics-case-study-glow", title: "Case Study: Glow Beauty", industry: "Retail", type: "Case Study" },
  { slug: "home-goods-marketing-guide-canada", title: "Home Goods Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "home-goods-case-study-northwood", title: "Case Study: Northwood Home", industry: "Retail", type: "Case Study" },
  { slug: "food-beverage-marketing-guide-canada", title: "Food & Beverage Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "food-beverage-case-study-harvest", title: "Case Study: Harvest Foods", industry: "Retail", type: "Case Study" },
  { slug: "electronics-marketing-guide-canada", title: "Electronics Retail Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "electronics-case-study-techzone", title: "Case Study: TechZone", industry: "Retail", type: "Case Study" },
  { slug: "specialty-retail-marketing-guide-canada", title: "Specialty Retail Marketing Guide", industry: "Retail", type: "Guide" },
  { slug: "specialty-retail-case-study-northstar", title: "Case Study: Northstar Specialty", industry: "Retail", type: "Case Study" },

  // Professional Services
  { slug: "accountants-marketing-guide-canada", title: "Accountant Marketing Guide", industry: "Professional", type: "Guide" },
  { slug: "accountants-case-study-singh", title: "Case Study: Singh & Associates CPA", industry: "Professional", type: "Case Study" },
  { slug: "financial-advisors-marketing-guide-canada", title: "Financial Advisor Marketing Guide", industry: "Professional", type: "Guide" },
  { slug: "financial-advisors-case-study-kaplan", title: "Case Study: Kaplan Wealth", industry: "Professional", type: "Case Study" },
  { slug: "business-consultants-marketing-guide-canada", title: "Business Consultant Marketing Guide", industry: "Professional", type: "Guide" },
  { slug: "business-consultants-case-study-wong", title: "Case Study: Wong Consulting", industry: "Professional", type: "Case Study" },
  { slug: "executive-coaches-marketing-guide-canada", title: "Executive Coach Marketing Guide", industry: "Professional", type: "Guide" },
  { slug: "executive-coaches-case-study-laurent", title: "Case Study: Laurent Coaching", industry: "Professional", type: "Case Study" },
  { slug: "it-consultants-marketing-guide-canada", title: "IT Consultant Marketing Guide", industry: "Professional", type: "Guide" },
  { slug: "it-consultants-case-study-johal", title: "Case Study: Johal Tech", industry: "Professional", type: "Case Study" },

  // Nonprofits
  { slug: "charities-marketing-guide-canada", title: "Charity Marketing Guide", industry: "Nonprofit", type: "Guide" },
  { slug: "charities-case-study-northshore", title: "Case Study: Northshore Charity", industry: "Nonprofit", type: "Case Study" },
  { slug: "foundations-marketing-guide-canada", title: "Foundation Marketing Guide", industry: "Nonprofit", type: "Guide" },
  { slug: "foundations-case-study-acef", title: "Case Study: ACEF Foundation", industry: "Nonprofit", type: "Case Study" },
  { slug: "associations-marketing-guide-canada", title: "Association Marketing Guide", industry: "Nonprofit", type: "Guide" },
  { slug: "associations-case-study-ctpa", title: "Case Study: CTPA Association", industry: "Nonprofit", type: "Case Study" },
  { slug: "faith-organizations-marketing-guide-canada", title: "Faith Organization Marketing Guide", industry: "Nonprofit", type: "Guide" },
  { slug: "faith-organizations-case-study-newlife", title: "Case Study: New Life Church", industry: "Nonprofit", type: "Case Study" },

  // Daycare Centers
  { slug: "daycare-marketing-guide-canada", title: "Daycare Marketing Guide", industry: "Daycare", type: "Guide" },
  { slug: "daycare-case-study-sunshine", title: "Case Study: Sunshine Daycare", industry: "Daycare", type: "Case Study" },
  { slug: "childcare-programs-marketing-guide-canada", title: "Childcare Programs Marketing Guide", industry: "Daycare", type: "Guide" },
  { slug: "childcare-programs-case-study-adventure", title: "Case Study: Adventure Learning", industry: "Daycare", type: "Case Study" },

  // Contractors & Trades
  { slug: "general-contractors-marketing-guide-canada", title: "General Contractor Marketing Guide", industry: "Contractors", type: "Guide" },
  { slug: "general-contractors-case-study-nguyen", title: "Case Study: Nguyen Contracting", industry: "Contractors", type: "Case Study" },
  { slug: "painting-contractor-marketing-guide-canada", title: "Painting Contractor Marketing Guide", industry: "Contractors", type: "Guide" },
  { slug: "painting-contractor-case-study-ricci", title: "Case Study: Ricci Painting", industry: "Contractors", type: "Case Study" }
];

// Industry label mapping for display
export const industryLabels: Record<string, string> = {
  'Home Services': 'Home Services',
  'Legal': 'Legal Services',
  'Medical': 'Medical & Dental',
  'Fitness': 'Fitness & Gyms',
  'Auto': 'Auto Services',
  'Salons': 'Salons & Spas',
  'Retail': 'E-commerce & Retail',
  'Professional': 'Professional Services',
  'Nonprofit': 'Nonprofits',
  'Daycare': 'Daycare Centers',
  'Contractors': 'Contractors & Trades'
};
