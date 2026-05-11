// app/work/page.tsx
"use client";

import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Category =
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

const categories: Category[] = [
  "All",
  "Social Impact",
  "Innovation & Startups",
  "Investment & Finance",
  "AI & Travel",
  "Enterprise & ERP",
  "Climate & Sustainability",
];

type Project = {
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

const projects: Project[] = [
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
      why: "Demonstrates Ongshak's ability to deliver AI-integrated consumer products for international markets  not a brochure site, a working AI application.",
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
  {
    name: "Hanzo ERP",
    client: "Water Purifier Service & Rental",
    category: "Enterprise & ERP",
    tag: "Enterprise & ERP",
    description:
      "Cloud-hosted ERP delivered in 4 weeks  service scheduling, inventory, double-entry accounting, and real-time KPI dashboards.",
    image: "", // 👈 add image link
    accent: "from-violet-400/25 to-purple-500/5",
    ring: "ring-violet-400/20",
    badgeColor: "text-violet-300 border-violet-300/30",
    featured: true,
    details: {
      what: "A comprehensive ERP for a water purifier service and rental business  managing service scheduling, machine registration, rental billing, inventory, double-entry accounting, and real-time dashboards.",
      built:
        "Secure, cloud-hosted ERP on Django 5 + DRF and Next.js 14. Delivered in 4 weeks across 5 modules: Service, Inventory, Accounting, Dashboards, and Security & Compliance. Dockerised on a BD data-centre VPS with staging + production.",
      why: "Showcases end-to-end product engineering  RBAC, accounting engine, inventory, real-time dashboards, and production deployment  in just 4 weeks.",
      metrics: [
        "4-week delivery",
        "5 modules shipped",
        "RBAC + encrypted backups",
      ],
    },
  },
];

const stats = [
  { value: "347+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "12+", label: "Industries" },
  { value: "5+", label: "Countries" },
  { value: "2021", label: "Building Since" },
];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-[380px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto container px-6 pt-28 pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            Selected Work
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Work That{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-blue-300 bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            From social impact platforms to AI-powered travel tools to
            enterprise ERP systems we build technology that works in the real
            world.
          </p>
          <section className="mx-auto container px-6 pt-20">
            <div className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:grid-cols-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`text-center ${
                    s.value === "2021" ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {s.value}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="mx-auto container px-6 py-20">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-amber-300/50 bg-amber-300/10 text-amber-200"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} p-8 ring-1 ${p.ring} transition-all hover:border-white/20`}
            >
              {/* thumbnail */}
              <div className="mb-6 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${p.accent} flex items-center justify-center`}
                  >
                    <span className="text-2xl font-semibold tracking-tight text-white/80">
                      {p.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${p.badgeColor}`}
                >
                  {p.tag}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/60 transition-colors hover:text-white"
                  >
                    Live <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/50">{p.client}</p>
              <p className="mt-4 text-white/70">{p.description}</p>

              {p.details?.metrics && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.details.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
          <p className="text-white/70">
            And many more <span className="text-white">347+ projects</span>{" "}
            delivered since 2021.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
          >
            Ask for the full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FEATURED DEEP DIVES */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto container px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-white/60">
              A closer look at six projects that show our range.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual side */}
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} ring-1 ${p.ring}`}
                >
                  {p.image ? (
                    <Image
                      width={800}
                      height={600}
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-semibold tracking-tight">
                          {p.name}
                        </div>
                        <div className="mt-2 text-sm text-white/60">
                          {p.client}
                        </div>
                      </div>
                    </div>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60"
                    >
                      Visit live <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                {/* Content side */}
                <div>
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${p.badgeColor}`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    {p.name}
                  </h3>

                  {p.details && (
                    <div className="mt-6 space-y-5 text-white/70">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                          What it is
                        </div>
                        <p className="mt-2">{p.details.what}</p>
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                          What we built
                        </div>
                        <p className="mt-2">{p.details.built}</p>
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                          Why it matters
                        </div>
                        <p className="mt-2">{p.details.why}</p>
                      </div>

                      {p.details.metrics && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {p.details.metrics.map((m) => (
                            <span
                              key={m}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
