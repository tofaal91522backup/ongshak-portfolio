import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Eye,
  Factory,
  Handshake,
  Hammer,
  Linkedin,
  Mail,
  Mic,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";
import Milestones from "@/features/marketting/_pages/about/Milestones";

const milestones = [
  { year: "2021", label: "Founded in Dhaka" },
  { year: "2022", label: "100th project delivered" },
  { year: "2023", label: "Drishti Technologies launched" },
  { year: "2024", label: "threadBridge SteelGuard shipped" },
  { year: "2025", label: "347+ projects milestone" },
  { year: "2026", label: "Global Change Award winner" },
];

const values = [
  {
    Icon: Hammer,
    title: "Craft Over Shortcuts",
    body: "We don't cut corners. Every line of code, every design decision, every deployment  done right.",
  },
  {
    Icon: Target,
    title: "Impact Over Vanity Metrics",
    body: "We measure success by outcomes delivered to our clients, not by the size of our team or the logos on our wall.",
  },
  {
    Icon: Handshake,
    title: "Partnership Over Transactions",
    body: "We're not here for one-off projects. We build long-term relationships with clients who want a technology partner that grows with them.",
  },
  {
    Icon: Sparkles,
    title: "Innovation as Standard",
    body: "AI, automation, and modern engineering aren't premium add-ons. They're how we build everything.",
  },
];

