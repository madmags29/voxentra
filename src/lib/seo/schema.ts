export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Voxentra Solutions",
    "url": "https://www.voxentraglobal.com",
    "logo": "https://www.voxentraglobal.com/images/voxentra-logo-light.svg",
    "description": "Voxentra Solutions is a leading US B2B telemarketing, live call transfer, and exclusive lead generation company.",
    "telephone": "+91-8840682135",
    "email": "hello@voxentraglobal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H. No. 184, Nainagarh, Nagra",
      "addressLocality": "Jhansi",
      "addressRegion": "U.P.",
      "postalCode": "284003",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/voxentra-solutions",
      "https://twitter.com/voxentra",
      "https://facebook.com/voxentrasolutions"
    ]
  };
}

export function generateServiceSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": title,
    "provider": {
      "@type": "Organization",
      "name": "Voxentra Solutions"
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
