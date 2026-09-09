export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Compliance" | "Quality" | "Pricing & Integration";
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What makes Voxentra Solutions leads and inbound calls different from competitors?",
    answer: "Voxentra Solutions focuses exclusively on 100% real-time, non-shared, pre-screened prospects. Every lead or inbound call includes verified TCPA 1-to-1 explicit consent certificates, rigorous demographic pre-screening, and custom buffer guarantees so you only pay for qualified conversations.",
    category: "General"
  },
  {
    question: "How do Inbound Pay-Per-Call Campaigns work?",
    answer: "Our direct response campaigns drive high-intent consumer calls through targeted search and media ads, verify that the consumer meets your exact geographic and demographic parameters, and route them directly to your phone lines with zero wait time.",
    category: "Quality"
  },
  {
    question: "How is TCPA and DNC compliance enforced?",
    answer: "Compliance is our foundational priority. All digital landers and inbound marketing campaigns utilize strict 1-to-1 explicit consent forms, federal and state Do Not Call (DNC) list scrubbing, and real-time visual proof recording. Every delivered lead comes with an audit certificate token.",
    category: "Compliance"
  },
  {
    question: "Can we integrate Voxentra leads directly into our CRM?",
    answer: "Yes! We support native 200ms REST API posting, Ping-Post endpoints, Webhooks, and direct integrations into Salesforce, HubSpot, Ringba, Convoso, Vicidial, TrackDrive, Close, and custom database endpoints.",
    category: "Pricing & Integration"
  },
  {
    question: "What is your buffer policy for inbound calls?",
    answer: "We offer custom call buffer policies ranging from 60 seconds up to 120 seconds. If a caller drops off before the buffer time or fails to meet pre-agreed qualification parameters, the call is automatically credited or unbilled.",
    category: "Quality"
  },
  {
    question: "What is the minimum campaign order size?",
    answer: "For new client trial campaigns, minimum order quantities start at 50 Inbound Calls or 100 Exclusive Leads. This allows you to thoroughly benchmark performance before scaling up daily volume caps.",
    category: "Pricing & Integration"
  }
];
