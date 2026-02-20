export type FreeToolStatus = 'live' | 'coming-soon';

export type FreeToolGroup =
  | 'SEO & Online Presence'
  | 'Revenue & Pricing'
  | 'Marketing & Budgeting'
  | 'Operations & Scheduling'
  | 'Industry-Specific';

export interface FreeTool {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  group: FreeToolGroup;
  status: FreeToolStatus;
  icon: string;
  legacyPath?: string;
}

export const freeToolGroups: FreeToolGroup[] = [
  'SEO & Online Presence',
  'Revenue & Pricing',
  'Marketing & Budgeting',
  'Operations & Scheduling',
  'Industry-Specific',
];

export const freeTools: FreeTool[] = [
  {
    slug: 'website-grader',
    name: 'Website Grader',
    shortDescription: 'Run a free basic health check for SEO, speed, mobile readiness, and trust signals.',
    category: 'SEO & Visibility',
    group: 'SEO & Online Presence',
    status: 'live',
    icon: 'WG',
  },
  {
    slug: 'local-seo-gbp-audit',
    name: 'Local SEO + GBP Audit',
    shortDescription: 'Check local SEO fundamentals and Google Business Profile readiness for local lead generation.',
    category: 'SEO & Visibility',
    group: 'SEO & Online Presence',
    status: 'live',
    icon: 'LS',
  },
  {
    slug: 'google-review-link-qr-generator',
    name: 'Google Review Link + QR Generator',
    shortDescription: 'Generate direct review links and printable QR assets your team can use immediately.',
    category: 'Reputation',
    group: 'SEO & Online Presence',
    status: 'live',
    icon: 'QR',
  },
  {
    slug: 'utm-campaign-url-builder',
    name: 'UTM Campaign URL Builder',
    shortDescription: 'Build clean UTM-tagged links with campaign parameters for ads, email, and SMS tracking.',
    category: 'Attribution',
    group: 'SEO & Online Presence',
    status: 'live',
    icon: 'UT',
  },
  {
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    shortDescription: 'Project traffic, conversion, and revenue gains using conservative small-business assumptions.',
    category: 'Revenue Planning',
    group: 'Revenue & Pricing',
    status: 'live',
    icon: 'RI',
    legacyPath: '/roi-calculator',
  },
  {
    slug: 'pricing-margin-calculator',
    name: 'Pricing & Margin Calculator',
    shortDescription: 'Model costs, markup, and margin so pricing decisions stay profitable.',
    category: 'Revenue Planning',
    group: 'Revenue & Pricing',
    status: 'live',
    icon: 'PM',
  },
  {
    slug: 'customer-lifetime-value-calculator',
    name: 'Customer Lifetime Value (LTV) Calculator',
    shortDescription: 'Estimate revenue LTV, gross-profit LTV, and LTV:CAC ratio with retention improvement scenarios.',
    category: 'Revenue Planning',
    group: 'Revenue & Pricing',
    status: 'live',
    icon: 'LV',
  },
  {
    slug: 'break-even-revenue-calculator',
    name: 'Break-Even Revenue Calculator',
    shortDescription: 'Calculate monthly break-even revenue, units needed, and target-profit sales goals from your cost structure.',
    category: 'Finance',
    group: 'Revenue & Pricing',
    status: 'live',
    icon: 'BE',
  },
  {
    slug: 'lead-response-time-loss-calculator',
    name: 'Lead Response-Time Loss Calculator',
    shortDescription: 'Estimate revenue lost from slow lead follow-up and model faster-response outcomes.',
    category: 'Conversion',
    group: 'Marketing & Budgeting',
    status: 'live',
    icon: 'LR',
  },
  {
    slug: 'marketing-budget-planner',
    name: 'Marketing Budget Planner',
    shortDescription: 'Allocate budget by channel and forecast leads, customers, revenue, and projected net return.',
    category: 'Revenue Planning',
    group: 'Marketing & Budgeting',
    status: 'live',
    icon: 'MB',
  },
  {
    slug: 'no-show-cost-calculator',
    name: 'No-Show Cost Calculator',
    shortDescription: 'Quantify missed revenue from no-shows and simulate reminder-driven recovery.',
    category: 'Operations',
    group: 'Operations & Scheduling',
    status: 'live',
    icon: 'NS',
  },
  {
    slug: 'cash-flow-runway-calculator',
    name: 'Cash Flow Runway Calculator',
    shortDescription: 'Estimate runway months, break-even revenue, and projected cash balance from your current burn profile.',
    category: 'Finance',
    group: 'Operations & Scheduling',
    status: 'live',
    icon: 'CF',
  },
  {
    slug: 'intake-form-templates',
    name: 'Intake Form Templates',
    shortDescription: 'Generate practical intake form templates by industry and use case.',
    category: 'Lead Capture',
    group: 'Operations & Scheduling',
    status: 'live',
    icon: 'IF',
  },
  {
    slug: 'quote-estimate-builder',
    name: 'Quote / Estimate / Invoice Builder',
    shortDescription: 'Create quotes, estimates, and invoices with 16+ industry presets. Export as professional PDF.',
    category: 'Sales',
    group: 'Operations & Scheduling',
    status: 'live',
    icon: 'QE',
  },
  {
    slug: 'restaurant-food-cost-calculator',
    name: 'Restaurant Food Cost Calculator',
    shortDescription: 'Track ingredient cost percentages and recommended menu pricing targets.',
    category: 'Restaurants',
    group: 'Industry-Specific',
    status: 'live',
    icon: 'FC',
  },
  {
    slug: 'donor-retention-fundraising-calculator',
    name: 'Donor Retention + Fundraising Calculator',
    shortDescription: 'Model donor retention impact, campaign goals, and forecasted contribution growth.',
    category: 'Nonprofits',
    group: 'Industry-Specific',
    status: 'live',
    icon: 'DR',
  },
  {
    slug: 'daycare-capacity-ratio-tuition-planner',
    name: 'Daycare Capacity, Ratio & Tuition Planner',
    shortDescription: 'Plan enrollment capacity, staffing ratios, and tuition revenue scenarios.',
    category: 'Daycare',
    group: 'Industry-Specific',
    status: 'live',
    icon: 'DC',
  },
  {
    slug: 'real-estate-seller-net-proceeds-calculator',
    name: 'Real Estate Seller Net Proceeds Calculator',
    shortDescription: 'Estimate seller net proceeds after commission, closing costs, and mortgage payout.',
    category: 'Real Estate',
    group: 'Industry-Specific',
    status: 'live',
    icon: 'RE',
  },
];

export const freeToolBySlug: Record<string, FreeTool> = Object.fromEntries(
  freeTools.map((tool) => [tool.slug, tool])
);
