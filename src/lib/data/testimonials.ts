export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  statsMetric: string;
  statsLabel: string;
  avatar: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    clientName: "Marcus Vance",
    role: "VP of Sales",
    company: "Apex Health Partners",
    industry: "ACA & Health Insurance",
    quote: "Voxentra Solutions transformed our Open Enrollment campaign. Their live transfer call quality and 100% TCPA 1-to-1 consent verification allowed our 40-agent desk to maintain a 36% policy close rate consistently.",
    rating: 5,
    statsMetric: "+240%",
    statsLabel: "Enrollment Volume Increase",
    avatar: "MV"
  },
  {
    id: "2",
    clientName: "Elena Rodriguez",
    role: "Chief Operating Officer",
    company: "National Debt Relief Center",
    industry: "Debt Settlement",
    quote: "We spent years struggling with shared leads from generic vendors. Voxentra's exclusive live transfers deliver consumers with verified $15k+ debt who are ready to enroll right now. Worth every dollar.",
    rating: 5,
    statsMetric: "$4.2M",
    statsLabel: "New Contracted Debt / Mo",
    avatar: "ER"
  },
  {
    id: "3",
    clientName: "David Sterling",
    role: "Managing Director",
    company: "Restoration Pro 24/7",
    industry: "Water Damage Restoration",
    quote: "When emergency calls come in through Voxentra, they are genuine property owners facing immediate water damage. The conversion to on-site dispatch is over 60%. Our dispatch teams stay busy non-stop.",
    rating: 5,
    statsMetric: "62%",
    statsLabel: "Dispatch Close Rate",
    avatar: "DS"
  },
  {
    id: "4",
    clientName: "Sarah Jenkins",
    role: "Head of Marketing",
    company: "Senior Assurance Group",
    industry: "Final Expense Insurance",
    quote: "The senior final expense live transfers are pre-screened for bank account status and age eligibility. Our agents spend zero time dealing with unbanked leads. Voxentra is our #1 growth partner.",
    rating: 5,
    statsMetric: "38%",
    statsLabel: "Application Write Rate",
    avatar: "SJ"
  }
];
