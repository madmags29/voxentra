export interface LandingPageData {
  slug: string;
  vertical: string;
  badge: string;
  mainTitlePrefix: string;
  mainTitleHighlight: string;
  mainTitleSuffix?: string;
  subTitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  phoneHotline: string;
  formTitle: string;
  formSubtitle: string;
  serviceOptions: string[];
  badges: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
  socialProofCount: string;
  stats: {
    value: string;
    label: string;
  }[];
  popularServices: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews: {
    name: string;
    location: string;
    service: string;
    comment: string;
    rating: number;
    initials: string;
  }[];
}

export const LANDING_PAGES: Record<string, LandingPageData> = {
  hvac: {
    slug: "hvac",
    vertical: "HVAC - Heating & Air Conditioning",
    badge: "⚡ EPA Certified & Licensed HVAC Specialists",
    mainTitlePrefix: "Upgrade or Repair Your ",
    mainTitleHighlight: "Heating & Cooling",
    mainTitleSuffix: " System?",
    subTitle: "Energy-Saving HVAC Replacement & 24/7 Emergency Repairs",
    description:
      "Cut skyrocketing energy bills and restore total home comfort fast. From high-efficiency central air conditioners and heat pumps to emergency furnace repair, connect with certified local technicians for precision installation and upfront pricing.",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Professional HVAC technician inspecting air conditioning unit",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free HVAC Quote",
    formSubtitle: "Save up to 40% on heating & cooling with top-rated energy-efficient systems.",
    serviceOptions: [
      "Central AC Installation & Replacement",
      "Emergency AC & Furnace Repair",
      "Heat Pump Installation & Replacement",
      "Ductless Mini-Split AC Systems",
      "Furnace & Heating System Installation",
      "Ductwork Repair & Air Quality Purification",
      "Comprehensive Seasonal Tune-Up & Maintenance",
    ],
    badges: [
      { icon: "shield", title: "Licensed & Insured", subtitle: "State-certified EPA technicians" },
      { icon: "leaf", title: "Energy Star® Rated", subtitle: "High SEER efficiency systems" },
      { icon: "star", title: "5-Star Rated Service", subtitle: "100% satisfaction guarantee" },
    ],
    socialProofCount: "3,400+ homeowners nationwide",
    stats: [
      { value: "Up to 40%", label: "Average Energy Savings" },
      { value: "24/7", label: "Emergency Dispatch" },
      { value: "10-Year", label: "Equipment Warranty Available" },
      { value: "4.9/5", label: "Customer Satisfaction" },
    ],
    popularServices: [
      {
        title: "Central AC Replacement",
        description: "Upgrade to quiet, high-efficiency central air conditioning units engineered to keep your home cool and electric bills down.",
        icon: "snowflake",
      },
      {
        title: "Emergency Furnace Repair",
        description: "Fast 24/7 diagnostic and repair for gas, electric, and oil heating systems to keep your family warm during cold snaps.",
        icon: "flame",
      },
      {
        title: "Heat Pump Systems",
        description: "Versatile, dual-heating and cooling solutions that maximize energy rebates and year-round climate regulation.",
        icon: "zap",
      },
      {
        title: "Ductless Mini-Splits",
        description: "Targeted zoned temperature control for room additions, older homes without ducts, or sunrooms.",
        icon: "wind",
      },
      {
        title: "Indoor Air Quality & Filtration",
        description: "Hospital-grade HEPA filters, UV air purifiers, and whole-house dehumidifiers to remove allergens and toxins.",
        icon: "shieldCheck",
      },
      {
        title: "Annual Seasonal Tune-Ups",
        description: "21-point multi-system inspection to prevent costly mid-season breakdowns and prolong HVAC lifespan.",
        icon: "wrench",
      },
    ],
    whyChooseUs: [
      {
        title: "100% Certified & Background-Checked Pros",
        description: "Every HVAC contractor in our network is thoroughly vetted, licensed, insured, and certified for your safety.",
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "Receive detailed written estimates before any work begins. No unexpected surprise surcharges or hidden trip fees.",
      },
      {
        title: "Maximum Energy Rebates Assistance",
        description: "Our specialists help you claim federal Inflation Reduction Act rebates and local utility credits up to $2,000+.",
      },
      {
        title: "Rapid Emergency Response",
        description: "When your AC or furnace fails in extreme weather, our local dispatchers connect you with immediate priority service.",
      },
    ],
    faqs: [
      {
        question: "How much can I save by replacing an old HVAC unit?",
        answer: "Modern high-efficiency systems (16+ SEER2) can reduce your cooling and heating electricity consumption by 20% to 40%, potentially saving hundreds of dollars annually on your utility bills.",
      },
      {
        question: "Are estimates really 100% free with no obligation?",
        answer: "Yes! When you submit the form, local vetted contractors provide free in-home consultations and written quotes without any pressure or obligation.",
      },
      {
        question: "Do you offer emergency HVAC repairs?",
        answer: "Yes, our contractor network offers 24/7 priority emergency dispatch for system breakdowns during heatwaves or freezing temperatures.",
      },
      {
        question: "What warranties are included with new HVAC systems?",
        answer: "Most installations include a 10-year manufacturer equipment warranty alongside extensive contractor labor warranties.",
      },
    ],
    reviews: [
      {
        name: "Robert M.",
        location: "Dallas, TX",
        service: "Central AC Replacement",
        comment: "Our AC died in July. Submitted the form and had a certified technician at my house within 2 hours. Installed a new Trane unit next day. Incredible experience!",
        rating: 5,
        initials: "RM",
      },
      {
        name: "Samantha K.",
        location: "Atlanta, GA",
        service: "Heat Pump Installation",
        comment: "Saved $1,200 thanks to utility rebates our contractor helped us file. Our power bill dropped noticeably on the very first month.",
        rating: 5,
        initials: "SK",
      },
      {
        name: "David T.",
        location: "Phoenix, AZ",
        service: "Emergency Furnace Repair",
        comment: "Upfront pricing, fast response, and no high-pressure sales tactics. Will definitely recommend Voxentra to neighbors.",
        rating: 5,
        initials: "DT",
      },
    ],
  },

  plumbing: {
    slug: "plumbing",
    vertical: "Plumbing Services",
    badge: "🔧 Licensed Master Plumbers & Emergency Dispatch",
    mainTitlePrefix: "Fast, Dependable ",
    mainTitleHighlight: "Plumbing Services",
    mainTitleSuffix: " & Repairs",
    subTitle: "Emergency Leak Repairs, Drain Cleaning & Water Heater Installations",
    description:
      "Plumbing emergencies cannot wait. From burst water pipes and backed-up sewer lines to tankless water heaters and fixture installations, get connected with licensed local master plumbers ready to solve your issues quickly and cleanly.",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Master plumber repairing modern water piping system",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free Plumbing Estimate",
    formSubtitle: "Fast local dispatch • Upfront quotes with zero hidden travel fees.",
    serviceOptions: [
      "Emergency Leak Repair & Burst Pipes",
      "Drain Cleaning & Hydro-Jetting",
      "Water Heater Repair & Replacement (Tank / Tankless)",
      "Sewer Line Video Inspection & Trenchless Repair",
      "Fixture Installation (Toilets, Sinks, Faucets)",
      "Whole-Home Pipe Replacement (PEX / Copper)",
      "Sump Pump & Backflow Preventer Services",
    ],
    badges: [
      { icon: "shield", title: "Master Licensed & Insured", subtitle: "Fully bonded professional plumbers" },
      { icon: "clock", title: "60-Min Emergency Dispatch", subtitle: "Rapid local response team" },
      { icon: "star", title: "Transparent Pricing", subtitle: "No overtime surprise charges" },
    ],
    socialProofCount: "4,100+ satisfied homeowners",
    stats: [
      { value: "60 Min", label: "Average Emergency Dispatch" },
      { value: "100%", label: "Licensed & Bonded" },
      { value: "$0", label: "Free In-Home Written Quotes" },
      { value: "4.9/5", label: "Top Customer Rating" },
    ],
    popularServices: [
      {
        title: "Emergency Leak Detection & Repair",
        description: "State-of-the-art acoustic and thermal leak detection to pinpoint hidden pipe breaks behind walls and under concrete slabs.",
        icon: "droplet",
      },
      {
        title: "Clogged Drain & Hydro Jetting",
        description: "Heavy-duty commercial hydro-jetting to completely scour grease, tree roots, and mineral scale from main lines.",
        icon: "waves",
      },
      {
        title: "Tankless Water Heater Installation",
        description: "Endless hot water on demand with compact, energy-efficient gas or electric tankless systems.",
        icon: "flame",
      },
      {
        title: "Sewer Line Trenchless Repair",
        description: "Restore cracked or collapsed sewer pipes without digging up your pristine yard or driveway.",
        icon: "shieldCheck",
      },
      {
        title: "Toilet, Sink & Fixture Replacement",
        description: "Upgrade kitchen and bathroom aesthetics with modern, water-saving high-performance fixtures.",
        icon: "wrench",
      },
      {
        title: "Whole-House Repiping",
        description: "Replace dangerous galvanized or failing polybutylene pipes with durable, corrosion-proof PEX piping.",
        icon: "shield",
      },
    ],
    whyChooseUs: [
      {
        title: "Zero Hidden Fees or Travel Surprises",
        description: "You get a transparent written quote before any tool touches a pipe, so you remain completely in control.",
      },
      {
        title: "Equipped for Immediate Fixes",
        description: "Service vans arrive fully stocked with premium replacement parts, fittings, and diagnostic equipment.",
      },
      {
        title: "Property Protection Guarantee",
        description: "Technicians wear protective shoe covers, lay down clean drop cloths, and leave your home spotless.",
      },
      {
        title: "Clean Workmanship Warranty",
        description: "Every repair and installation is backed by comprehensive labor and manufacturer parts guarantees.",
      },
    ],
    faqs: [
      {
        question: "How fast can a plumber arrive at my home?",
        answer: "For emergency leaks and sewage backups, local network pros can often be dispatched within 45 to 60 minutes.",
      },
      {
        question: "Should I repair or replace my water heater?",
        answer: "If your water heater is over 8-10 years old, leaking from the tank base, or making popping noises, replacement with a high-efficiency tankless or hybrid model is generally the most cost-effective solution.",
      },
      {
        question: "Are your plumbers licensed and insured?",
        answer: "Yes, every professional in our network holds full state master plumber licensing, liability insurance, and bonding.",
      },
      {
        question: "What is hydro-jetting?",
        answer: "Hydro-jetting uses high-pressure water streams (up to 4,000 PSI) to blast through stubborn root intrusions and grease buildups, leaving pipes like new.",
      },
    ],
    reviews: [
      {
        name: "Gary L.",
        location: "Denver, CO",
        service: "Emergency Pipe Leak Repair",
        comment: "Woke up to water dripping into the basement. Used the quote form and within 45 minutes a master plumber was fixing the burst copper pipe. Life savers!",
        rating: 5,
        initials: "GL",
      },
      {
        name: "Maria C.",
        location: "Orlando, FL",
        service: "Tankless Water Heater",
        comment: "Upgraded our 15-year-old tank to a Rinnai tankless system. Endless hot water and great price. Very polite crew.",
        rating: 5,
        initials: "MC",
      },
      {
        name: "Brian P.",
        location: "Charlotte, NC",
        service: "Drain Hydro-Jetting",
        comment: "Had recurring backups for 6 months. Their camera inspection found tree roots and hydro-jetting cleared it right up. Clean and honest.",
        rating: 5,
        initials: "BP",
      },
    ],
  },

  roofing: {
    slug: "roofing",
    vertical: "Roofing & Storm Repair",
    badge: "🏠 GAF & Owens Corning Certified Roofing Contractors",
    mainTitlePrefix: "Protect Your Home With ",
    mainTitleHighlight: "Top-Tier Roofing",
    mainTitleSuffix: "",
    subTitle: "Complete Roof Replacement, Storm Damage Repair & Free Drone Inspection",
    description:
      "Your roof is your home’s first line of defense against severe weather. From architectural shingles and metal roofing to leak repair and full insurance claim support, connect with certified local roofers who build roofs to last a lifetime.",
    heroImage: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Professional roofing crew installing architectural shingles",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free Roofing Quote",
    formSubtitle: "Includes 100% Free Drone & Attic Inspection • Lifetime Material Warranty Options",
    serviceOptions: [
      "Complete Asphalt Shingle Roof Replacement",
      "Emergency Roof Leak & Storm Damage Repair",
      "Standing Seam Metal Roofing Installation",
      "Flat Roof & Commercial Membrane Roofing",
      "Roof Inspection & Insurance Claim Assistance",
      "Seamless Gutter & Downspout Replacement",
      "Skylight Replacement & Flashing Repair",
    ],
    badges: [
      { icon: "shield", title: "Master Elite Certified", subtitle: "Top 2% of US roofing contractors" },
      { icon: "award", title: "Lifetime Warranties", subtitle: "50-year non-prorated coverage" },
      { icon: "star", title: "Insurance Claim Specialists", subtitle: "Direct adjuster negotiations" },
    ],
    socialProofCount: "5,200+ roofs installed nationwide",
    stats: [
      { value: "50-Year", label: "Lifetime Shingle Warranty" },
      { value: "$0", label: "Free Inspection & Drone Report" },
      { value: "1-2 Days", label: "Typical Installation Speed" },
      { value: "100%", label: "Clean Property Guarantee" },
    ],
    popularServices: [
      {
        title: "Architectural Shingle Roofing",
        description: "Durable GAF Timberline and Owens Corning HD shingles with 130 MPH wind resistance and Class-A fire ratings.",
        icon: "home",
      },
      {
        title: "Storm & Hail Damage Repair",
        description: "Rapid emergency tarping, dent inspection, and comprehensive insurance claim documentation after severe storms.",
        icon: "cloudRain",
      },
      {
        title: "Standing Seam Metal Roofing",
        description: "Ultra-durable 50+ year lifespan metal roofing engineered for maximum energy efficiency and modern curb appeal.",
        icon: "shieldCheck",
      },
      {
        title: "Roof Leak Detection & Flashing",
        description: "Pinpoint chimney, valley, and vent pipe flashing leaks before water rots internal roof decking and ceilings.",
        icon: "droplet",
      },
      {
        title: "Seamless Gutters & Guards",
        description: "Heavy-gauge custom seamless gutters and micro-mesh gutter covers to channel runoff safely away from foundations.",
        icon: "waves",
      },
      {
        title: "Commercial & Flat Roofing",
        description: "Energy-saving TPO, EPDM, and PVC reflective membranes designed for low-slope and flat roof structures.",
        icon: "layers",
      },
    ],
    whyChooseUs: [
      {
        title: "Manufacturer Master Elite Status",
        description: "Access the highest tier non-prorated material warranties that uncertified contractors cannot offer.",
      },
      {
        title: "Insurance Claim Advocacy",
        description: "Experienced estimators meet directly with your insurance adjuster to ensure full storm damage payout.",
      },
      {
        title: "Magnetic Nail Sweep Guarantee",
        description: "Full magnetic cleanup sweeps after roof tear-off so your lawn and driveway are 100% safe for kids and tires.",
      },
      {
        title: "Flexible $0-Down Financing",
        description: "Low monthly payment options and zero interest promotional periods to fit your household budget.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my roof needs a full replacement or just a repair?",
        answer: "If your roof is over 18-20 years old, missing widespread granules, has curled/cracked shingles, or leaks in multiple places, replacement is usually more cost-effective. A free inspection will provide clear photographic proof.",
      },
      {
        question: "Will my homeowner insurance cover a new roof?",
        answer: "If your roof sustained sudden damage from hail, falling tree branches, or high storm winds, your homeowner policy typically covers replacement minus your deductible. Our pros assist throughout the claim process.",
      },
      {
        question: "How long does a roof replacement take?",
        answer: "Most residential roofs (2,000 to 3,500 sq ft) are completely torn off, replaced, and cleaned up in just 1 to 2 days.",
      },
      {
        question: "What is the warranty coverage?",
        answer: "Network contractors provide manufacturer system warranties up to 50 years non-prorated, plus comprehensive 10-25 year workmanship warranties.",
      },
    ],
    reviews: [
      {
        name: "Kevin B.",
        location: "Columbus, OH",
        service: "Asphalt Shingle Replacement",
        comment: "Had hail damage from the spring storm. The roofer handled everything with our insurance adjuster and got our new GAF roof fully approved. Completed in one day!",
        rating: 5,
        initials: "KB",
      },
      {
        name: "Angela W.",
        location: "Tampa, FL",
        service: "Metal Roof Installation",
        comment: "Upgraded from shingles to standing seam metal before hurricane season. Looks incredible and our homeowners insurance gave us a wind mitigation discount.",
        rating: 5,
        initials: "AW",
      },
      {
        name: "Thomas D.",
        location: "Indianapolis, IN",
        service: "Emergency Storm Leak Repair",
        comment: "Tarped my roof within 3 hours of the leak and gave an honest quote. No high pressure, just good old-fashioned quality work.",
        rating: 5,
        initials: "TD",
      },
    ],
  },

  windows: {
    slug: "windows",
    vertical: "Window & Door Replacement",
    badge: "🪟 Energy Star® Rated Replacement Windows",
    mainTitlePrefix: "Upgrade Your ",
    mainTitleHighlight: "Home Windows?",
    mainTitleSuffix: "",
    subTitle: "Energy-Saving Replacement & Custom Installation",
    description:
      "Cut high energy bills and enhance your home’s curb appeal with certified replacement windows. From double-hung and vinyl casement windows to sliding patio doors, connect with vetted local specialists for custom fitting.",
    heroImage: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Modern energy-efficient home replacement windows and natural light",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free Window Quote",
    formSubtitle: "Save up to 30% on energy bills with top-tier replacement windows.",
    serviceOptions: [
      "Whole House Window Replacement",
      "Double-Hung & Casement Windows",
      "Sliding Patio Door Installation",
      "Bay & Bow Windows",
      "Impact & Hurricane Windows",
      "Glass Repair & Seal Replacement",
      "Other Window Service",
    ],
    badges: [
      { icon: "shield", title: "Licensed & Insured", subtitle: "Certified precision installers" },
      { icon: "leaf", title: "Energy Star® Rated", subtitle: "Low-E Argon gas insulation" },
      { icon: "star", title: "5-Star Rated Service", subtitle: "Lifetime transferable warranty" },
    ],
    socialProofCount: "2,800+ homeowners nationwide",
    stats: [
      { value: "Up to 30%", label: "Average Energy Bill Reduction" },
      { value: "Double/Triple", label: "Insulated Argon Glazing" },
      { value: "Lifetime", label: "Transferable Warranty" },
      { value: "4.9/5", label: "Average Customer Rating" },
    ],
    popularServices: [
      {
        title: "Whole House Window Replacement",
        description: "Transform your home’s comfort, aesthetics, and soundproofing with custom-measured, precision-installed windows throughout.",
        icon: "home",
      },
      {
        title: "Double-Hung & Casement Windows",
        description: "Tilt-in easy-clean sash designs with heavy-duty multi-chamber vinyl frames and airtight dual-weatherstripping.",
        icon: "layout",
      },
      {
        title: "Sliding Patio & French Doors",
        description: "Smooth glide energy-efficient sliding patio doors and elegant French doors with multi-point security locking systems.",
        icon: "doorClosed",
      },
      {
        title: "Architectural Bay & Bow Windows",
        description: "Expand interior living space and maximize panoramic outdoor views with custom-crafted bay and bow window configurations.",
        icon: "maximize",
      },
      {
        title: "Impact & Hurricane Resistant Windows",
        description: "Laminated shatter-resistant glass engineered to withstand 140+ MPH flying debris and forced entry attempts.",
        icon: "shieldCheck",
      },
      {
        title: "Glass Repair & Fogged Seal Replacement",
        description: "Restore crystal-clear vision and thermal efficiency by replacing failed insulated glass units and broken panes.",
        icon: "sparkles",
      },
    ],
    whyChooseUs: [
      {
        title: "Precision Laser Measurement",
        description: "Every window is custom manufactured to 1/16th of an inch for your home, eliminating drafts and air leaks.",
      },
      {
        title: "Federal Energy Tax Credits",
        description: "Qualify for up to $1,200 in federal Inflation Reduction Act Energy Tax Credits on Energy Star Most Efficient models.",
      },
      {
        title: "Acoustic Noise Reduction",
        description: "Thick dual-pane acoustic glass dampens outdoor traffic, lawnmowers, and neighborhood noise by up to 75%.",
      },
      {
        title: "Transferable Lifetime Warranty",
        description: "Comprehensive coverage on frames, seals, glass breakage, and installation labor that adds real resale value.",
      },
    ],
    faqs: [
      {
        question: "How much can I save on my electric bill with new windows?",
        answer: "Replacing old single-pane or leaky double-pane windows with Energy Star certified units typically lowers heating and cooling bills by 12% to 30% each month.",
      },
      {
        question: "What is the difference between vinyl, wood, and fiberglass frames?",
        answer: "Vinyl is the most popular due to high thermal efficiency, low maintenance, and affordable price. Fiberglass offers extreme strength for large glass spans, while wood offers traditional warmth.",
      },
      {
        question: "How long does a window installation take?",
        answer: "A standard whole-house replacement (10-15 windows) is typically completed by a professional crew in just 1 to 2 days.",
      },
      {
        question: "Can I replace just a few windows at a time?",
        answer: "Yes, contractors can stage your replacement project room by room or do the entire home at once depending on your budget.",
      },
    ],
    reviews: [
      {
        name: "Brandon W.",
        location: "Chicago, IL",
        service: "Whole House Window Replacement",
        comment: "Replaced 14 drafty wood windows with triple-pane vinyl. The difference in winter warmth and outdoor traffic silence is miraculous.",
        rating: 5,
        initials: "BW",
      },
      {
        name: "Patricia L.",
        location: "Philadelphia, PA",
        service: "Double-Hung Windows",
        comment: "Contractor was on time, super polite, and cleaned up every speck of dust. The quote was $3,000 less than a big-box franchise.",
        rating: 5,
        initials: "PL",
      },
      {
        name: "Carlos R.",
        location: "Miami, FL",
        service: "Impact Windows & Doors",
        comment: "Installed hurricane impact windows and sliding door. Now we never have to put up plywood storm shutters again. Worth every penny.",
        rating: 5,
        initials: "CR",
      },
    ],
  },

  bathroom: {
    slug: "bathroom",
    vertical: "Bathroom Remodeling",
    badge: "🛁 5-Star Rated Bathroom Designers & Remodelers",
    mainTitlePrefix: "Transform Your Space With ",
    mainTitleHighlight: "Luxury Bath Remodeling",
    mainTitleSuffix: "",
    subTitle: "1-Day Bath Remodels, Tub-to-Shower Conversions & Custom Tile",
    description:
      "Turn your outdated bathroom into a clean, modern spa retreat. Connect with top local remodeling contractors specializing in low-maintenance acrylic surrounds, walk-in safety showers, custom vanities, and full master bathroom transformations.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Modern renovated luxury bathroom with walk-in glass shower",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free Bathroom Remodel Quote",
    formSubtitle: "Free in-home design consultation • Custom 3D plans & upfront estimates.",
    serviceOptions: [
      "Tub-to-Shower Conversion",
      "Complete Master Bathroom Remodel",
      "Walk-In Safety Tub Installation",
      "Shower Replacement & Frameless Glass",
      "Vanity, Countertop & Sink Upgrades",
      "Custom Tile Flooring & Shower Walls",
      "Small Bathroom & Powder Room Makeover",
    ],
    badges: [
      { icon: "shield", title: "Licensed Remodelers", subtitle: "Dedicated craftsmen & plumbers" },
      { icon: "clock", title: "1-to-2 Day Fast Installs", subtitle: "Minimal household disruption" },
      { icon: "star", title: "Microban® Antimicrobial", subtitle: "Mold & mildew resistant surfaces" },
    ],
    socialProofCount: "3,100+ beautiful bathrooms created",
    stats: [
      { value: "1-2 Days", label: "Average Tub/Shower Install" },
      { value: "100%", label: "Microban Mold Resistance" },
      { value: "Lifetime", label: "Material Guarantee" },
      { value: "4.9/5", label: "Homeowner Rating" },
    ],
    popularServices: [
      {
        title: "Tub-to-Shower Conversion",
        description: "Swap that clunky, hard-to-clean bathtub for a sleek, barrier-free walk-in shower with designer wall patterns and built-in seating.",
        icon: "droplet",
      },
      {
        title: "Complete Master Bath Overhaul",
        description: "Full gut and rebuild including luxury freestanding soaking tubs, double floating vanities, ambient LED mirrors, and heated floors.",
        icon: "sparkles",
      },
      {
        title: "Walk-In Safety Tubs",
        description: "Senior-friendly hydrotherapy walk-in tubs with ultra-low step thresholds, ADA grab bars, slip-resistant floors, and heated seats.",
        icon: "shieldCheck",
      },
      {
        title: "Custom Frameless Glass Showers",
        description: "Premium 3/8-inch heavy tempered glass enclosures and designer matte black or brushed gold hardware.",
        icon: "layout",
      },
      {
        title: "Vanity & Quartz Countertop Upgrades",
        description: "Soft-close solid wood cabinets paired with stain-resistant quartz or granite countertops and modern undermount sinks.",
        icon: "home",
      },
      {
        title: "Designer Tile & Waterproof Flooring",
        description: "Porcelain, marble mosaic, or luxury waterproof vinyl tile engineered specifically for wet moisture-heavy environments.",
        icon: "layers",
      },
    ],
    whyChooseUs: [
      {
        title: "Zero Scrub Microban® Technology",
        description: "Our high-tech acrylic walls resist mold, mildew, and grime—cleans effortlessly with warm soapy water.",
      },
      {
        title: "Fast 1-Day Turnaround Available",
        description: "Many tub-to-shower and shower replacement projects are measured, fabricated, and installed in just 24-48 hours.",
      },
      {
        title: "Comprehensive Plumbing Integrity",
        description: "We don't just cover old problems—our licensed plumbers inspect and replace aging subfloor plumbing valves.",
      },
      {
        title: "100% Free 3D In-Home Design",
        description: "Visualize your new bathroom before committing with photorealistic material samples and custom layout mockups.",
      },
    ],
    faqs: [
      {
        question: "How long does a tub-to-shower conversion take?",
        answer: "Most tub-to-shower conversions are completed in as little as 1 to 2 days, meaning virtually zero downtime for your household routine.",
      },
      {
        question: "Will the shower walls resist mold and mildew?",
        answer: "Yes! High-density non-porous acrylic and composite wall systems are infused with antimicrobial technology that prevents mold and grout discoloration forever.",
      },
      {
        question: "Can I customize fixtures, colors, and grab bars?",
        answer: "Absolutely. Choose from dozens of marble, subway tile, and granite stone patterns, along with brushed nickel, chrome, matte black, and oil-rubbed bronze hardware.",
      },
      {
        question: "Do you offer financing for bathroom remodeling?",
        answer: "Yes, contractors offer attractive payment plans including 0% interest for 12-24 months and low monthly payment options.",
      },
    ],
    reviews: [
      {
        name: "Donna M.",
        location: "Nashville, TN",
        service: "Tub-to-Shower Conversion",
        comment: "Took out my 1980s tub and put in a walk-in shower with a seat and glass door. The installers arrived at 8 AM and were finished by 4 PM. Looks like a luxury hotel!",
        rating: 5,
        initials: "DM",
      },
      {
        name: "Arthur H.",
        location: "San Diego, CA",
        service: "Walk-In Safety Tub",
        comment: "Got a walk-in hydrotherapy tub for my mother. She feels completely safe bathing again and the jets help her arthritis immensely. Outstanding craftsmanship.",
        rating: 5,
        initials: "AH",
      },
      {
        name: "Jessica P.",
        location: "Austin, TX",
        service: "Master Bath Remodel",
        comment: "Custom double vanity, herringbone tile, and frameless glass shower. Done on budget with zero surprise fees. Absolutely thrilled!",
        rating: 5,
        initials: "JP",
      },
    ],
  },

  "water-damage": {
    slug: "water-damage",
    vertical: "24/7 Water Damage Restoration",
    badge: "🌊 24/7 Rapid Emergency Water Extraction Dispatch",
    mainTitlePrefix: "Rapid 24/7 ",
    mainTitleHighlight: "Water Damage Restoration",
    mainTitleSuffix: "",
    subTitle: "Emergency Water Extraction, Structural Drying & Direct Insurance Billing",
    description:
      "Water damage worsens by the minute. Connect immediately with IICRC-certified restoration crews equipped with industrial submersible pumps, high-capacity dehumidifiers, and thermal imaging to extract water, dry structures, and prevent toxic mold.",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Emergency restoration equipment drying water damaged property",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Immediate Water Damage Assistance",
    formSubtitle: "45-Minute Emergency Response • We bill your insurance directly.",
    serviceOptions: [
      "Emergency Water Extraction & Pumping",
      "Burst Pipe & Plumbing Overflow Cleanup",
      "Flooded Basement Water Removal",
      "Structural Dehumidification & Thermal Drying",
      "Mold Remediation & Antimicrobial Sanitization",
      "Storm & Hurricane Flood Cleanup",
      "Sewage Backup Cleanup & Decontamination",
    ],
    badges: [
      { icon: "shield", title: "IICRC Certified Master Crews", subtitle: "Industry gold-standard restoration" },
      { icon: "clock", title: "45-Min On-Site Target", subtitle: "24/7/365 emergency dispatch" },
      { icon: "star", title: "Direct Insurance Billing", subtitle: "Hassle-free claim handling" },
    ],
    socialProofCount: "6,500+ properties restored",
    stats: [
      { value: "45 Mins", label: "Average Dispatch Arrival" },
      { value: "24/7/365", label: "Live Emergency Team" },
      { value: "100%", label: "Direct Insurance Billing" },
      { value: "IICRC", label: "Certified Technicians" },
    ],
    popularServices: [
      {
        title: "Emergency Water Extraction",
        description: "Truck-mounted high-powered vacuum units to extract thousands of gallons of standing water in minutes.",
        icon: "waves",
      },
      {
        title: "Flooded Basement Pumping & Cleanup",
        description: "Rapid sump pump failure cleanup, drywall removal, and structural sanitization to stop mold before it starts.",
        icon: "droplet",
      },
      {
        title: "Industrial Dehumidification & Drying",
        description: "Commercial desiccant dehumidifiers and high-velocity air movers to draw trapped moisture out of wall cavities and hardwood.",
        icon: "wind",
      },
      {
        title: "Thermal Moisture Mapping",
        description: "Infrared thermal imaging cameras to pinpoint hidden moisture pockets behind drywall, ceilings, and under floorboards.",
        icon: "search",
      },
      {
        title: "Mold Remediation & Disinfection",
        description: "EPA-registered botanical antimicrobials and HEPA air scrubbers to neutralize spores and eliminate musty odors.",
        icon: "shieldCheck",
      },
      {
        title: "Complete Property Reconstruction",
        description: "Full general contracting rebuild from new subflooring and drywall to matching paint and trim carpentry.",
        icon: "home",
      },
    ],
    whyChooseUs: [
      {
        title: "45-Minute Emergency Response",
        description: "Every minute counts when water is saturating your drywall and floor joists. We dispatch local crews immediately.",
      },
      {
        title: "Direct Insurance Claim Handling",
        description: "We document every detail using industry-standard Xactimate pricing and bill your insurance carrier directly.",
      },
      {
        title: "Advanced Moisture Verification",
        description: "We don't guess—we test daily with calibrated penetrating moisture meters until structural dry standards are certified.",
      },
      {
        title: "IICRC Gold Standard Certified",
        description: "All technicians are rigorously trained under S500 Standards for Professional Water Damage Restoration.",
      },
    ],
    faqs: [
      {
        question: "How fast should water damage be treated?",
        answer: "Within the first 24 to 48 hours, mold colonies can begin growing and wooden framing starts to warp. Emergency extraction and drying must begin immediately.",
      },
      {
        question: "Will my homeowner insurance pay for water damage?",
        answer: "Most homeowner policies cover sudden and accidental water damage (such as burst pipes, supply line breaks, and water heater failures). Our network handles paperwork and coordinates directly with adjusters.",
      },
      {
        question: "How long does the structural drying process take?",
        answer: "Typical drying takes between 3 to 5 days using commercial dehumidifiers, air movers, and temperature controls, verified with moisture sensors.",
      },
      {
        question: "What should I do while waiting for the restoration team?",
        answer: "If safe, shut off your home’s main water shutoff valve. Avoid walking into rooms with standing water near electrical outlets, and avoid running household vacuums.",
      },
    ],
    reviews: [
      {
        name: "Steven G.",
        location: "Houston, TX",
        service: "Burst Pipe Water Extraction",
        comment: "Upstairs pipe ruptured while we were at work. Water was pouring through the ceiling. The restoration crew arrived in 35 minutes with suction units and dryers. Saved our hardwood floors!",
        rating: 5,
        initials: "SG",
      },
      {
        name: "Rachel T.",
        location: "Cleveland, OH",
        service: "Flooded Basement Restoration",
        comment: "Sump pump failed during a torrential thunderstorm. They pumped out 4 inches of water, removed the wet carpet, and dried out the framing completely. Handled insurance directly.",
        rating: 5,
        initials: "RT",
      },
      {
        name: "Michael B.",
        location: "Miami, FL",
        service: "Mold & Moisture Remediation",
        comment: "Found hidden moisture behind our kitchen cabinets. They contained the area, scrubbed the air, and eliminated all moisture pockets. Highly recommended!",
        rating: 5,
        initials: "MB",
      },
    ],
  },

  "pest-control": {
    slug: "pest-control",
    vertical: "Pest Control & Extermination",
    badge: "🛡️ Safe, Family & Pet-Friendly Pest Extermination",
    mainTitlePrefix: "Fast, Targeted ",
    mainTitleHighlight: "Pest Control",
    mainTitleSuffix: " & Extermination",
    subTitle: "Termite Elimination, Rodent Control, Bed Bug Treatments & Prevention",
    description:
      "Reclaim your home from unwanted invaders. Connect with state-licensed, insured pest specialists offering eco-friendly, family-safe treatments with guaranteed results, exterior perimeter shields, and 100% free re-treatments.",
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Licensed pest control technician performing targeted inspection and treatment",
    phoneHotline: "(+91) 884 068 2135",
    formTitle: "Request Your Free Pest Inspection Quote",
    formSubtitle: "Free home inspection • Same-day dispatch & pet-friendly treatments.",
    serviceOptions: [
      "General Pest Control (Ants, Roaches, Spiders)",
      "Termite Inspection & Baiting Treatment",
      "Rodent (Mice & Rats) Exclusion & Trapping",
      "Bed Bug Heat Treatment & Eradication",
      "Mosquito & Tick Yard Barrier Spray",
      "Wasp, Hornet & Bee Hive Removal",
      "Wildlife Removal (Raccoons, Squirrels, Bats)",
    ],
    badges: [
      { icon: "shield", title: "State Licensed Applicators", subtitle: "EPA-approved safe formulations" },
      { icon: "leaf", title: "Pet & Child Safe Solutions", subtitle: "Eco-friendly botanical treatments" },
      { icon: "star", title: "100% Pest-Free Guarantee", subtitle: "Free retreatment if pests return" },
    ],
    socialProofCount: "4,700+ pest-free homes protected",
    stats: [
      { value: "Same-Day", label: "Inspection Dispatch Available" },
      { value: "100%", label: "Pet & Family Friendly" },
      { value: "$0", label: "Free Re-Treatments Between Visits" },
      { value: "4.9/5", label: "Customer Satisfaction" },
    ],
    popularServices: [
      {
        title: "Comprehensive Home Pest Defense",
        description: "Targeted elimination of sugar ants, roaches, spiders, silverfish, and centipedes with continuous exterior barrier protection.",
        icon: "shieldCheck",
      },
      {
        title: "Termite Defense & Baiting",
        description: "Subterranean and drywood termite eradication using Sentricon baiting systems and liquid soil perimeter barriers.",
        icon: "shield",
      },
      {
        title: "Rodent Proofing & Exclusion",
        description: "Locate and seal entry points as small as a dime, sanitize attic insulation, and safely eliminate mice and rats.",
        icon: "home",
      },
      {
        title: "Bed Bug Heat Eradication",
        description: "Single-day thermal remediation that penetrates mattresses, baseboards, and furniture to kill 100% of adult bugs and eggs.",
        icon: "flame",
      },
      {
        title: "Mosquito & Tick Yard Defense",
        description: "Micro-encapsulated yard fogging and larvicide treatments to enjoy your backyard all summer without bites.",
        icon: "sparkles",
      },
      {
        title: "Wasp & Stinging Insect Removal",
        description: "Safe, rapid removal of aggressive wasp nests, yellowjacket ground hives, and hornet colonies.",
        icon: "alertTriangle",
      },
    ],
    whyChooseUs: [
      {
        title: "Family & Pet First Formulations",
        description: "We use low-toxicity, EPA-registered products that eliminate bugs without endangering your pets or children.",
      },
      {
        title: "Source Elimination (Not Just Surface Sprays)",
        description: "Our certified technicians track nesting sites, cracks, and moisture sources to eradicate the colony at its root.",
      },
      {
        title: "100% Free Re-Treatment Guarantee",
        description: "If covered pests reappear between scheduled visits, your technician returns to re-treat at zero extra charge.",
      },
      {
        title: "Exterior Perimeter Shield Focus",
        description: "90% of pests originate outdoors. We fortify your foundation perimeter so technicians rarely need to spray inside.",
      },
    ],
    faqs: [
      {
        question: "Are your pest control chemicals safe for dogs and children?",
        answer: "Yes, our network uses EPA-registered formulations and botanical extracts designed to target insect biology without posing danger to children or pets once dry (typically 30-45 minutes).",
      },
      {
        question: "How long does a termite inspection take?",
        answer: "A thorough interior and exterior perimeter termite inspection takes approximately 45 minutes and includes an itemized report.",
      },
      {
        question: "How quickly do bed bug heat treatments work?",
        answer: "Thermal heat treatments eradicate all stages of bed bugs (including eggs) in just a single 6 to 8-hour session.",
      },
      {
        question: "What is your pest-free guarantee?",
        answer: "If pests return between your scheduled maintenance visits, we send an exterminator back to re-treat your home completely free of charge.",
      },
    ],
    reviews: [
      {
        name: "Gregory S.",
        location: "San Antonio, TX",
        service: "Termite Treatment",
        comment: "Discovered termite swarms near our patio door. The inspector found the mud tubes and installed bait stations. No more termites and price was very fair.",
        rating: 5,
        initials: "GS",
      },
      {
        name: "Lisa V.",
        location: "Tampa, FL",
        service: "General Pest Control",
        comment: "Palmetto bugs and ghost ants were taking over our kitchen. After their first treatment, haven't seen a single bug in 6 months!",
        rating: 5,
        initials: "LV",
      },
      {
        name: "Derek N.",
        location: "Raleigh, NC",
        service: "Rodent Exclusion",
        comment: "Had rats scratching in the attic. They found where they were getting in under the roofline, sealed everything with steel mesh, and cleared them out safely.",
        rating: 5,
        initials: "DN",
      },
    ],
  },
};
