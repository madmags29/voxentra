export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  leadVolumePerMonth: string;
  avgConversion: string;
  popularServices: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "insurance",
    name: "Insurance Agencies & Carriers",
    description: "Health, ACA, Medicare, Auto, Life, and Final Expense agencies looking for exclusive warm call transfers and real-time leads.",
    iconName: "Shield",
    leadVolumePerMonth: "150,000+ Transfers",
    avgConversion: "34%",
    popularServices: ["Live Call Transfers", "ACA / Health Insurance", "Final Expense", "Auto Insurance"]
  },
  {
    id: "healthcare",
    name: "Healthcare & SSDI Advocates",
    description: "Social Security Disability law firms, clinical networks, and wellness providers requiring screened, pre-qualified applicants.",
    iconName: "HeartPulse",
    leadVolumePerMonth: "45,000+ Leads",
    avgConversion: "38%",
    popularServices: ["SSDI Disability", "Inbound Calls", "Telemarketing"]
  },
  {
    id: "finance",
    name: "Financial Services & Debt Relief",
    description: "Debt settlement companies, debt consolidation lenders, and credit repair providers serving consumers with $10,000+ debt.",
    iconName: "DollarSign",
    leadVolumePerMonth: "80,000+ Calls",
    avgConversion: "31%",
    popularServices: ["Debt Settlement", "Live Transfers", "Inbound Calls"]
  },
  {
    id: "home-services",
    name: "Home Services & Restoration",
    description: "24/7 Water damage restoration contractors, HVAC specialists, roofers, and plumbers needing high-ticket emergency calls.",
    iconName: "Home",
    leadVolumePerMonth: "35,000+ Inbound Calls",
    avgConversion: "52%",
    popularServices: ["24/7 Water Damage", "Trusted Home Services", "Inbound Calls"]
  },
  {
    id: "solar",
    name: "Solar Energy & Clean Tech",
    description: "Residential solar installers and national sales organizations seeking homeowner appointments with high electric bills.",
    iconName: "Sun",
    leadVolumePerMonth: "60,000+ Appointments",
    avgConversion: "29%",
    popularServices: ["Home Services & Solar", "Live Transfers", "Affiliate Network"]
  },
  {
    id: "mortgage",
    name: "Mortgage & Refinance",
    description: "Lenders and brokers connecting with homeowners looking for cash-out refinance, HELOCs, and rate reductions.",
    iconName: "Key",
    leadVolumePerMonth: "40,000+ Leads",
    avgConversion: "27%",
    popularServices: ["Outbound Telemarketing", "Inbound Calls", "Live Transfers"]
  },
  {
    id: "legal",
    name: "Legal & Mass Tort",
    description: "Personal injury, SSDI, auto accident, and legal intake call centers needing verified claimant contacts.",
    iconName: "Scale",
    leadVolumePerMonth: "25,000+ Retainers",
    avgConversion: "41%",
    popularServices: ["SSDI Disability", "Live Transfers", "Inbound Calls"]
  },
  {
    id: "automotive",
    name: "Automotive & Auto Warranty",
    description: "Auto dealerships, warranty providers, and auto loan refinancing centers driving direct phone sales.",
    iconName: "Car",
    leadVolumePerMonth: "50,000+ Calls",
    avgConversion: "25%",
    popularServices: ["Auto Insurance Savings", "Outbound Telemarketing"]
  }
];
