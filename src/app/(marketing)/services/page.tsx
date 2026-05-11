// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Brain,
  Palette,
  Cloud,
  ShieldCheck,
  Compass,
  Search,
  PenTool,
  Hammer,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Product Engineering",
    desc: "We build digital products from zero to production. Our engineering teams handle architecture, development, testing, and deployment  so you focus on your business, not your codebase.",
    items: [
      "Web Application Development (React, Next.js, Django, Laravel)",
      "Mobile App Development (Flutter, React Native, Native iOS/Android)",
      "SaaS Platform Development",
      "MVP / Prototype Development",
      "API Development & Integration",
      "Legacy System Modernisation",
    ],
    accent: "from-amber-400/20 to-amber-500/5",
    ring: "ring-amber-400/20",
    iconColor: "text-amber-300",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "We build AI that works in the real world  on factory floors, in healthcare systems, and inside business workflows.",
    items: [
      "Computer Vision (defect detection, object recognition, image classification)",
      "Natural Language Processing (chatbots, document analysis, sentiment analysis)",
      "Predictive Analytics & Forecasting",
      "Intelligent Automation & RPA",
      "AI Strategy & Feasibility Assessment",
      "MLOps & Model Deployment",
    ],
    accent: "from-blue-400/20 to-blue-500/5",
    ring: "ring-blue-400/20",
    iconColor: "text-blue-300",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces that work as good as they look. We design for usability, accessibility, and conversion.",
    items: [
      "User Research & Journey Mapping",
      "Wireframing & Prototyping",
      "Visual Design & Design Systems",
      "Usability Testing",
      "Responsive & Adaptive Design",
    ],
    accent: "from-fuchsia-400/20 to-fuchsia-500/5",
    ring: "ring-fuchsia-400/20",
    iconColor: "text-fuchsia-300",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "Reliable infrastructure, automated pipelines, and scalable architecture.",
    items: [
      "AWS / GCP / Azure Setup & Management",
      "CI/CD Pipeline Configuration",
      "Containerisation (Docker, Kubernetes)",
      "Monitoring & Incident Response",
      "Infrastructure as Code",
    ],
    accent: "from-cyan-400/20 to-cyan-500/5",
    ring: "ring-cyan-400/20",
    iconColor: "text-cyan-300",
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    desc: "We catch what others miss. Automated and manual testing that ensures your product ships clean.",
    items: [
      "Manual & Automated Testing",
      "Performance & Load Testing",
      "Security Testing",
      "Test Strategy & Planning",
      "Regression & Compatibility Testing",
    ],
    accent: "from-emerald-400/20 to-emerald-500/5",
    ring: "ring-emerald-400/20",
    iconColor: "text-emerald-300",
  },
  {
    icon: Compass,
    title: "Consulting & Strategy",
    desc: "Technology decisions with lasting impact. We help you choose the right stack, the right architecture, and the right approach.",
    items: [
      "Technical Due Diligence",
      "Product Roadmapping",
      "Technology Stack Assessment",
      "Digital Transformation Strategy",
      "Process Audit & Optimisation",
    ],
    accent: "from-rose-400/20 to-rose-500/5",
    ring: "ring-rose-400/20",
    iconColor: "text-rose-300",
  },
];

const process = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We listen, research, and define the problem before writing a single line of code.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Wireframes, prototypes, and architecture decisions. You see and approve before we build.",
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Agile sprints, regular demos, transparent progress. You’re never in the dark.",
  },
  {
    icon: Rocket,
    title: "Launch + Support",
    desc: "Deployment, monitoring, iteration. We don’t disappear after launch.",
  },
];

