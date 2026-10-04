export type Category =
  | "All"
  | "Social Impact"
  | "Innovation & Startups"
  | "Investment & Finance"
  | "AI & Travel"
  | "Enterprise & ERP"
  | "Climate & Sustainability"
  | "Assistive Technology"
  | "Sports & Entertainment"
  | "Manufacturing";

export const categories: Category[] = [
  "All",
  "Social Impact",
  "Innovation & Startups",
  "Investment & Finance",
  "AI & Travel",
  "Enterprise & ERP",
  "Climate & Sustainability",
];

export type Project = {
  name: string;
  client: string;
  category: Exclude<Category, "All">;
  tag: string;
  description: string;
  link?: string;
  image: string; // 👈 paste your image URL here
  accent: string;
  ring: string;
  badgeColor: string;
  featured?: boolean;
  details?: {
    what: string;
    built: string;
    why: string;
    metrics?: string[];
  };
};

export const projects: Project[] = [
  {
    name: "Steeltech Industries Ltd.",
    client: "Steeltech Industries Ltd.",
    category: "Manufacturing",
    tag: "Manufacturing / Industrial Website",
    description:
      "A premium digital platform for Bangladesh's leading stainless steel pipe manufacturer  showcasing product categories, factory strength, certifications, and nationwide trust.",
    link: "https://www.steeltech-bd.com/",
    image: "/images/work/steeltech.png", // 👈 add image link
    accent: "from-slate-400/25 to-blue-500/5",
    ring: "ring-slate-400/20",
    badgeColor: "text-slate-300 border-slate-300/30",
    featured: true,
    details: {
      what: "A stainless steel manufacturing company producing high-quality SS pipes, sheets, rods, angles, flat bars, mixed pipes, and schedule pipes for industrial, construction, and decorative use.",
      built:
        "A full industrial brand website that presents Steeltech's product catalog, manufacturing process, company legacy, certifications, factory capacity, landmark project trust, gallery, and contact information in a professional way.",
      why: "Steeltech needed a strong digital presence that could communicate manufacturing credibility, product variety, certified quality, and long-term trust to dealers, contractors, engineers, and enterprise buyers.",
      metrics: [
        "20+ years of experience",
        "64 districts coverage",
        "500+ dealer partners",
      ],
    },
  },
  {
    name: "Steeltech Marketing Representative",
    client: "Steeltech Industries Ltd.",
    category: "Manufacturing",
    tag: "Mobile App / Field Sales",
    description:
      "An offline-first Android app for Steeltech's marketing representatives \u2014 register fabricators, file GPS- and photo-verified visit reports, and log distributor sales from sites with no signal.",
    image: "/images/work/steeltech-marketing-rep.png",
    accent: "from-orange-400/25 to-slate-500/5",
    ring: "ring-orange-400/20",
    badgeColor: "text-orange-300 border-orange-300/30",
    featured: true,
    details: {
      what: "Steeltech's marketing representatives work across the country, visiting fabricators, dealers and construction sites \u2014 often in places where mobile data drops out entirely. Visit reports travelled back by paper and messaging apps, so head office saw field activity days late, could not verify where a visit actually happened, and had no single view of which fabricators had been covered.",
      built:
        "A React Native app on Expo SDK 55 with an offline-first sync layer. Representatives register fabricators with photographs, file visit reports with attachments and a GPS stamp, log distributor sales, raise issue reports and work through assigned tasks. Submissions made without signal are queued to device storage and replayed on reconnect \u2014 and because the mutation handlers are re-registered when the query client is built, a queued report survives the app being closed instead of disappearing silently. GPS capture is best-effort on an eight-second timeout, so a weak fix never blocks a submission.",
      why: "Field data now arrives as soon as a representative has signal rather than at the end of a trip, every visit carries a location and photo trail, and head office works from one live picture of fabricator coverage instead of reconciling paper.",
      metrics: [
        "Works fully offline \u2014 reports queue and replay",
        "13 modules in one rep app",
        "GPS + photo-verified visits",
      ],
    },
  },
  {
    name: "Drishti",
    client: "Drishti Technologies",
    category: "Assistive Technology",
    tag: "Assistive Tech / Social Impact",
    description:
      "A purpose-driven assistive technology platform helping visually impaired people move with more confidence, independence, and safety.",
    link: "https://drishti.today/",
    image: "/images/work/drishti.png", // 👈 add image link
    accent: "from-blue-400/25 to-cyan-500/5",
    ring: "ring-blue-400/20",
    badgeColor: "text-blue-300 border-blue-300/30",
    featured: true,
    details: {
      what: "An assistive technology venture focused on transforming lives for visually impaired people through smart, accessible, and independence-focused solutions.",
      built:
        "A modern digital presence that communicates Drishti's mission, product vision, impact story, and assistive technology ecosystem in a trustworthy and human-centered way.",
      why: "Drishti needed a platform that could clearly explain the value of assistive innovation while building credibility with users, families, partners, and future stakeholders.",
      metrics: [
        "Assistive technology venture",
        "Visually impaired focused",
        "Independence-first product story",
      ],
    },
  },
  {
    name: "threadBridge",
    client: "threadBridge",
    category: "Manufacturing",
    tag: "Textile Tech / AI Quality Control",
    description:
      "A product website for an AI-powered fabric inspection system that catches spinning, knitting and dyeing defects in real time, before the batch is ever cut.",
    link: "https://www.threadbridge.tech",
    image: "/images/work/threadbridge.png",
    accent: "from-teal-400/25 to-cyan-500/5",
    ring: "ring-teal-400/20",
    badgeColor: "text-teal-300 border-teal-300/30",
    featured: true,
    details: {
      what: "A textile technology venture building inline fabric inspection for garment and textile manufacturers, combining industrial cameras, edge computing and machine learning models to flag defects as fabric comes off the line.",
      built:
        "A clean, conversion-focused product website that explains the Capture, Analyze, Alert workflow, visualises live inspection data, lets visitors try an interactive demo across 33 fabric samples, compares threadBridge with traditional QC, and drives sign-ups for the pilot program.",
      why: "threadBridge needed to make a deep-tech product easy to understand for factory owners and QA teams, building enough trust to turn visitors into pilot partners and demo bookings.",
      metrics: [
        "98.4% classification accuracy",
        "50 m/min inspection speed",
        "Up to 40% less fabric waste",
      ],
    },
  },
  {
    name: "PoP Water",
    client: "Prokriti o Paani",
    category: "Climate & Sustainability",
    tag: "Climate & Sustainability",
    description:
      "Storytelling-first site with a live impact dashboard for zero-energy bamboo water towers in the Chittagong Hill Tracts.",
    link: "https://popwater.org",
    image: "/images/work/pop-water.png", // 👈 add image link
    accent: "from-cyan-400/25 to-sky-500/5",
    ring: "ring-cyan-400/20",
    badgeColor: "text-cyan-300 border-cyan-300/30",
    featured: true,
    details: {
      what: "Climate-resilient, zero-energy water harvesting towers for remote villages in the Chittagong Hill Tracts. Supported by TIKA, tested by ICDDR,B, covered by the World Economic Forum.",
      built:
        "A storytelling-first site with a live impact dashboard  walking visitors through the problem, the technology, and real-time deployment metrics. Beneficiary stories from Mro communities are featured prominently.",
      why: "The build demanded design that conveys urgency and hope simultaneously  and a live dashboard giving donors real-time visibility into impact through a real data pipeline.",
      metrics: [
        "Zero electricity required",
        "22-year tower lifespan",
        "100 towers in 3 years",
      ],
    },
  },
  {
    name: "Khar",
    client: "Khar",
    category: "Sports & Entertainment",
    tag: "Combat Sports / Event Platform",
    description:
      "A bold digital platform for Bangladesh's combat sports scene  bringing MMA-style fight nights, athlete stories, ticketing, and underground culture into one experience.",
    link: "https://khar.co/",
    image: "/images/work/khar.png", // 👈 add image link
    accent: "from-red-400/25 to-orange-500/5",
    ring: "ring-red-400/20",
    badgeColor: "text-red-300 border-red-300/30",
    featured: true,
    details: {
      what: "A combat sports and entertainment brand building a new fight-night culture in Dhaka  blending athletic intensity, live events, athlete storytelling, and underground aesthetics.",
      built:
        "A high-energy digital platform that presents Khar's events, athletes, podcasts, news, and ticketing experience with a bold visual identity made for modern sports audiences.",
      why: "Khar needed a digital presence that could capture the intensity of combat sports while also helping audiences discover events, follow athletes, and buy tickets easily.",
      metrics: [
        "Combat sports event platform",
        "Athlete-focused storytelling",
        "Live ticketing experience",
      ],
    },
  },

  {
    name: "Build Bangladesh",
    client: "Build Bangladesh",
    category: "Social Impact",
    tag: "Social Impact / Innovation",
    description:
      "A digital platform powering Bangladesh's RMG innovation ecosystem  backed by H&M Foundation, The Asia Foundation, and Sweden.",
    link: "https://buildbangladesh.com.bd",
    image: "/images/work/build-bd.png", // 👈 add image link
    accent: "from-amber-400/25 to-orange-500/5",
    ring: "ring-amber-400/20",
    badgeColor: "text-amber-300 border-amber-300/30",
    featured: true,
    details: {
      what: "A social enterprise driving innovation and transformation in Bangladesh's Ready-Made Garments sector  running accelerators, innovation challenges, and ecosystem-building initiatives.",
      built:
        "A complete digital platform that serves as the public face and operational hub of their mission  communicating programmes, partnerships, and impact to a global audience of funders, startups, and stakeholders.",
      why: "Their digital presence needed to match the credibility of their partners and the ambition of their mission to transform an industry.",
      metrics: [
        "H&M Foundation backed",
        "The Asia Foundation partner",
        "Govt. of Sweden supported",
      ],
    },
  },

  {
    name: "RMG Angels",
    client: "RMG Angels Network",
    category: "Investment & Finance",
    tag: "Investment & Finance",
    description:
      "Investor-grade platform for an angel network connecting HNWIs with vetted early-stage RMG startups targeting a $60B industry.",
    link: "https://rmgangels.com",
    image: "/images/work/rmg-angels.png", // 👈 add image link
    accent: "from-emerald-400/25 to-teal-500/5",
    ring: "ring-emerald-400/20",
    badgeColor: "text-emerald-300 border-emerald-300/30",
    featured: true,
    details: {
      what: "An impact-driven angel investment network connecting high-net-worth individuals with vetted early-stage startups in Bangladesh's fashion manufacturing industry.",
      built:
        "A polished, investor-grade platform covering investment thesis, angel criteria, sector focus, 6-stage startup selection pipeline, and structured co-investment model.",
      why: "The platform needed to inspire confidence in sophisticated investors while clearly communicating a niche thesis  institutional and trustworthy, not a typical startup page.",
      metrics: [
        "$20K minimum commitment",
        "6 sector focus areas",
        "$60B industry target by 2032",
      ],
    },
  },

  {
    name: "Discover Thailand",
    client: "Discover Thailand",
    category: "AI & Travel",
    tag: "AI & Travel",
    description:
      "AI-powered travel discovery platform helping travellers explore destinations, plan itineraries, and discover experiences across Thailand.",
    link: "https://discoverthailand.ai",
    image: "/images/work/discover-thailand.png", // 👈 add image link
    accent: "from-fuchsia-400/25 to-pink-500/5",
    ring: "ring-fuchsia-400/20",
    badgeColor: "text-fuchsia-300 border-fuchsia-300/30",
    featured: true,
    details: {
      what: "An AI-powered travel discovery platform for Thailand  from Bangkok to Chiang Mai to the southern islands.",
      built:
        "A modern, AI-integrated travel platform combining curated content with intelligent recommendations through a single, intuitive interface.",
      why: "Demonstrates ongshak's ability to deliver AI-integrated consumer products for international markets  not a brochure site, a working AI application.",
      metrics: ["AI recommendations", ".ai domain", "International market"],
    },
  },
  {
    name: "Needle Innovation Challenge",
    client: "Build Bangladesh  Oporajita",
    category: "Innovation & Startups",
    tag: "Innovation & Startups",
    description:
      "Multi-year startup development programme accelerating scalable solutions across 6 focus areas in Bangladesh's RMG industry.",
    link: "https://needlechallenge.com",
    image: "/images/work/needle-challenge.png", // 👈 add image link
    accent: "from-blue-400/25 to-indigo-500/5",
    ring: "ring-blue-400/20",
    badgeColor: "text-blue-300 border-blue-300/30",
    featured: true,
    details: {
      what: "A multi-year programme under Oporajita (14 organisations, led by H&M Foundation) accelerating innovation across sustainable materials, circular economy, assistive tech, and process innovation.",
      built:
        "A dedicated platform covering programme info, application portal, 6 solution areas, startup showcases, partner visibility, and bootcamp updates  serving both applicants and institutional partners.",
      why: "NIC is the first programme of its kind in Bangladesh  a structured innovation pipeline for the RMG sector. The platform is its public gateway.",
      metrics: [
        "BDT 650K grants",
        "81 shortlisted from 29 universities",
        "11 teams in cohort 1",
      ],
    },
  },
];