const ventures = [
  {
    Icon: Factory,
    name: "threadBridge",
    tag: "AI-Powered Quality Control",
    body: "Reducing material waste and building resilient supply chains for manufacturing. Our SteelGuard system deploys computer vision directly on factory floors.",
    link: "https://threadbridge.tech/",
    accent: "from-[#FFA605] to-[#FD7D18]",
  },
  {
    Icon: Eye,
    name: "Drishti Technologies",
    tag: "AI Assistive Technology",
    body: "Smart Cane and AI wearables for the visually impaired. Partnered with Robi Axiata, serving 717+ users across Bangladesh.",
    link: "https://drishti.today/",
    accent: "from-[#32C2D8] to-[#135DC9]",
  },
  {
    Icon: Award,
    name: "Khar Active",
    tag: "On-Demand Martial Arts & Fitness",
    body: "Connecting verified fighters with users for 1-on-1 training sessions. Defense, Discipline, Dignity.",
    link: "https://khar.co",
    accent: "from-[#FD7D18] to-[#135DC9]",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-slate-200">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-[#FFA605]/10 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-[#135DC9]/15 blur-[160px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
          <div
            className="pointer-events-none absolute inset-0 select-none"
            aria-hidden="true"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 700"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g mask="url(#edgeFade)" opacity="0.18">
                {/* ── Dot grid ── */}
                {Array.from({ length: 18 }, (_, row) =>
                  Array.from({ length: 28 }, (_, col) => (
                    <circle
                      key={`dot-${row}-${col}`}
                      cx={col * 46 + 10}
                      cy={row * 40 + 10}
                      r="1"
                      fill="#FFA605"
                      opacity="0.35"
                    />
                  )),
                )}

                {/* ── Large arc  top right ── */}
                <path
                  className="sk-line sk-pulse"
                  d="M 900 -60 Q 1150 200 1050 480"
                  stroke="#32C2D8"
                  strokeWidth="0.8"
                  style={{ animationDelay: "0.2s", animationDuration: "3s" }}
                />
                <path
                  className="sk-line sk-pulse"
                  d="M 950 -80 Q 1200 220 1100 500"
                  stroke="#32C2D8"
                  strokeWidth="0.5"
                  style={{ animationDelay: "0.4s", animationDuration: "3.2s" }}
                />

                {/* ── Circuit traces  horizontal ── */}
                <path
                  className="sk-line"
                  d="M 580 180 L 720 180 L 740 200 L 860 200"
                  stroke="#FFA605"
                  strokeWidth="0.9"
                  style={{ animationDelay: "0.6s" }}
                />
                <path
                  className="sk-line"
                  d="M 860 200 L 900 200 L 920 180 L 1060 180"
                  stroke="#FFA605"
                  strokeWidth="0.6"
                  style={{ animationDelay: "1s" }}
                />

                {/* ── Circuit traces  vertical branch ── */}
                <path
                  className="sk-line"
                  d="M 740 200 L 740 320 L 760 340 L 760 420"
                  stroke="#FFA605"
                  strokeWidth="0.7"
                  style={{ animationDelay: "1.2s" }}
                />
                <path
                  className="sk-line"
                  d="M 760 340 L 840 340 L 860 360 L 980 360"
                  stroke="#FFA605"
                  strokeWidth="0.6"
                  style={{ animationDelay: "1.4s" }}
                />

                {/* ── Diagonal sketch strokes ── */}
                <path
                  className="sk-line sk-pulse"
                  d="M 620 80 L 700 180"
                  stroke="white"
                  strokeWidth="0.5"
                  style={{ animationDelay: "0.8s" }}
                />
                <path
                  className="sk-line sk-pulse"
                  d="M 640 80 L 720 180"
                  stroke="white"
                  strokeWidth="0.3"
                  style={{ animationDelay: "0.9s" }}
                />

                {/* ── Hexagon outline  floating ── */}
                <g
                  className="sk-float"
                  style={{
                    transformOrigin: "1000px 150px",
                    animationDuration: "7s",
                  }}
                >
                  <path
                    d="M 1000 110 L 1035 130 L 1035 170 L 1000 190 L 965 170 L 965 130 Z"
                    fill="none"
                    stroke="#32C2D8"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                  <path
                    d="M 1000 120 L 1028 136 L 1028 168 L 1000 184 L 972 168 L 972 136 Z"
                    fill="none"
                    stroke="#32C2D8"
                    strokeWidth="0.4"
                    opacity="0.3"
                  />
                </g>

                {/* ── Small hex  bottom right ── */}
                <g
                  className="sk-float"
                  style={{
                    transformOrigin: "1100px 430px",
                    animationDuration: "9s",
                    animationDelay: "1s",
                  }}
                >
                  <path
                    d="M 1100 405 L 1122 417 L 1122 443 L 1100 455 L 1078 443 L 1078 417 Z"
                    fill="none"
                    stroke="#FFA605"
                    strokeWidth="0.7"
                    opacity="0.4"
                  />
                </g>

                {/* ── Cross / plus marks ── */}
                {[
                  [660, 320],
                  [820, 260],
                  [950, 310],
                  [1080, 240],
                ].map(([x, y], idx) => (
                  <g key={`cross-${idx}`} opacity="0.4">
                    <line
                      x1={x - 6}
                      y1={y}
                      x2={x + 6}
                      y2={y}
                      stroke="white"
                      strokeWidth="0.6"
                    />
                    <line
                      x1={x}
                      y1={y - 6}
                      x2={x}
                      y2={y + 6}
                      stroke="white"
                      strokeWidth="0.6"
                    />
                  </g>
                ))}

                {/* ── Animated nodes on circuit intersections ── */}
                {[
                  { cx: 740, cy: 200, color: "#FFA605", delay: "1.3s" },
                  { cx: 860, cy: 200, color: "#FFA605", delay: "1.5s" },
                  { cx: 760, cy: 340, color: "#FFA605", delay: "1.7s" },
                  { cx: 980, cy: 360, color: "#32C2D8", delay: "1.9s" },
                  { cx: 720, cy: 180, color: "#FFA605", delay: "1.1s" },
                ].map((n, i) => (
                  <g key={`node-${i}`}>
                    <circle
                      className="sk-node"
                      cx={n.cx}
                      cy={n.cy}
                      r="3"
                      fill={n.color}
                      style={{ animationDelay: n.delay }}
                    />
                    {/* Outer ring */}
                    <circle
                      className="sk-node sk-pulse"
                      cx={n.cx}
                      cy={n.cy}
                      r="7"
                      fill="none"
                      stroke={n.color}
                      strokeWidth="0.6"
                      style={{ animationDelay: n.delay }}
                    />
                  </g>
                ))}

                {/* ── Scattered small squares ── */}
                {[
                  [610, 400, 8],
                  [870, 450, 6],
                  [1040, 390, 10],
                  [690, 480, 7],
                ].map(([x, y, s], i) => (
                  <rect
                    key={`sq-${i}`}
                    x={x - s / 2}
                    y={y - s / 2}
                    width={s}
                    height={s}
                    fill="none"
                    stroke="#32C2D8"
                    strokeWidth="0.6"
                    opacity="0.35"
                    transform={`rotate(15, ${x}, ${y})`}
                  />
                ))}

                {/* ── Long horizontal rule ── */}
                <line
                  x1="580"
                  y1="560"
                  x2="1150"
                  y2="560"
                  stroke="white"
                  strokeWidth="0.4"
                  strokeDasharray="4 8"
                  opacity="0.2"
                />
              </g>
            </svg>
          </div>

          {/* ── Content ── */}
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFA605]">
              About Ongshak
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
              We build things that{" "}
              <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
                matter.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Technology partners, not vendors. A Dhaka-built studio shipping
              AI, software, and hardware for clients across 12+ industries.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="grid gap-12 border-t border-white/10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              width={500}
              height={600}
              src="/images/hero/ongshak-logo.png"
              alt="Our Story"
              className="h-auto w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#FFA605]/20 via-[#FD7D18]/10 to-[#135DC9]/20 object-cover"
              unoptimized
            />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-400 md:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              Started in 2021 with a simple belief.
            </h2>
            <p>
              Ongshak started in 2021 with a simple belief: businesses in
              Bangladesh deserve technology partners, not vendors.
            </p>
            <p>
              We began as a small team of engineers and designers who were tired
              of seeing projects fail not because of bad ideas, but because of
              poor execution. So we built a company around doing things right.
            </p>
            <p>
              Five years and 347+ projects later, we&apos;ve worked with
              startups, enterprises, NGOs, and government agencies across 12+
              industries. We&apos;ve built AI systems for factory floors,
              assistive devices for the visually impaired, and digital products
              used across multiple countries.
            </p>
            <p>
              But we&apos;re not just a services company. Ongshak is the
              launchpad for three technology ventures —{" "}
              <span className="text-white">threadBridge</span>,{" "}
              <span className="text-white">Drishti Technologies</span>, and{" "}
              <span className="text-white">Khar Active</span> each solving real
              problems with technology.
            </p>
            <p className="text-white">
              We build things that matter. That&apos;s the job.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <Milestones />

        {/* Leadership */}
        <section className="border-t border-white/10 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]">
            Leadership
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white">
            The people behind the work.
          </h2>

          <div className="mt-14 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdro-blur-md md:grid-cols-12 md:p-12">
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#FFA605]/20 via-[#FD7D18]/10 to-[#135DC9]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    width={400}
                    height={500}
                    src="/images/ridwan.png"
                    alt="Ridwan Hossain"
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <h3 className="font-serif text-3xl text-white">Ridwan Hossain</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#FFA605]">
                Managing Director
              </p>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  Ridwan is a technology entrepreneur running three ventures
                  from Dhaka. As Managing Director of Ongshak, he leads a team
                  that has delivered 347+ projects since 2021.
                </p>
                <p>
                  As Co-founder of{" "}
                  <span className="text-white">threadBridge</span>, he builds
                  AI-powered quality control systems for industrial
                  manufacturing. As Founder & CEO of{" "}
                  <span className="text-white">Drishti Technologies</span>, he
                  develops AI assistive devices for the visually impaired in
                  partnership with Robi Axiata.
                </p>
                <p>
                  He is a{" "}
                  <span className="text-white">
                    2026 Global Change Award winner
                  </span>{" "}
                  (H&M Foundation) and a speaker at the Global Fashion Summit in
                  Copenhagen.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/ongshak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition-all hover:border-[#135DC9]/50 hover:bg-[#135DC9]/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:hello@ongshak.com"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition-all hover:border-[#FFA605]/50 hover:bg-[#FFA605]/10"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-white/10 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]">
            Our Values
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white">
            What we stand on.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrp-blur-md transition-all hover:border-[#FFA605]/40 hover:bg-white/[0.05]"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#FFA605]/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#FFA605]/20 to-[#FD7D18]/10 text-[#FFA605]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ventures */}
        <section className="border-t border-white/10 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]">
            Sister Ventures
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl text-white">
            An ecosystem of products solving real problems.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ventures.map(({ Icon, name, tag, body, link, accent }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 bacdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-black shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">{name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#FFA605]">
                  {tag}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                  Visit site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#FFA605]/10 via-transparent to-[#135DC9]/10 p-12 md:p-16">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFA605]/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#135DC9]/20 blur-3xl" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="font-serif text-3xl text-white md:text-4xl">
                  Want a partner that builds it right?
                </h3>
                <p className="mt-3 text-slate-400">
                  Let&apos;s talk about what you&apos;re building.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FFA605] to-[#FD7D18] px-7 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-[0_10px_40px_-10px_rgba(255,166,5,0.6)] transition-all hover:shadow-[0_15px_50px_-10px_rgba(255,166,5,0.9)]"
              >
                Book a Meeting
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