const webTechs = [
  { name: "Next.js", icon: "/images/tech-icons/nextjs.svg" },
  { name: "Django", icon: "/images/tech-icons/django.svg" },
  { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.svg" },
  { name: "AWS", icon: "/images/tech-icons/aws.svg" },
  { name: "AWS Lambda", icon: "/images/tech-icons/aws-lambda.svg" },
  { name: "Nginx", icon: "/images/tech-icons/nginx.svg" },
  { name: "Firebase", icon: "/images/tech-icons/firebase.svg" },
];

const mobileTechs = [
  { name: "React Native", icon: "/images/tech-icons/react.svg" },
  { name: "Flutter", icon: "/images/tech-icons/flutter.svg" },
];

const embeddedTechs = [
  { name: "STM32", icon: "/images/tech-icons/stm32.svg" },
  { name: "Arduino", icon: "/images/tech-icons/arduino.svg" },
  { name: "Raspberry Pi", icon: "/images/tech-icons/raspberry-pi.svg" },
  { name: "Jetson Nano", icon: "/images/tech-icons/nvidia.svg" },
  { name: "PlatformIO", icon: "/images/tech-icons/platformio.svg" },
];

const models = [
  {
    title: "Project-Based",
    desc: "Fixed scope, fixed timeline, fixed budget.",
    bestFor: "Well-defined projects, MVPs, one-time builds.",
    badge: "Model 1",
  },
  {
    title: "Dedicated Team",
    desc: "Your team, our talent. Engineers embedded in your workflow.",
    bestFor: "Ongoing product development, scaling fast.",
    badge: "Model 2",
    featured: true,
  },
  {
    title: "Staff Augmentation",
    desc: "Fill skill gaps without the hiring overhead.",
    bestFor: "Short-term needs, specialised expertise, surge capacity.",
    badge: "Model 3",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-[380px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto container px-6 pt-28 pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Services
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-blue-300 bg-clip-text text-transparent">
              Technology Services
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            From strategy to deployment, we cover every layer of the stack.
            Whether you need a full product build, an AI solution, or a
            dedicated team extension we’ve done it{" "}
            <span className="text-white">347+ times</span>.
          </p>
          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative text-center">
                    <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-[#05070d] text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="mx-auto container px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${s.accent} p-8 ring-1 ${s.ring} transition-all hover:border-white/20`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className={`h-6 w-6 ${s.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="mt-5 text-white/70">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${s.iconColor}`}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      {/* <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto container px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">How We Work</h2>
            <p className="mt-3 text-white/60">
              A clear path from idea to launch  and beyond.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative text-center">
                    <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-[#05070d] text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* TECH STACK */}
      <section className="mx-auto container px-6 py-24" id="stack">
        <div className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">Tech Stack</h2>
          <p className="mt-3 bg-gradient-to-r from-[#FFA605]/70 via-white/60 to-[#32C2D8]/70 bg-clip-text text-transparent">
            The tools we reach for, grouped by layer.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12 max-w-3xl mx-auto">
          {/* Web */}
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 text-[#32C2D8]">
              Web
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-7">
              {webTechs.map((tech) => (
                <TechIcon key={tech.name} src={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 text-[#FFA605]">
              Mobile
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-7">
              {mobileTechs.map((tech) => (
                <TechIcon key={tech.name} src={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Embedded & IoT */}
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 text-[#FD7D18]">
              Embedded &amp; IoT
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-7">
              {embeddedTechs.map((tech) => (
                <TechIcon key={tech.name} src={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto container px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Engagement Models
            </h2>
            <p className="mt-3 text-white/60">
              Three ways to work with us. Pick what fits.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.title}
                className={`relative rounded-2xl border p-8 transition-all ${
                  m.featured
                    ? "border-amber-300/40 bg-gradient-to-br from-amber-400/10 to-blue-500/5"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-[#05070d]">
                    Most Popular
                  </span>
                )}
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">
                  {m.badge}
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-white/70">{m.desc}</p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Best for
                  </div>
                  <p className="mt-2 text-sm text-white/80">{m.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TechIcon({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 w-12 sm:w-16">
      <Image
        src={src}
        alt={name}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
      <span className="text-[9px] sm:text-[11px] text-center leading-tight text-white/65">
        {name}
      </span>
    </div>
  );
}
