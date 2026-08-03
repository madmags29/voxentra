export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Voxentra Solutions",
    "alternateName": ["Voxentra", "Voxentra Lead Network"],
    "url": "https://www.voxentraglobal.com",
    "logo": "https://www.voxentraglobal.com/images/voxentra-logo-light.svg",
    "image": "https://www.voxentraglobal.com/images/voxentra-logo-light.svg",
    "description": "Voxentra Solutions is a top-tier US B2B customer acquisition agency specializing in 100% TCPA-compliant live call transfers, inbound pay-per-call marketing, outbound telemarketing, and exclusive lead generation across all 50 states.",
    "telephone": "+91-8840682135",
    "email": "hello@voxentraglobal.com",
    "knowsAbout": [
      "100% TCPA Live Call Transfers",
      "Pay-Per-Call Inbound Marketing",
      "FCC 1-to-1 Explicit Consent Rules",
      "ACA & Health Insurance Leads",
      "Debt Settlement & Consolidation",
      "Senior Final Expense Whole Life Insurance",
      "Auto Insurance Rate Quote Transfers",
      "SSDI Disability Claim Advocacy",
      "24/7 Water Damage Restoration Calls",
      "Residential Solar & Home Improvement Leads"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H. No. 184, Nainagarh, Nagra",
      "addressLocality": "Jhansi",
      "addressRegion": "U.P.",
      "postalCode": "284003",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://linkedin.com/company/voxentra-solutions",
      "https://twitter.com/voxentra",
      "https://facebook.com/voxentrasolutions"
    ]
  };
}

export function generateWebSiteSearchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Voxentra Solutions",
    "url": "https://www.voxentraglobal.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.voxentraglobal.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateServiceSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": title,
    "provider": {
      "@type": "Organization",
      "name": "Voxentra Solutions",
      "url": "https://www.voxentraglobal.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description": description,
    "url": url
  };
}

export function generateFAQSchema(faqs: { question?: string; q?: string; answer?: string; a?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question || faq.q || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || faq.a || ""
      }
    }))
  };
}

export function generateSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelectors
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
