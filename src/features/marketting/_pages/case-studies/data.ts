// Case study articles. Facts about each client come from their live website.

export type ArticleBlock =
  | { type: "text"; heading?: string; body: string[] }
  | { type: "image"; src: string; caption: string; width?: number; height?: number }
  | { type: "features"; heading: string; items: { title: string; body: string }[] }
  | { type: "quote"; text: string; cite: string };

export type CaseStudyArticle = {
  slug: string;
  name: string;
  headline: string;
  excerpt: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  link: string;
  cover: string;
  /** Pixel size of the cover when it isn't the default 1440×900 screenshot. */
  coverSize?: { width: number; height: number };
  accent: string;
  facts: { value: string; label: string }[];
  blocks: ArticleBlock[];
};

export const caseStudyArticles: CaseStudyArticle[] = [
  {
    slug: "steeltech",
    name: "Steeltech Industries",
    headline:
      "A digital flagship for Bangladesh's leading stainless steel pipe manufacturer",
    excerpt:
      "How we turned two decades of manufacturing credibility — 12 product lines, ISO-certified quality and landmark national projects — into a website dealers, engineers and buyers can trust at a glance.",
    client: "Steeltech Industries Ltd.",
    industry: "Manufacturing",
    location: "Dhaka, Bangladesh",
    services: ["UX & UI design", "Web development", "Product catalogue"],
    link: "https://www.steeltech-bd.com",
    cover: "/images/case-studies/steeltech/cover.jpg",
    coverSize: { width: 1440, height: 722 },
    accent: "#FD7D18",
    facts: [
      { value: "2003", label: "Manufacturing since" },
      { value: "12", label: "Product lines" },
      { value: "64", label: "Districts covered" },
      { value: "500+", label: "Dealer partners" },
      { value: "50,000 m²", label: "Factory floor" },
      { value: "ISO 9001", label: "Certified quality" },
    ],
    blocks: [
      {
        type: "text",
        heading: "The client",
        body: [
          "Steeltech Industries Ltd. has manufactured and exported stainless steel pipes since 2003, and today calls itself Bangladesh's No. 1 stainless steel pipe manufacturer. Its range covers twelve product lines — round, square box, rectangular box, half round, spiral and design pipes, plus SS sheet, rod, angle, flat bar, mixed pipe and schedule pipe.",
          "Its steel is in some of the country's most visible infrastructure: the Tejgaon–Bijoy Sharani Bypass, Hazrat Shahjalal International Airport, the Bangladesh Army Tent Project and North South University.",
        ],
      },
      {
        type: "text",
        heading: "The challenge",
        body: [
          "Steeltech sells to dealers, contractors, engineers and enterprise buyers — people who judge a supplier on proof, not adjectives. Before they pick up the phone they want to see certifications, capacity, process and references.",
          "The job was to build a website that feels as solid and premium as the product itself, makes a twelve-category catalogue effortless to browse, and puts that proof right up front.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/steeltech/legacy.jpg",
        caption:
          "“Our Legacy of Excellence” — the 2003 founding year and the landmark projects Steeltech has supplied.",
      },
      {
        type: "features",
        heading: "What we built",
        items: [
          {
            title: "A product catalogue that sells",
            body: "All twelve product categories, each with studio photography and a short description, browsable from the homepage and a dedicated Products page.",
          },
          {
            title: "Legacy and landmark projects",
            body: "An “Our Legacy of Excellence” section anchored by the 2003 founding year and photo cards for the landmark projects Steeltech has supplied.",
          },
          {
            title: "Strength in numbers",
            body: "An interactive map of Bangladesh showing 64-district coverage alongside 500+ dealers, 2,500+ employees, 24,000 tons of annual capacity and a 50,000 m² facility.",
          },
          {
            title: "The manufacturing process",
            body: "A step-by-step flow from coil slitting and pipe forming through automated QC, weight and count tracking, polishing and packing to delivery — each step paired with real factory photography.",
          },
          {
            title: "Clients and recognitions",
            body: "Client logos sit next to ISO 9001:2015, BSTI, BUET testing and government recognitions, so social proof and compliance land in a single glance.",
          },
          {
            title: "Gallery and contact",
            body: "A visual showcase of factory, product and event imagery plus promotional videos, and a footer with an embedded map, phone lines and email.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/steeltech/products.png",
        width: 3418,
        height: 1954,
        caption:
          "Product categories: a clean, white-studio catalogue that lets polished steel do the talking.",
      },
      {
        type: "image",
        src: "/images/case-studies/steeltech/numbers.png",
        width: 3420,
        height: 2214,
        caption: "Key company statistics, mapped across all 64 districts.",
      },
      {
        type: "text",
        heading: "Design approach",
        body: [
          "Steel is a material people judge by its finish, so the design had to feel engineered. We paired a high-contrast black hero with bright studio photography, used Steeltech orange as the single accent colour, and gave every section generous whitespace so polished metal reads as premium rather than industrial clutter.",
          "Bold, uppercase headlines carry the brand's confidence, while short supporting copy keeps the site scannable for busy buyers.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/steeltech/process.png",
        width: 3420,
        height: 2214,
        caption:
          "The process overview walks buyers from coil slitting to delivery.",
      },
      {
        type: "image",
        src: "/images/case-studies/steeltech/clients.png",
        width: 3420,
        height: 1428,
        caption:
          "Organisations that trust Steeltech, shown alongside its certifications.",
      },
      {
        type: "text",
        heading: "The outcome",
        body: [
          "Steeltech now has a website that matches the scale of its operation. Dealers, contractors and enterprise buyers can check the full product range, certifications, capacity and references before the first conversation — and arrive at that conversation already convinced.",
        ],
      },
    ],
  },
  {
    slug: "khar",
    name: "Khar",
    headline: "Building the digital home for Bangladesh's premier MMA promotion",
    excerpt:
      "Khar is bringing professional mixed martial arts to Dhaka. We built a platform with the same intensity as fight night — events, athletes, podcast, news and ticketing in one bold experience.",
    client: "Khar Fights",
    industry: "Sports & Entertainment",
    location: "Dhaka, Bangladesh",
    services: ["UX & UI design", "Web development", "Online ticketing"],
    link: "https://khar.co",
    cover: "/images/case-studies/khar/hero.jpg",
    accent: "#EF4444",
    facts: [
      { value: "2", label: "Flagship event series" },
      { value: "2× / month", label: "Khar Fights cards" },
      { value: "2–3 months", label: "Between Khar Nights" },
      { value: "5", label: "Core sections" },
    ],
    blocks: [
      {
        type: "text",
        heading: "The client",
        body: [
          "Khar is Bangladesh's premier mixed martial arts promotion, dedicated to showcasing the nation's top combat sports talent and lifting the local MMA scene to an international standard. Behind it is 1972Art39, a new-age cultural brand that blends the energy of combat sports with Dhaka's “underground” aesthetic.",
          "Khar runs two formats: Khar Nights, a premium event in a grand setup every two to three months, and Khar Fights, a regular card twice a month that gives emerging amateur fighters a professional stage.",
        ],
      },
      {
        type: "quote",
        text: "Their vision goes beyond sport — they aim to create a space where art, adrenaline, and authenticity collide.",
        cite: "Khar, “More Than a Fight Night”",
      },
      {
        type: "text",
        heading: "The challenge",
        body: [
          "MMA is still new to most Bangladeshi audiences. The website had two jobs: turn curious first-timers into ticket buyers, and give fans a place to follow fighters and events between cards.",
          "It also had to feel like Khar — loud, dark and raw — rather than a generic sports template.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/khar/story.jpg",
        caption:
          "“More Than a Fight Night” — the brand story, told over Khar Nights fight imagery.",
      },
      {
        type: "features",
        heading: "What we built",
        items: [
          {
            title: "An event-led homepage",
            body: "The next card takes over the hero — like Khar Fights 4 at The Bubbles, Mirpur-1 — followed by the kinetic line “Expect the unexpected. Feel the intensity. Experience the fury of combat.”",
          },
          {
            title: "Events hub",
            body: "Upcoming and past events in one place, so fans can find the next fight night and relive the last one.",
          },
          {
            title: "Athlete roster",
            body: "A fighter directory filterable by men and women, with each athlete's nationality, height, weight and a dedicated profile.",
          },
          {
            title: "Podcast",
            body: "Khar Nights faceoff episodes embedded from YouTube, keeping the build-up to each event on the site.",
          },
          {
            title: "About and news",
            body: "The brand story, leadership team, flagship events, core offerings and mission, plus a news section for announcements.",
          },
          {
            title: "Ticketing and payments",
            body: "Online ticket purchase through a local payment gateway, backed by the terms, refund and privacy policies that payments require.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/khar/tagline.jpg",
        caption:
          "Kinetic typography and fight-night photography set the tone the moment the page loads.",
      },
      {
        type: "image",
        src: "/images/case-studies/khar/athletes.jpg",
        caption: "The athlete roster gives every fighter a profile.",
      },
      {
        type: "text",
        heading: "Design approach",
        body: [
          "We built the visual language around fight night itself: a near-black canvas, Khar red as the only accent, heavy condensed display type, and gritty, high-contrast photography layered with smoke and ember textures.",
          "Navigation stays minimal so the posters and the fighters carry the page, and the ticket call to action is never more than a glance away.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/khar/podcast.jpg",
        caption: "Faceoff episodes from the Khar Nights podcast.",
      },
      {
        type: "image",
        src: "/images/case-studies/khar/about.jpg",
        caption: "“Bangladesh's Premier MMA Promotion” — the About page.",
      },
      {
        type: "text",
        heading: "The outcome",
        body: [
          "Khar has a single home for everything it does — events, fighters, podcast and tickets — with a visual identity as bold as the sport. Every new card slots straight into the platform, so the site grows with the promotion.",
        ],
      },
    ],
  },
  {
    slug: "discover-thailand",
    name: "Discover Thailand",
    headline:
      "From travel brief to bookable itinerary: building Discover Thailand's trip planner",
    excerpt:
      "Discover Thailand plans trips for travellers from India, Bangladesh and beyond. We built a booking platform that turns a short trip brief into a day-by-day itinerary from live hotel, activity and transfer inventory.",
    client: "Discover Thailand Co. Ltd.",
    industry: "AI & Travel",
    location: "Bangkok, Thailand",
    services: ["Product design", "Web app development", "Booking flow"],
    link: "https://discoverthailand.ai",
    cover: "/images/case-studies/discover-thailand/hero.jpg",
    accent: "#D946EF",
    facts: [
      { value: "4.9★", label: "Google rating" },
      { value: "436", label: "Google reviews" },
      { value: "3-step", label: "Planning flow" },
      { value: "10", label: "Service areas" },
    ],
    blocks: [
      {
        type: "text",
        heading: "The client",
        body: [
          "Discover Thailand Co. Ltd. is a Bangkok-based travel company that puts together packages, hotels, activities and transfers across Bangkok, Pattaya, Phuket, Krabi and Chiang Mai — for travellers from service areas that include Delhi, Dhaka, Singapore, Kuala Lumpur, Dubai and Toronto.",
          "Its reputation is built on hands-on, personal planning: the company holds a 4.9 rating from 436 Google reviews.",
        ],
      },
      {
        type: "text",
        heading: "The challenge",
        body: [
          "Personal service doesn't scale if every trip starts from a blank page. The goal was to bring Discover Thailand's planning online without losing its human touch — letting travellers build a complete trip, with hotels, activities and transfers timed around their flights, and only pay once the whole itinerary makes sense.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/discover-thailand/journey.jpg",
        caption:
          "Featured journeys lay out the route stop by stop — here, Bangkok & Pattaya Adventure over five days.",
      },
      {
        type: "features",
        heading: "What we built",
        items: [
          {
            title: "A trip planner",
            body: "A three-step flow — trip brief, choose inventory, review and book. Travellers pick places, dates, travellers and rooms, and a travel style from Smart value to Luxury, with optional flight details to time airport transfers.",
          },
          {
            title: "Live inventory matching",
            body: "The brief is matched to current hotels, activities, dining and transfers. Any recommendation can be removed or replaced, and nothing is charged until the full itinerary has been reviewed.",
          },
          {
            title: "Ready-made packages",
            body: "Multi-day journeys such as Bangkok & Pattaya Adventure – 5 Days, with the route stop by stop, a day-by-day itinerary, highlights, inclusions and room configuration.",
          },
          {
            title: "Hotels, activities and transfers",
            body: "Searchable catalogues for each part of a trip, with room types, location details and live availability where it exists.",
          },
          {
            title: "Built-in social proof",
            body: "Google reviews pulled straight onto the homepage, so travellers see what real families say before they plan.",
          },
          {
            title: "Accounts and cart",
            body: "Sign-in, sign-up and a cart that holds every part of a trip until it's ready to book.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/discover-thailand/planner.png",
        width: 3420,
        height: 1854,
        caption:
          "“Thailand, made personal.” — a few inputs become a complete trip brief.",
      },
      {
        type: "image",
        src: "/images/case-studies/discover-thailand/steps.png",
        width: 3418,
        height: 818,
        caption:
          "From idea to confirmed trip in four steps, with Google reviews right below.",
      },
      {
        type: "text",
        heading: "Design approach",
        body: [
          "We wanted it to read like a travel magazine and work like a booking engine. Serif italic headlines, warm cream backgrounds, deep green and saffron accents and large photography give it an editorial feel, while the planner, filters and itinerary views stay clear and practical.",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/discover-thailand/package.jpg",
        caption:
          "Package pages show the route, highlights and what's included before anyone books.",
      },
      {
        type: "image",
        src: "/images/case-studies/discover-thailand/hotels.jpg",
        caption: "“Hotels made easy to compare.”",
      },
      {
        type: "text",
        heading: "The outcome",
        body: [
          "Travellers can now go from a vague idea to a complete, bookable Thailand itinerary on their own — and Discover Thailand's team still steps in where it matters, with the personal service its reviews are known for.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return caseStudyArticles.find((a) => a.slug === slug);
}

export function readingMinutes(article: CaseStudyArticle) {
  const words = article.blocks
    .flatMap((b) =>
      b.type === "text"
        ? b.body
        : b.type === "features"
          ? b.items.flatMap((i) => [i.title, i.body])
          : b.type === "quote"
            ? [b.text]
            : [b.caption],
    )
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function headingId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
