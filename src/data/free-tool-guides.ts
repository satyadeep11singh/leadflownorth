export interface ToolGuideStep {
  title: string;
  details: string;
}

export interface ToolGuide {
  slug: string;
  title: string;
  description: string;
  calculatorHref: string;
  readTime: string;
  beforeYouStart: string[];
  steps: ToolGuideStep[];
  interpret: string[];
  mistakes: string[];
}

export const freeToolGuides: Record<string, ToolGuide> = {
  'website-grader': {
    slug: 'website-grader',
    title: 'How to Use the Website Grader',
    description: 'Run a quick technical and trust-signal audit, then prioritize fixes that move rankings and conversion first.',
    calculatorHref: '/free-tools/website-grader',
    readTime: '4 min read',
    beforeYouStart: [
      'Use your final public homepage URL (with correct domain and protocol).',
      'Close any VPN/proxy if scans frequently timeout from your network.'
    ],
    steps: [
      { title: 'Enter the target URL', details: 'Paste your site URL and run the grade. The tool normalizes plain domains automatically.' },
      { title: 'Read the score blocks first', details: 'Start with overall, then performance, SEO, mobile, and trust to find the weakest area.' },
      { title: 'Review failed checks', details: 'Open each failed check and use the recommendation text as your fix queue.' },
      { title: 'Retest after changes', details: 'Re-run after each batch of fixes to confirm score movement before new work starts.' }
    ],
    interpret: [
      'Low performance usually hurts both ranking and conversion, so fix this early.',
      'If trust checks are weak, prioritize HTTPS, visible contact info, and clear policy pages.'
    ],
    mistakes: [
      'Running scans on temporary staging URLs and treating results as production truth.',
      'Trying to fix all items at once instead of high-impact failures first.'
    ]
  },
  'local-seo-gbp-audit': {
    slug: 'local-seo-gbp-audit',
    title: 'How to Use the Local SEO + GBP Audit',
    description: 'Score your local visibility fundamentals and build a practical improvement plan for map-pack growth.',
    calculatorHref: '/free-tools/local-seo-gbp-audit',
    readTime: '5 min read',
    beforeYouStart: [
      'Collect your current review count, recent review volume, and photo count.',
      'Know whether your NAP is consistent across major directories.'
    ],
    steps: [
      { title: 'Complete business profile inputs', details: 'Fill each field honestly, including review and profile freshness signals.' },
      { title: 'Run the audit', details: 'Generate the local SEO, reputation, conversion, and authority sub-scores.' },
      { title: 'Use the priority list', details: 'Start with items ranked highest in impact and urgency.' },
      { title: 'Turn checks into recurring tasks', details: 'Build weekly and monthly SOPs for posts, photos, review asks, and citation hygiene.' }
    ],
    interpret: [
      'If review count is zero, rating is automatically treated as 0 and scored accordingly.',
      'A balanced profile beats a profile that is strong in one category but weak in the rest.'
    ],
    mistakes: [
      'Inflating inputs to get a better score, which ruins planning quality.',
      'Ignoring velocity metrics like recent reviews and posting cadence.'
    ]
  },
  'google-review-link-qr-generator': {
    slug: 'google-review-link-qr-generator',
    title: 'How to Use the Google Review Link + QR Generator',
    description: 'Generate a direct review URL, optional UTM tags, and print-ready QR assets for front-desk and field use.',
    calculatorHref: '/free-tools/google-review-link-qr-generator',
    readTime: '4 min read',
    beforeYouStart: [
      'Have either a direct Google review URL or a valid Place ID.',
      'Decide where this QR will be used (counter card, receipt, vehicle, email signature).'
    ],
    steps: [
      { title: 'Enter business details', details: 'Add business name and either direct URL or Place ID.' },
      { title: 'Set tracking options', details: 'Keep UTM enabled if you want attribution in analytics.' },
      { title: 'Generate and validate', details: 'Open the final URL and scan the QR before printing.' },
      { title: 'Deploy in multiple touchpoints', details: 'Use both in-person and post-service channels for consistent review capture.' }
    ],
    interpret: [
      'Use unique UTM source values per touchpoint to compare card vs receipt vs SMS performance.',
      'Fallback search link is useful if direct link behavior changes by region/device.'
    ],
    mistakes: [
      'Printing without test-scanning on iOS and Android first.',
      'Using one generic UTM source for every channel.'
    ]
  },
  'lead-response-time-loss-calculator': {
    slug: 'lead-response-time-loss-calculator',
    title: 'How to Use the Lead Response-Time Loss Calculator',
    description: 'Estimate how response delay affects revenue and model the upside of tighter first-response SLAs.',
    calculatorHref: '/free-tools/lead-response-time-loss-calculator',
    readTime: '5 min read',
    beforeYouStart: [
      'Use real monthly lead count and average closed deal value.',
      'Estimate realistic contact rate and fast-response close rate from CRM history.'
    ],
    steps: [
      { title: 'Enter baseline metrics', details: 'Input lead volume, deal value, contact rate, and close rate under fast response.' },
      { title: 'Select current and target response windows', details: 'Set present SLA and target SLA to compare conversion loss and recovery.' },
      { title: 'Add implementation cost', details: 'Include staffing or system costs to get a true net monthly gain.' },
      { title: 'Use the SLA plan output', details: 'Translate recommended actions into routing, ownership, and escalation rules.' }
    ],
    interpret: [
      'Monthly lost revenue is relative to the 0-5 minute benchmark in the model.',
      'Positive net gain indicates the speed improvement is likely worth funding now.'
    ],
    mistakes: [
      'Using vanity lead counts that are not qualified inbound opportunities.',
      'Setting a target SLA that your team cannot consistently maintain.'
    ]
  },
  'no-show-cost-calculator': {
    slug: 'no-show-cost-calculator',
    title: 'How to Use the No-Show Cost Calculator',
    description: 'Quantify no-show leakage and test how reminders and confirmations change monthly recoverable revenue.',
    calculatorHref: '/free-tools/no-show-cost-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Pull booked appointments and no-show rates from the same recent period.',
      'Estimate reminder system cost realistically (software + team time).'
    ],
    steps: [
      { title: 'Input current operations', details: 'Add booked appointments, average value, and current no-show rate.' },
      { title: 'Set improvement target', details: 'Choose a target no-show rate based on your service model.' },
      { title: 'Add cost assumptions', details: 'Include variable cost saved and monthly tool/process cost.' },
      { title: 'Review recoverable and net gain', details: 'Use recoverable revenue and net monthly gain to approve the workflow investment.' }
    ],
    interpret: [
      'Recoverable monthly revenue is the upside from improved attendance before system cost.',
      'Net monthly gain is the financial decision metric for rollout.'
    ],
    mistakes: [
      'Ignoring saved variable costs and judging only gross lost revenue.',
      'Assuming reminder costs are zero when team follow-up effort is significant.'
    ]
  },
  'intake-form-templates': {
    slug: 'intake-form-templates',
    title: 'How to Use Intake Form Templates',
    description: 'Generate practical intake templates by industry and use case, then deploy them inside your existing form stack.',
    calculatorHref: '/free-tools/intake-form-templates',
    readTime: '3 min read',
    beforeYouStart: [
      'Pick one high-volume workflow first (new lead, consultation, quote, or onboarding).',
      'Decide where submissions should route in your CRM or inbox.'
    ],
    steps: [
      { title: 'Choose industry and form type', details: 'Select the closest profile and use case to generate field structure.' },
      { title: 'Set objective and notifications', details: 'Write a clear objective and optional notification target email.' },
      { title: 'Generate and copy template', details: 'Copy or download the output and paste into your form builder.' },
      { title: 'Implement workflow notes', details: 'Configure auto-response, routing, and SLA follow-up from the provided notes.' }
    ],
    interpret: [
      'The generated list is a starter blueprint; remove non-essential required fields to protect conversion.',
      'Use hidden source fields to preserve attribution in CRM reporting.'
    ],
    mistakes: [
      'Making too many fields mandatory on first contact.',
      'Launching forms without ownership for first response.'
    ]
  },
  'quote-estimate-builder': {
    slug: 'quote-estimate-builder',
    title: 'How to Use the Quote / Estimate Builder',
    description: 'Build client-ready estimates quickly using presets, custom line items, and invoice mode export options.',
    calculatorHref: '/free-tools/quote-estimate-builder',
    readTime: '3 min read',
    beforeYouStart: [
      'Know your tax rate and standard service line items.',
      'Prepare naming convention for quote numbers.'
    ],
    steps: [
      { title: 'Load a preset or start blank', details: 'Use a preset to speed setup, then edit line items to match the real scope.' },
      { title: 'Complete business and client fields', details: 'Fill sender and recipient details for a client-ready document.' },
      { title: 'Adjust quantity, rate, and tax', details: 'Validate every line item and confirm totals before sharing.' },
      { title: 'Export or print', details: 'Send as text/PDF output and save a copy to your CRM record.' }
    ],
    interpret: [
      'Quote speed matters: send same-day while buying intent is highest.',
      'Reuse winning quote structures by service type to reduce prep time.'
    ],
    mistakes: [
      'Using generic line descriptions that create approval friction.',
      'Forgetting to standardize tax settings across quotes.'
    ]
  },
  'pricing-margin-calculator': {
    slug: 'pricing-margin-calculator',
    title: 'How to Use the Pricing & Margin Calculator',
    description: 'Model break-even, target-margin, and target-markup pricing to protect profitability as costs change.',
    calculatorHref: '/free-tools/pricing-margin-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Use current direct cost and realistic monthly overhead values.',
      'Choose one target margin goal before running scenarios.'
    ],
    steps: [
      { title: 'Enter current unit economics', details: 'Input direct cost, overhead, units sold, and current selling price.' },
      { title: 'Set margin and markup targets', details: 'Define both targets to compare pricing outcomes.' },
      { title: 'Review break-even and target prices', details: 'Check whether current pricing is below break-even or below margin goals.' },
      { title: 'Use monthly profit snapshot', details: 'Evaluate profit lift before applying repricing live.' }
    ],
    interpret: [
      'Target-margin price is usually the stronger strategic anchor than markup alone.',
      'If current price is below break-even, repricing is an urgent decision, not optional.'
    ],
    mistakes: [
      'Using outdated overhead assumptions.',
      'Raising prices without testing close-rate impact by segment.'
    ]
  },
  'restaurant-food-cost-calculator': {
    slug: 'restaurant-food-cost-calculator',
    title: 'How to Use the Restaurant Food Cost Calculator',
    description: 'Calculate plate cost, food-cost percent, and recommended menu price based on your target food-cost range.',
    calculatorHref: '/free-tools/restaurant-food-cost-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Collect current ingredient purchase costs and actual recipe quantities.',
      'Set your target food-cost percentage by menu category.'
    ],
    steps: [
      { title: 'Enter dish and pricing fields', details: 'Add current menu price and monthly unit volume for context.' },
      { title: 'Build ingredient rows', details: 'Input quantity and unit cost for each ingredient in the dish.' },
      { title: 'Run calculation', details: 'Generate plate cost, current food-cost percent, and recommended menu price.' },
      { title: 'Act on the insight block', details: 'Use the notes to decide on repricing, recipe engineering, or supplier renegotiation.' }
    ],
    interpret: [
      'If current menu price is 0, current food-cost percent shows as N/A by design.',
      'Recommended price is anchored to your target food-cost percentage, not competitor pricing.'
    ],
    mistakes: [
      'Ignoring yield/waste and using raw purchase volume as usable quantity.',
      'Updating menu price without rechecking contribution margin after labor changes.'
    ]
  },
  'donor-retention-fundraising-calculator': {
    slug: 'donor-retention-fundraising-calculator',
    title: 'How to Use the Donor Retention + Fundraising Calculator',
    description: 'Model how improved retention changes annual contribution totals and whether retention spend is net-positive.',
    calculatorHref: '/free-tools/donor-retention-fundraising-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Use last-year donor counts and current retained donor totals from your CRM.',
      'Set a realistic target retention rate for the next cycle.'
    ],
    steps: [
      { title: 'Enter donor baseline values', details: 'Provide last-year donors, retained donors, new donors, and average gift.' },
      { title: 'Set target retention and cost', details: 'Add your target retention rate and expected campaign spend.' },
      { title: 'Review revenue lift', details: 'Compare current annual revenue against target-retention scenario revenue.' },
      { title: 'Operationalize guidance', details: 'Apply output recommendations to thank-you, second-gift, and reactivation workflows.' }
    ],
    interpret: [
      'Net lift accounts for campaign cost; this is the budget decision metric.',
      'Extra retained donors is the operational KPI to assign by team or segment.'
    ],
    mistakes: [
      'Blending one-time campaign donors with core recurring donors without segmentation.',
      'Using only gross lift and ignoring campaign cost.'
    ]
  },
  'daycare-capacity-ratio-tuition-planner': {
    slug: 'daycare-capacity-ratio-tuition-planner',
    title: 'How to Use the Daycare Capacity, Ratio & Tuition Planner',
    description: 'Model enrollment, staffing requirements, and monthly surplus across infant, toddler, and preschool programs.',
    calculatorHref: '/free-tools/daycare-capacity-ratio-tuition-planner',
    readTime: '5 min read',
    beforeYouStart: [
      'Confirm licensed spot counts and required ratios by age program.',
      'Gather realistic payroll and non-payroll monthly operating costs.'
    ],
    steps: [
      { title: 'Input program rows', details: 'Set spots, occupancy, tuition, and ratio per age group.' },
      { title: 'Add staffing and operating costs', details: 'Enter cost per staff member and monthly fixed costs.' },
      { title: 'Calculate enrollment and staffing load', details: 'Review enrolled counts, required staff, and program revenue totals.' },
      { title: 'Use surplus output for planning', details: 'Test occupancy and tuition scenarios before committing hiring or spend.' }
    ],
    interpret: [
      'Required staff is rounded up to ensure ratio compliance in each program.',
      'Monthly surplus is pre-tax and pre-debt; use it as operational planning guidance.'
    ],
    mistakes: [
      'Assuming full occupancy across every program year-round.',
      'Ignoring mixed staffing cost levels when using one average payroll input.'
    ]
  },
  'real-estate-seller-net-proceeds-calculator': {
    slug: 'real-estate-seller-net-proceeds-calculator',
    title: 'How to Use the Real Estate Seller Net Proceeds Calculator',
    description: 'Estimate seller net after commissions, payout, closing costs, and other deductions before listing strategy decisions.',
    calculatorHref: '/free-tools/real-estate-seller-net-proceeds-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Use an updated mortgage payout estimate and likely commission structure.',
      'Collect planned repair/staging/legal numbers before running scenarios.'
    ],
    steps: [
      { title: 'Enter sale and mortgage values', details: 'Add expected sale price and mortgage payoff as the two primary anchors.' },
      { title: 'Add rate-based selling costs', details: 'Input commission and closing-cost percentages.' },
      { title: 'Include fixed deductions', details: 'Add legal fees, repairs, penalties, and other line-item costs.' },
      { title: 'Review net and break-even sale price', details: 'Use net proceeds and break-even values to guide listing price strategy.' }
    ],
    interpret: [
      'Break-even sale price indicates where proceeds are roughly zero after deductions.',
      'Negative net means seller may need additional cash at close.'
    ],
    mistakes: [
      'Using outdated mortgage discharge estimates.',
      'Forgetting transaction-specific penalties and preparation costs.'
    ]
  },
  'utm-campaign-url-builder': {
    slug: 'utm-campaign-url-builder',
    title: 'How to Use the UTM Campaign URL Builder',
    description: 'Create consistent, trackable campaign links for paid, email, SMS, and offline channels with clean naming.',
    calculatorHref: '/free-tools/utm-campaign-url-builder',
    readTime: '4 min read',
    beforeYouStart: [
      'Set your team naming standard for source, medium, and campaign first.',
      'Know whether existing query params must be preserved.'
    ],
    steps: [
      { title: 'Enter landing URL and core UTM fields', details: 'Source, medium, and campaign are required for clean reporting.' },
      { title: 'Add optional fields', details: 'Use term/content for keyword or creative-level breakdowns.' },
      { title: 'Add any custom params', details: 'Append business-specific keys where needed for routing or attribution.' },
      { title: 'Copy and validate', details: 'Open the generated URL and confirm parameter breakdown before launch.' }
    ],
    interpret: [
      'Values are normalized for consistency, which improves analytics grouping quality.',
      'Preserving existing params is useful for pages already using routing/query controls.'
    ],
    mistakes: [
      'Changing naming conventions each month, which fragments reporting.',
      'Using duplicate campaign names for unrelated initiatives.'
    ]
  },
  'customer-lifetime-value-calculator': {
    slug: 'customer-lifetime-value-calculator',
    title: 'How to Use the Customer LTV Calculator',
    description: 'Estimate revenue and gross-profit LTV, evaluate LTV:CAC ratio, and quantify retention improvement impact.',
    calculatorHref: '/free-tools/customer-lifetime-value-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Use your actual purchase frequency and gross margin, not revenue-only assumptions.',
      'Choose your target LTV:CAC benchmark before review.'
    ],
    steps: [
      { title: 'Enter baseline LTV inputs', details: 'Add average order value, purchase frequency, lifespan, and gross margin.' },
      { title: 'Include CAC and target ratio', details: 'Set CAC and desired efficiency threshold (for example 3:1).' },
      { title: 'Model retention lift', details: 'Apply retention improvement percent to see customer value expansion.' },
      { title: 'Review payback outputs', details: 'Use payback purchases/months to align finance and acquisition pacing.' }
    ],
    interpret: [
      'Gross-profit LTV is the better decision metric than revenue LTV for CAC planning.',
      'If CAC is zero, ratio is shown as N/A until real acquisition cost is provided.'
    ],
    mistakes: [
      'Ignoring gross margin and optimizing on revenue alone.',
      'Using an unrealistic retention lift without operational plan.'
    ]
  },
  'marketing-budget-planner': {
    slug: 'marketing-budget-planner',
    title: 'How to Use the Marketing Budget Planner',
    description: 'Allocate monthly spend by channel and forecast leads, customers, revenue, and net outcome from your assumptions.',
    calculatorHref: '/free-tools/marketing-budget-planner',
    readTime: '5 min read',
    beforeYouStart: [
      'Prepare realistic CPL assumptions for each channel.',
      'Use recent close-rate and average deal value from your CRM.'
    ],
    steps: [
      { title: 'Set total budget and conversion economics', details: 'Enter total spend, fixed costs, close rate, and average deal value.' },
      { title: 'Configure channel allocations', details: 'Set allocation percentages and CPL by channel.' },
      { title: 'Generate projection', details: 'Review projected leads, customers, revenue, and net return.' },
      { title: 'Use channel table for reallocation', details: 'Shift budget from weaker channels to stronger modeled contributors and re-run.' }
    ],
    interpret: [
      'If allocations do not total 100%, shares are auto-normalized.',
      'ROAS and projected net are scenario outputs and should be validated against actual lead quality.'
    ],
    mistakes: [
      'Using blended CPL from old campaigns that no longer match current market costs.',
      'Ignoring fixed costs when judging true net outcome.'
    ]
  },
  'cash-flow-runway-calculator': {
    slug: 'cash-flow-runway-calculator',
    title: 'How to Use the Cash Flow Runway Calculator',
    description: 'Estimate runway months, break-even timeline, and projected monthly cash balances from your current burn profile.',
    calculatorHref: '/free-tools/cash-flow-runway-calculator',
    readTime: '5 min read',
    beforeYouStart: [
      'Use your latest cash reserve and monthly revenue/cost data.',
      'Estimate growth conservatively unless you have signed pipeline coverage.'
    ],
    steps: [
      { title: 'Enter reserve and cost profile', details: 'Add current cash, monthly revenue, gross margin, fixed costs, and debt service.' },
      { title: 'Set growth and safety assumptions', details: 'Input expected monthly growth and desired safety buffer.' },
      { title: 'Run projection', details: 'Review runway estimate and monthly net cash flow trend.' },
      { title: 'Use the projection table', details: 'Watch when cash approaches buffer and where intervention is needed.' }
    ],
    interpret: [
      'Runway is scenario-based and assumes your entered growth/cost pattern continues.',
      'A positive monthly net trend does not remove short-term cash risk if reserve is already low.'
    ],
    mistakes: [
      'Ignoring debt obligations or annualized costs that hit monthly cash reality.',
      'Using optimistic growth assumptions without lead and conversion support.'
    ]
  },
  'break-even-revenue-calculator': {
    slug: 'break-even-revenue-calculator',
    title: 'How to Use the Break-Even Revenue Calculator',
    description: 'Calculate break-even units/revenue and revenue needed for target monthly profit based on your unit economics.',
    calculatorHref: '/free-tools/break-even-revenue-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Use current fixed-cost totals and realistic variable cost per sale.',
      'Set a target monthly profit that matches your planning horizon.'
    ],
    steps: [
      { title: 'Enter pricing and cost inputs', details: 'Add fixed costs, price per sale, variable cost, and optional target profit.' },
      { title: 'Add current sales volume', details: 'Include current unit volume to compare against break-even requirement.' },
      { title: 'Calculate break-even outputs', details: 'Review break-even units, break-even revenue, and target-profit revenue.' },
      { title: 'Use sensitivity scenarios', details: 'Compare price/cost/fixed-cost scenarios to choose the fastest path to safety.' }
    ],
    interpret: [
      'Contribution margin per sale is the core driver of break-even speed.',
      'Margin of safety indicates how far current revenue sits above or below break-even.'
    ],
    mistakes: [
      'Treating variable costs as fixed and distorting contribution margin.',
      'Planning around one scenario without testing price and cost sensitivity.'
    ]
  },
  'payroll-deductions-calculator': {
    slug: 'payroll-deductions-calculator',
    title: 'How to Use the Canadian Payroll Deductions Calculator',
    description: 'Calculate employee net pay, CPP/EI deductions, and income tax for any Canadian province — including CPP2 and Quebec QPIP.',
    calculatorHref: '/free-tools/payroll-deductions-calculator',
    readTime: '5 min read',
    beforeYouStart: [
      'Have the employee\'s gross pay amount for the current period ready.',
      'Know your pay frequency (bi-weekly, weekly, semi-monthly, or monthly).',
      'If mid-year, gather year-to-date CPP and EI already deducted so maximums are applied correctly.',
      'Quebec employees: results use CRA-equivalent QPP/QPIP rates — verify remittances with Revenu Québec WebRAS.'
    ],
    steps: [
      { title: 'Select province and pay frequency', details: 'Choose the province where the employee works and how often you pay. This determines which provincial tax rates and the per-period CPP exemption apply.' },
      { title: 'Enter gross pay', details: 'Enter the employee\'s total earnings for this pay period before any deductions.' },
      { title: 'Enter year-to-date CPP and EI already deducted', details: 'If this is not the first pay period of the year, enter what has already been deducted. This prevents over-deducting once the annual maximums are reached.' },
      { title: 'Add any extra withholding', details: 'If the employee has requested additional tax withholding on their TD1, enter that amount here.' },
      { title: 'Review results', details: 'Check the employee deductions panel, employer cost panel, and the annualized table to plan remittances.' }
    ],
    interpret: [
      'Net pay is what the employee takes home. Total deductions include CPP/EI and both federal and provincial income tax.',
      'The employer cost panel shows your total payroll cost — gross pay plus the employer\'s matching CPP and EI shares.',
      'CPP2 applies to earnings between $71,300 and $81,200 (2025 YMPE/YAMPE). Most employees below that threshold will show $0 for CPP2.',
      'Verify all remittances with the CRA Payroll Deductions Online Calculator (PDOC) before filing.'
    ],
    mistakes: [
      'Forgetting to enter year-to-date CPP/EI, which causes the calculator to over-deduct near year-end.',
      'Using provincial employee rates for the employer\'s EI share — the employer pays 1.4× the employee rate.',
      'Assuming Quebec uses the same CPP rates — Quebec employees contribute to QPP (slightly higher rate) and QPIP instead.'
    ]
  },
  'employer-true-cost-calculator': {
    slug: 'employer-true-cost-calculator',
    title: 'How to Use the Employer True Cost Calculator',
    description: 'Understand the real annual cost of a hire in Canada — beyond just salary — including CPP/EI employer share, provincial Employer Health Tax, vacation pay, and benefits.',
    calculatorHref: '/free-tools/employer-true-cost-calculator',
    readTime: '4 min read',
    beforeYouStart: [
      'Know the annual gross salary you plan to offer.',
      'Know your total payroll across all employees — this affects EHT thresholds in Ontario, BC, Manitoba, and Quebec.',
      'Decide whether you will offer a benefits plan and at what level.'
    ],
    steps: [
      { title: 'Select province', details: 'Choose the province where the employee will work. Employer Health Tax rules differ significantly — Ontario exempts payrolls under $1M, BC under $500K, and Manitoba under $2.5M.' },
      { title: 'Enter salary', details: 'Enter the annual gross salary you plan to pay.' },
      { title: 'Set vacation pay percentage', details: 'Most provinces require at least 4% (2 weeks). Select a higher rate if you offer more generous vacation.' },
      { title: 'Select benefits loading', details: 'Choose 0% if you offer no benefits, or use 5–20% depending on your benefits package quality.' },
      { title: 'Enter total payroll', details: 'Enter your estimated total annual payroll for all staff including this new hire. This determines whether EHT applies to your payroll in applicable provinces.' }
    ],
    interpret: [
      'The "true employer cost" is the all-in annual cost of this employee. It is typically 15–30% above the quoted salary.',
      'The cost multiplier (e.g., 1.22×) means for every $1 in salary, you pay that many dollars in total.',
      'Employer Health Tax is the most commonly forgotten cost. Ontario\'s EHT alone adds 1.95% once your payroll exceeds $1M.',
      'The per-hour cost view is useful for pricing services: if a technician costs $42/hr to employ, your billable rate must cover that plus overhead and margin.'
    ],
    mistakes: [
      'Budgeting only the salary, then being surprised by employer CPP/EI, EHT, and vacation accruals at year-end.',
      'Using an employee\'s province of residence instead of the province where they perform work for EHT purposes.',
      'Treating vacation pay as a discretionary bonus rather than a mandatory accrual from day one.'
    ]
  },
  'hst-quick-method-calculator': {
    slug: 'hst-quick-method-calculator',
    title: 'How to Use the HST Quick Method Calculator',
    description: 'Calculate your HST/GST remittance under the CRA Quick Method, compare it to the regular method, and see your quarterly filing deadline.',
    calculatorHref: '/free-tools/hst-quick-method-calculator',
    readTime: '5 min read',
    beforeYouStart: [
      'Confirm you are registered for the Quick Method with CRA (file election form GST74).',
      'Have your total revenue collected this period including HST/GST charged to customers.',
      'Know whether this is your first fiscal year on Quick Method — a 1% bonus credit applies to the first $30,000.',
      'Quebec businesses must also calculate QST separately using Revenu Québec\'s Quick Method rate (6.6% on total revenues incl. QST).'
    ],
    steps: [
      { title: 'Select your province and business type', details: 'Quick Method remittance rates vary by province (HST vs. GST provinces) and business type (service vs. goods-for-resale). Service businesses in Ontario remit 8.8% of total revenue including HST collected.' },
      { title: 'Select filing period', details: 'Choose quarterly, monthly, or annual — this affects the deadline displayed.' },
      { title: 'Enter total revenue collected', details: 'Enter the full amount customers paid you including the HST/GST component. Do not strip out the tax first.' },
      { title: 'Enter purchases and capital items', details: 'Regular purchases do not generate ITCs under Quick Method. However, capital purchases over $10,000 each still qualify for a full ITC — enter them separately.' },
      { title: 'Review remittance and comparison', details: 'Check the net remittance vs. what you collected, and compare against the regular method to confirm Quick Method still saves you money.' }
    ],
    interpret: [
      '"You keep" is the portion of HST collected that you retain as a benefit of using Quick Method.',
      'If the regular method comparison shows you would save more with regular method, review your ITC ratio — businesses with high input costs may outgrow Quick Method eligibility or benefit.',
      'The first-year 1% bonus credit on the first $30,000 only applies in your first fiscal year. After that, the base rate applies without the bonus.'
    ],
    mistakes: [
      'Entering net revenue (before tax) instead of gross revenue including HST. The Quick Method rate is applied to total revenue including the tax you collected.',
      'Claiming ITCs on regular purchases under Quick Method — you cannot do this. Only capital purchases over $10,000 qualify.',
      'Missing the election deadline — you must elect Quick Method at the start of a fiscal year.'
    ]
  },
  'gst-hst-calculator': {
    slug: 'gst-hst-calculator',
    title: 'How to Use the GST/HST Calculator',
    description: 'Calculate GST, HST, PST, and QST for any Canadian province in forward or reverse mode, with support for multiple line items.',
    calculatorHref: '/free-tools/gst-hst-calculator',
    readTime: '3 min read',
    beforeYouStart: [
      'Identify the customer\'s province — for goods shipped inter-provincially, you generally charge the destination province\'s rate.',
      'Know whether you are starting with the pre-tax amount (forward) or a total already-paid amount (reverse).',
      'For Quebec, note that GST and QST are calculated separately and are not compounded on each other.'
    ],
    steps: [
      { title: 'Select the customer\'s province', details: 'Tax is charged at the rate of the province where the supply is made or delivered.' },
      { title: 'Choose forward or reverse mode', details: 'Forward: you have the pre-tax price and need to add tax. Reverse: you have the total amount paid and need to back out what the pre-tax price was.' },
      { title: 'Add line items', details: 'Click "Add Line" for each service or product. Give each a description and amount. All lines use the same province rate.' },
      { title: 'Toggle PST/QST if needed', details: 'Uncheck the provincial tax toggle if your supply is exempt from PST/QST (e.g., many B2B services in some provinces).' },
      { title: 'Review breakdown', details: 'The tax breakdown panel shows each tax component separately. The line item table shows per-line totals.' }
    ],
    interpret: [
      'For HST provinces (Ontario, NS, NB, NL, PE), there is only one combined tax — GST and provincial are not shown separately.',
      'For PST provinces (BC, MB, SK) and Quebec (QST), the federal and provincial taxes are separate lines.',
      'The effective tax rate shown will match your province\'s posted rate when all taxes are applied.'
    ],
    mistakes: [
      'Using your own province\'s rate instead of the customer\'s province for shipped goods.',
      'Compounding QST on top of GST-inclusive price — QST applies to the pre-GST amount, not the GST-inclusive total.',
      'Forgetting that some supplies (basic groceries, most healthcare, financial services) are zero-rated or exempt and should not have tax applied.'
    ]
  },
  'incorporate-vs-sole-proprietor-calculator': {
    slug: 'incorporate-vs-sole-proprietor-calculator',
    title: 'How to Use the Incorporate vs. Sole Proprietor Calculator',
    description: 'Compare your total tax bill under sole proprietorship vs. a CCPC corporation by province and find the income level where incorporation starts saving money.',
    calculatorHref: '/free-tools/incorporate-vs-sole-proprietor-calculator',
    readTime: '6 min read',
    beforeYouStart: [
      'Have a realistic estimate of your annual business net income (revenue minus business expenses, before paying yourself).',
      'Know approximately how much you need to withdraw for personal living expenses.',
      'Understand this is a planning estimate — your CPA will have the full picture including your specific credits and prior-year losses.'
    ],
    steps: [
      { title: 'Select your province', details: 'Both the provincial income tax rate and the provincial corporate tax rate (small business deduction) vary by province. Alberta and Quebec have notably different combined rates.' },
      { title: 'Enter annual business net income', details: 'Enter revenue minus all business expenses — this is the profit before paying yourself. Do not include your salary here if you already subtracted it from revenue.' },
      { title: 'Enter personal living expenses', details: 'Enter how much you need to withdraw annually. The remainder can stay inside the corporation and benefit from the lower corporate tax rate on deferral.' },
      { title: 'Select how you would pay yourself if incorporated', details: 'Dividends-only avoids CPP but reduces RRSP room. Salary-only provides CPP coverage and RRSP room. Mixed is the common approach — salary to maximize CPP, rest as dividends.' },
      { title: 'Read the verdict and breakdown', details: 'The tool shows total tax under each structure, annual savings, and the break-even income point where incorporation overhead (~$4,000/yr) is covered by tax savings.' }
    ],
    interpret: [
      'The "savings" figure is the annual reduction in combined tax burden — corporation tax plus personal tax on what you withdraw.',
      'The break-even income is the revenue level where tax savings equal typical annual incorporation costs (~$4,000 for accounting and corporate filings). Below this, simplicity of sole proprietorship often wins.',
      'Keeping money inside the corporation defers tax — you pay corporate rate now (~9–15% SBD rate) and personal tax later when you withdraw. This deferral advantage grows as retained earnings grow.',
      'RRSP room is only created by salary income. If you pay only dividends, you lose RRSP contribution room for that year.'
    ],
    mistakes: [
      'Comparing only corporate tax to personal tax — you must combine both corporate tax and personal tax on withdrawals to get a true comparison.',
      'Ignoring the ongoing cost of incorporation: annual corporate filings, separate corporate tax returns, accountant fees, and minute book maintenance add $2,000–$5,000/yr.',
      'Incorporating too early — for most sole proprietors under $80,000–$100,000 net income, the complexity outweighs the tax savings.',
      'Assuming you can freely split income with family under TOSI rules — the Tax on Split Income rules significantly restrict dividend splitting to family members without active involvement.'
    ]
  }
};

export const freeToolGuideSlugs = Object.keys(freeToolGuides);
