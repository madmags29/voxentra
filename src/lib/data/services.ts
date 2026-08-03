export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  badge: string;
  qualityGuarantee: string;
  avgConversionRate: string;
  imageUrl?: string;
  features: string[];
  benefits: { title: string; description: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  leadSpecs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "live-transfers",
    slug: "live-transfers",
    title: "Live Call Transfers",
    shortDescription: "Pre-screened, high-intent consumer prospects transferred directly to your sales team in real-time.",
    heroHeadline: "Exclusive 100% TCPA-Compliant Live Call Transfers Across USA",
    heroSubheadline: "Connect instantly with active, qualified buyers while they are on the line. Zero dial time, zero drop-offs, maximum sales close rates.",
    iconName: "PhoneCall",
    badge: "Highest Converting Lead Type",
    qualityGuarantee: "100% Verified Warm Buffer & 120s Guarantee",
    avgConversionRate: "28% - 42% Sales Conversion",
    imageUrl: "/images/services/live-transfers.png",
    features: [
      "100% Exclusive & Real-Time Call Routing",
      "Comprehensive 6-Point Qualification Screen",
      "TCPA Consent & 1-to-1 Certificate Logged",
      "Custom Buffer Time Options (60s - 120s)",
      "Instant Whisper Info Before Transfer Connect",
      "Full API & CRM Integration with Live Call Logs"
    ],
    benefits: [
      {
        title: "Zero Prospecting Overhead",
        description: "Your agents spend 100% of their day speaking directly with buyers who meet your exact filters, avoiding gatekeepers and voicemail."
      },
      {
        title: "Hyper-Screened Intent",
        description: "Every call undergoes live US agent screening to confirm identity, intent, eligibility, and desire for an immediate consultation."
      },
      {
        title: "Scalable Daily Volume",
        description: "From 20 transfers a day to 2,000+ per day, our national telemarketing network scales with your sales capacity seamlessly."
      }
    ],
    processSteps: [
      { step: "01", title: "Target Criteria Setup", desc: "We map your exact filters: age, location, income, credit, policy state." },
      { step: "02", title: "Omnichannel Prospect Screening", desc: "Our telemarketing agents engage in-bound and outbound inquiries." },
      { step: "03", title: "Verification & Compliance Check", desc: "TCPA certificates and custom qualification criteria are verified." },
      { step: "04", title: "Live Warm Transfer", desc: "Prospect is connected directly to your licensed agent with a live whisper brief." }
    ],
    leadSpecs: [
      { label: "Delivery Speed", value: "Real-time (< 3 seconds)" },
      { label: "Exclusive", value: "100% Exclusive to 1 Buyer" },
      { label: "TCPA Compliance", value: "100% 1-to-1 Explicit Consent" },
      { label: "Min Order", value: "50 Transfers / Campaign" }
    ],
    faq: [
      {
        q: "What is a live call transfer?",
        a: "A live transfer occurs when our call center pre-screens an interested consumer, confirms their eligibility, and warm-connects the consumer directly to your sales representative on the phone in real time."
      },
      {
        q: "How do you guarantee TCPA compliance?",
        a: "Every lead captured includes a time-stamped 1-to-1 explicit consent certificate verifying clear, affirmative TCPA consent prior to any call interaction."
      }
    ]
  },
  {
    id: "inbound-calls",
    slug: "inbound-calls",
    title: "Inbound Call Solutions",
    shortDescription: "High-volume inbound phone leads driven by targeted digital ads, TV, search, and direct response media.",
    heroHeadline: "Pay-Per-Call Inbound Marketing That Fills Your Phone Lines",
    heroSubheadline: "High-intent consumers actively calling your phone numbers looking for immediate solutions in health, debt, home services, and insurance.",
    iconName: "PhoneIncoming",
    badge: "Direct Response Inbound",
    qualityGuarantee: "Real-Time IVR Filtering & Custom Call Caps",
    avgConversionRate: "25% - 38% Close Rate",
    imageUrl: "/images/services/inbound-calls.png",
    features: [
      "Targeted Search & Social Media Inbound Traffic",
      "Dynamic Toll-Free & Local Phone Number Provisioning",
      "Interactive Voice Response (IVR) Custom Pre-Qualifiers",
      "Geo-Targeting by State, City, or Zip Code Radius",
      "Concurrency Controls to Match Call Center Hours",
      "Detailed Call Analytics & Duration Reports"
    ],
    benefits: [
      {
        title: "Consumer-Initiated Calls",
        description: "Inbound callers are actively searching for solutions right now, representing the highest motivation level in B2B lead generation."
      },
      {
        title: "Flexible Campaign Scheduling",
        description: "Set custom call hours, daily caps, and agent availability so calls only arrive when your team is ready to close."
      },
      {
        title: "Transparent Cost Per Call",
        description: "Clear fixed pricing per qualified inbound call with guaranteed minimum duration buffers."
      }
    ],
    processSteps: [
      { step: "01", title: "Media Campaign Launch", desc: "High-converting Google, Bing, and Social Media ads launch targeting high-intent prospects." },
      { step: "02", title: "Direct Consumer Dial", desc: "Motivated callers dial dedicated trackable toll-free numbers." },
      { step: "03", title: "Smart IVR Routing", desc: "Custom IVR prompts filter by location and qualification." },
      { step: "04", title: "Direct Agent Call", desc: "Filtered inbound calls land directly at your call center." }
    ],
    leadSpecs: [
      { label: "Traffic Source", value: "Search, Social, Display, TV" },
      { label: "Exclusivity", value: "100% Exclusive" },
      { label: "Routing Engine", value: "Twilio & Ringba Integration" },
      { label: "Min Order", value: "100 Calls" }
    ],
    faq: [
      {
        q: "What is the difference between Live Transfers and Inbound Calls?",
        a: "Inbound calls are initiated directly by consumers clicking an ad and dialing a phone number. Live transfers are calls initiated or qualified by our telemarketing agents and then warm-transferred to your team."
      }
    ]
  },
  {
    id: "telemarketing",
    slug: "telemarketing",
    title: "Outbound Telemarketing",
    shortDescription: "Dedicated US-managed telemarketing campaigns delivering qualified appointments, surveys, and live leads.",
    heroHeadline: "Enterprise Outbound Telemarketing & Sales Prospecting",
    heroSubheadline: "Supercharge your pipeline with professional telemarketing specialists trained specifically in your industry vertical.",
    iconName: "Headphones",
    badge: "Dedicated Call Center",
    qualityGuarantee: "100% Quality Audited & Recorded Calls",
    avgConversionRate: "18% - 30% Qualified Appointment Rate",
    imageUrl: "/images/services/telemarketing.png",
    features: [
      "Native US & Bilingual Telemarketing Agents",
      "Custom Script Development & Objection Handling",
      "DNC (Do Not Call) & State TCPA Compliance Audit",
      "Daily Lead Injection & CRM Synchronization",
      "Full Call Recordings & Quality Assurance Scorecards",
      "Scalable Seat Capacities (5 to 150+ Agents)"
    ],
    benefits: [
      {
        title: "Dedicated Brand Reps",
        description: "Our agents act as a seamless extension of your company, adhering strictly to your brand tone, guidelines, and compliance rules."
      },
      {
        title: "Turnkey Campaign Management",
        description: "We handle recruiting, training, script optimization, compliance monitoring, and daily performance reporting."
      }
    ],
    processSteps: [
      { step: "01", title: "Script & Persona Design", desc: "We co-create objection scripts and target buyer personas." },
      { step: "02", title: "Agent Onboarding", desc: "Dedicated agents complete rigorous product training." },
      { step: "03", title: "Outbound Dialing", desc: "State-of-the-art predictive dialer engages qualified lists." },
      { step: "04", title: "Lead Hand-off", desc: "Qualified appointments and warm leads are synced directly into your CRM." }
    ],
    leadSpecs: [
      { label: "Agent Type", value: "Dedicated / Shared US B2B Specialists" },
      { label: "Quality Audit", value: "100% Monitored & Scored" },
      { label: "Compliance", value: "Federal DNC & State Compliant" },
      { label: "CRM Sync", value: "HubSpot, Salesforce, Zoho" }
    ],
    faq: [
      {
        q: "Can Voxentra integrate with our internal CRM?",
        a: "Yes! We support native integrations with Salesforce, HubSpot, Close, PipeDrive, RingCentral, and custom webhooks."
      }
    ]
  },
  {
    id: "affiliate-marketing",
    slug: "affiliate-marketing",
    title: "Affiliate Lead Network",
    shortDescription: "Access high-volume exclusive lead feeds generated across our premium network of audited digital publishers.",
    heroHeadline: "Nationwide Performance Affiliate Lead Generation Network",
    heroSubheadline: "Scale your lead volume instantly through verified publisher networks delivering compliant digital leads and calls.",
    iconName: "Share2",
    badge: "High Volume Scale",
    qualityGuarantee: "Strict Publisher Vetting & Real-Time Scrubbing",
    avgConversionRate: "15% - 25% Conversion",
    imageUrl: "/images/services/affiliate-network.png",
    features: [
      "Proprietary Publisher Vetting & Compliance Monitoring",
      "Real-Time Duplicate Checking & Fraud Detection",
      "Ping-Post & Exclusive Direct Post Delivery",
      "Custom Campaign API Integrations",
      "TCPA 1-to-1 Verification mandatory on 100% leads",
      "Transparent Volume Tiering & Billing"
    ],
    benefits: [
      {
        title: "Infinite Scale",
        description: "Leverage hundreds of vetted media channels to capture demand nationwide without managing multiple vendor contracts."
      },
      {
        title: "Clean Data Standards",
        description: "Our API automatically scrubs syntax errors, invalid phone numbers, spam traps, and duplicates before delivery."
      }
    ],
    processSteps: [
      { step: "01", title: "Campaign API Spec", desc: "We define posting specs, price tiers, and validation rules." },
      { step: "02", title: "Publisher Onboarding", desc: "Vetted publishers connect via secure webhook endpoints." },
      { step: "03", title: "Real-time Verification", desc: "Data is scrubbed, formatted, and checked for compliance." },
      { step: "04", title: "Instant Delivery", desc: "Leads land in your CRM in under 200 milliseconds." }
    ],
    leadSpecs: [
      { label: "Delivery Protocol", value: "Ping-Post / Direct Post / JSON API" },
      { label: "Validation Engine", value: "Real-time Scrubbing & Bot Check" },
      { label: "Publisher Audit", value: "100% TCPA Vetted Network" },
      { label: "Min Order", value: "500 Leads" }
    ],
    faq: [
      {
        q: "How do you prevent fraudulent or duplicate leads?",
        a: "We run real-time deduplication across our 90-day global database, phone validation via carrier lookup APIs, and TCPA token authentication."
      }
    ]
  },
  {
    id: "aca-health-insurance",
    slug: "aca-health-insurance",
    title: "ACA / Health Insurance Marketplace",
    shortDescription: "Exclusive ACA, Under-65, and Medicare leads & live transfers for licensed health insurance agencies.",
    heroHeadline: "High-Intent ACA & Health Insurance Live Transfers",
    heroSubheadline: "Fuel your health insurance agents during Open Enrollment and Special Enrollment Periods with pre-qualified ACA buyers.",
    iconName: "HeartPulse",
    badge: "Top Insurance Vertical",
    qualityGuarantee: "Income & Subsidy Qualification Verified",
    avgConversionRate: "32% - 45% Enrolled Policy Rate",
    imageUrl: "/images/services/aca-health.png",
    features: [
      "Verified Subsidized ACA & Marketplace Eligibility",
      "Under-65 & Private Health Insurance Prospect Filters",
      "Medicare Advantage & Supplement Screening",
      "Licensed Agent Screening Script Standards",
      "Instant State-by-State Routing Options",
      "TCPA 1-to-1 Consent Certificate Attached"
    ],
    benefits: [
      {
        title: "Maximized Enrollment Rates",
        description: "We filter prospects by current coverage status, income thresholds, and enrollment period readiness."
      },
      {
        title: "OEP & SEP Scale",
        description: "Deliver thousands of ACA transfers per day to keep hundreds of call center seats producing consistently."
      }
    ],
    processSteps: [
      { step: "01", title: "State Target Mapping", desc: "Define your licensed states and target plan types." },
      { step: "02", title: "Eligibility Screening", desc: "We verify income, state residency, and existing health plan." },
      { step: "03", title: "Warm Transfer", desc: "Prospect is transferred live with confirmed subsidy interest." },
      { step: "04", title: "Policy Close", desc: "Your agent completes enrollment on Healthcare.gov or state portal." }
    ],
    leadSpecs: [
      { label: "Target Audience", value: "Uninsured / ACA Subsidy Eligible" },
      { label: "Screening Criteria", value: "Income, Age, State, Plan Need" },
      { label: "Compliance", value: "CMS & TCPA Compliant" },
      { label: "Min Order", value: "50 Live Transfers" }
    ],
    faq: [
      {
        q: "Are ACA leads available year-round?",
        a: "Yes! Special Enrollment Periods (SEP) for life changes (job loss, income change, move) drive high volume year-round outside OEP."
      }
    ]
  },
  {
    id: "final-expense-insurance",
    slug: "final-expense-insurance",
    title: "Final Expense & Burial Insurance",
    shortDescription: "Exclusive senior leads and live transfers seeking affordable burial and life insurance protection.",
    heroHeadline: "High-Intent Senior Final Expense Live Transfers",
    heroSubheadline: "Connect directly with seniors aged 50-80 looking for immediate whole life and burial insurance coverage.",
    iconName: "ShieldCheck",
    badge: "Senior Market Leader",
    qualityGuarantee: "Bank Account & Decision Maker Verified",
    avgConversionRate: "30% - 40% Application Rate",
    imageUrl: "/images/services/final-expense.png",
    features: [
      "Target Seniors Aged 50 to 80",
      "Verification of Bank Account / Checking for Auto-Pay",
      "Confirm Decision Maker Status & Health Overview",
      "Warm Buffer Guarantee (90s - 120s)",
      "Zero Shared Leads - 100% Exclusive",
      "TCPA 1-to-1 Consent Certification"
    ],
    benefits: [
      {
        title: "High Retention Policies",
        description: "By confirming valid payment methods and genuine buyer interest, policy lapse rates drop significantly."
      },
      {
        title: "Consistent Year-Round Volume",
        description: "Final expense demand remains constant throughout all 12 months with steady conversion performance."
      }
    ],
    processSteps: [
      { step: "01", title: "Senior Prospect Targeting", desc: "Outbound & digital campaigns engage seniors seeking coverage." },
      { step: "02", title: "4-Point Quality Check", desc: "Age (50-80), payment readiness, decision maker status, and intent confirmed." },
      { step: "03", title: "Warm Connect", desc: "Transferred live to your telesales life agent." },
      { step: "04", title: "Application Completed", desc: "Agent submits policy application immediately." }
    ],
    leadSpecs: [
      { label: "Age Demographic", value: "50 - 80 Years Old" },
      { label: "Payment Filter", value: "Checking / Direct Express Verified" },
      { label: "Transfer Buffer", value: "90 Seconds" },
      { label: "Min Order", value: "50 Transfers" }
    ],
    faq: [
      {
        q: "How do you verify seniors have a checking account?",
        a: "Our telemarketing screeners specifically ask if the prospect has an active checking or savings account for automated policy billing before initiating the transfer."
      }
    ]
  },
  {
    id: "auto-insurance",
    slug: "auto-insurance",
    title: "Auto Insurance Savings Leads",
    shortDescription: "Drivers actively searching for lower auto insurance premiums and immediate policy quotes.",
    heroHeadline: "High-Volume Exclusive Auto Insurance Leads & Calls",
    heroSubheadline: "Scale your auto insurance brokerage with active drivers seeking lower rates and immediate quote comparisons.",
    iconName: "Car",
    badge: "High Consumer Demand",
    qualityGuarantee: "Currently Insured & Multi-Vehicle Filters",
    avgConversionRate: "22% - 35% Policy Write Rate",
    imageUrl: "/images/services/auto-insurance.png",
    features: [
      "Currently Insured vs Uninsured Prospect Segmentation",
      "Multi-Vehicle & Multi-Driver Filter Options",
      "Clean Driving Record & Violation Screening",
      "Zip Code & State GEO Filters",
      "Real-time Data & Warm Transfer Delivery",
      "Full TCPA & FCRA Compliance Audit"
    ],
    benefits: [
      {
        title: "High Premium Ticket",
        description: "Target multi-car households looking to switch providers for immediate cost savings."
      },
      {
        title: "Rapid Close Cycle",
        description: "Auto insurance buyers generally make a decision within 24 hours of receiving a competitive quote."
      }
    ],
    processSteps: [
      { step: "01", title: "Driver Ad Engagement", desc: "Targeted digital ads highlight rate savings and comparison tools." },
      { step: "02", title: "Driver Profile Capture", desc: "Vehicle make, year, coverage status, and zip code captured." },
      { step: "03", title: "Real-time Routing", desc: "Warm transfer or exclusive lead pushed straight to your producers." },
      { step: "04", title: "Binder Issued", desc: "Agent issues auto binder on the phone." }
    ],
    leadSpecs: [
      { label: "Lead Types", value: "Live Transfer / Inbound / Real-time Web" },
      { label: "Filter Options", value: "Current Carrier, Vehicles, Clean Record" },
      { label: "Delivery", value: "Instant CRM Push / Live Phone" },
      { label: "Min Order", value: "100 Leads" }
    ],
    faq: [
      {
        q: "Can we target specific insurance carriers prospects currently use?",
        a: "Yes! We can segment prospects by current insurance provider (State Farm, Geico, Progressive, Allstate, etc.) for targeted conquest campaigns."
      }
    ]
  },
  {
    id: "ssdi-disability",
    slug: "ssdi-disability",
    title: "SSDI Disability Insurance",
    shortDescription: "Pre-screened Social Security Disability prospects seeking legal representation and claim assistance.",
    heroHeadline: "Qualified SSDI Claims Leads & Live Calls for Law Firms",
    heroSubheadline: "Help disabled individuals secure Social Security Disability benefits with pre-qualified case leads.",
    iconName: "Briefcase",
    badge: "Legal & Advocacy Vertical",
    qualityGuarantee: "Medical & Work History Screened",
    avgConversionRate: "35% - 50% Retained Client Rate",
    imageUrl: "/images/services/ssdi-disability.png",
    features: [
      "Under Doctor's Care & Severe Condition Verification",
      "Work Credit Eligibility (5 out of 10 years worked)",
      "Unrepresented Status Verified (No existing attorney)",
      "Initial Application & Denied Claim Filter Options",
      "Detailed Case Summary Provided Prior to Transfer",
      "100% TCPA Consent Documentation"
    ],
    benefits: [
      {
        title: "Pre-Qualified Case Files",
        description: "Attorneys save hours of intake screening by receiving clients who meet SSA disability criteria."
      },
      {
        title: "High Retainer Conversion",
        description: "Unrepresented claimants facing financial hardship are eager to retain professional legal help."
      }
    ],
    processSteps: [
      { step: "01", title: "Intake Screening", desc: "Prospects submit medical condition and work history details." },
      { step: "02", title: "Advocacy Qualification", desc: "We confirm age (<63), doctor treatment, and unrepresented status." },
      { step: "03", title: "Live Transfer", desc: "Warm connect to your law firm's intake specialist." },
      { step: "04", title: "Retainer Sent", desc: "Firm issues digital retainer agreement." }
    ],
    leadSpecs: [
      { label: "Case Type", value: "SSDI Initial & Appeals" },
      { label: "Qualification", value: "Doctor Treated, Unrepresented, Work Credits" },
      { label: "Target Age", value: "18 - 63 Years Old" },
      { label: "Min Order", value: "25 Case Leads" }
    ],
    faq: [
      {
        q: "What makes an SSDI lead qualified?",
        a: "A qualified SSDI lead has a physical/mental condition preventing work for 12+ months, is under current medical care, is under age 64, and does NOT currently have an attorney."
      }
    ]
  },
  {
    id: "debt-settlement",
    slug: "debt-settlement",
    title: "Debt Settlement & Relief",
    shortDescription: "Consumers with $10,000+ unsecured credit card and personal loan debt looking for relief programs.",
    heroHeadline: "High-Intent Debt Relief Live Transfers & Inbound Calls",
    heroSubheadline: "Connect directly with consumers carrying $10k+ in unsecured debt looking to reduce their monthly obligations.",
    iconName: "DollarSign",
    badge: "High ROI Finance Vertical",
    qualityGuarantee: "$10,000+ Unsecured Debt & Hardship Verified",
    avgConversionRate: "28% - 40% Enrolled Debt Rate",
    imageUrl: "/images/services/debt-settlement.png",
    features: [
      "Minimum $10,000 Unsecured Debt Threshold",
      "Financial Hardship (Job loss, medical, divorce) Confirmed",
      "Exclude Active Bankruptcy & Mortgage-Only Debt",
      "Verify Credit Card / Personal Loan Debt Breakdown",
      "Instant CRM Integration & Live Warm Transfer",
      "Full TCPA & FTC Compliance Monitoring"
    ],
    benefits: [
      {
        title: "Massive Enrolled Contract Value",
        description: "Average enrolled debt files exceed $25,000, creating substantial revenue per closed deal for relief companies."
      },
      {
        title: "Immediate Financial Urgency",
        description: "Prospects struggling with high interest rates are highly motivated to enroll in a structured settlement plan."
      }
    ],
    processSteps: [
      { step: "01", title: "Financial Hardship Screening", desc: "Consumer completes debt intake evaluation." },
      { step: "02", title: "Debt Verification", desc: "We verify total unsecured debt meets $10,000+ requirement." },
      { step: "03", title: "Live Warm Transfer", desc: "Consumer is connected directly to your debt counselor." },
      { step: "04", title: "Enrollment Agreement", desc: "Counselor reviews debt program and executes agreement." }
    ],
    leadSpecs: [
      { label: "Min Debt Amount", value: "$10,000+ Unsecured" },
      { label: "Debt Types", value: "Credit Cards, Personal Loans, Medical" },
      { label: "Transfer Buffer", value: "90 Seconds" },
      { label: "Min Order", value: "50 Transfers" }
    ],
    faq: [
      {
        q: "Do you filter out prospects currently in bankruptcy?",
        a: "Yes! Prospects who have filed active bankruptcy or are in loan modification are filtered out prior to live transfer."
      }
    ]
  },
  {
    id: "water-damage-restoration",
    slug: "water-damage-restoration",
    title: "24/7 Emergency Water Damage Restoration",
    shortDescription: "Urgent inbound emergency restoration calls for flooded properties, mold, and fire restoration contractors.",
    heroHeadline: "Exclusive 24/7 Inbound Water Damage Restoration Calls",
    heroSubheadline: "Emergency property restoration leads delivered to local restoration technicians while the emergency is occurring.",
    iconName: "Droplets",
    badge: "Emergency High Ticket",
    qualityGuarantee: "Active Property Owner & Active Emergency Verified",
    avgConversionRate: "50% - 70% Dispatch Rate",
    imageUrl: "/images/services/water-damage.png",
    features: [
      "100% Inbound Phone Calls (No Cold Leads)",
      "Property Owner Status & Immediate Emergency Filter",
      "Zip Code & Metro Area Exclusive Radius",
      "24/7/365 Concurrency Call Dispatching",
      "High Average Ticket ($4,000 - $15,000+ per job)",
      "Zero Shared Calls - Direct Ring to Tech"
    ],
    benefits: [
      {
        title: "Immediate Dispatch & High Ticket",
        description: "Restoration jobs carry immense urgency and average $5,000+ per emergency insurance claim."
      },
      {
        title: "Hyper-Local Coverage",
        description: "Set your exact dispatch radius by zip code or county so crews only receive calls in their service area."
      }
    ],
    processSteps: [
      { step: "01", title: "Emergency Search Ads", desc: "Local homeowners search 'water leak emergency near me'." },
      { step: "02", title: "Instant Call", desc: "Caller dials dedicated local emergency restoration hotline." },
      { step: "03", title: "Zip Code Route", desc: "Call routes directly to your on-call technician." },
      { step: "04", title: "Crew Dispatched", desc: "Technician dispatches truck to property location." }
    ],
    leadSpecs: [
      { label: "Call Type", value: "Exclusive 100% Inbound" },
      { label: "Target Ticket", value: "$5,000+ Job Average" },
      { label: "Dispatch Hours", value: "24/7/365 On-Call" },
      { label: "Min Order", value: "25 Calls" }
    ],
    faq: [
      {
        q: "What happens if a call is outside our service zip codes?",
        a: "Calls outside your configured zip code radius are automatically routed elsewhere, so you never pay for out-of-area calls."
      }
    ]
  },
  {
    id: "home-services",
    slug: "home-services",
    title: "Trusted Home Services & Solar",
    shortDescription: "Exclusive homeowner leads for Solar, HVAC, Roofing, Plumbing, Windows, and Home Remodeling.",
    heroHeadline: "High-Intent Homeowner Leads & Live Appointments",
    heroSubheadline: "Fill your sales calendar with qualified homeowners seeking solar, HVAC replacements, roofing, and kitchen remodeling.",
    iconName: "Home",
    badge: "Residential Contracting",
    qualityGuarantee: "Verified Property Ownership & Credit Tier",
    avgConversionRate: "30% - 45% Sit & Pitch Rate",
    imageUrl: "/images/services/home-services.png",
    features: [
      "Single-Family Homeowner Status Confirmed",
      "Electric Bill / Project Budget Pre-Screened",
      "Roofing Condition & Sun Exposure (For Solar)",
      "Confirmed Decision Maker Appointment Times",
      "TCPA 1-to-1 Consent Certificate Attached",
      "Direct API Sync to MarketSharp, LeadPerfection, CRM"
    ],
    benefits: [
      {
        title: "Confirmed In-Home Consultations",
        description: "Contractors receive fully scheduled appointments with motivated homeowners ready for an in-home quote."
      },
      {
        title: "Flexible Vertical Options",
        description: "Campaigns tailored specifically for Solar PV, HVAC replacement, Roofing, Bathroom Remodel, and Windows."
      }
    ],
    processSteps: [
      { step: "01", title: "Homeowner Outreach", desc: "Digital & telemarketing campaigns target homeowners with older systems." },
      { step: "02", title: "Ownership & Bill Filter", desc: "Single-family ownership and monthly utility bill confirmed." },
      { step: "03", title: "Appointment Set", desc: "Confirmed date & time scheduled for sales rep." },
      { step: "04", title: "In-Home Demo", desc: "Contractor sits with homeowner and closes contract." }
    ],
    leadSpecs: [
      { label: "Property Type", value: "Single-Family Homeowner" },
      { label: "Services", value: "Solar, HVAC, Roofing, Windows, Bath" },
      { label: "Delivery", value: "Real-time API / Live Appointment" },
      { label: "Min Order", value: "50 Leads" }
    ],
    faq: [
      {
        q: "Do you confirm both spouses/decision makers will be present?",
        a: "Yes! For live appointment setting campaigns, we confirm that all key decision-makers will be present for the scheduled sit."
      }
    ]
  }
];
