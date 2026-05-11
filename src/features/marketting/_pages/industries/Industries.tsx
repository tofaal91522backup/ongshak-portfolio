import {
  Factory,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingBag,
  HandHeart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    description:
      "AI-powered quality control, predictive maintenance, and supply chain optimisation for factories and production lines.",
    work: "SteelGuard by threadBridge (steel pipe QC), SteelTech Industries digital presence",
    cta: "Building for manufacturing? Let's talk AI-powered QC.",
  },
  {
    icon: HeartPulse,
    name: "Assistive Technology & Health",
    description:
      "Smart devices and software for healthcare providers, patients, and people with disabilities.",
    work: "Drishti Smart Cane, Drishti Smart Glasses, partnership with Robi Axiata and Ispahani Islamia Eye Institute",
    cta: "Building assistive or health tech? We've been there.",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    description:
      "Learning management systems, digital classrooms, and educational platforms.",
    work: "Vida Verde LMS, digital archiving platform for media/education",
    cta: "Transforming education with technology? Let's talk.",
  },
  {
    icon: Landmark,
    name: "Fintech & Banking",
    description:
      "Queue management, digital banking interfaces, payment integrations, and financial workflow automation.",
    work: "QueueSmart (bank pilots in Dhaka)",
    cta: "Modernising financial services? We build secure, scalable systems.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description:
      "Online stores, inventory systems, POS integrations, and customer experience platforms.",
    work: "Multiple e-commerce builds across the 347+ project portfolio",
    cta: "Selling online? We build stores that convert.",
  },
  {
    icon: HandHeart,
    name: "NGO & Social Impact",
    description:
      "Technology for organisations driving social change  beneficiary tracking, impact measurement, and community platforms.",
    work: "Drishti's District Ambassador Program, social impact angle of Khar Active",
    cta: "Driving impact with technology? We share that mission.",
  },
];

function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Hero */}
      <section className="relative mx-auto container px-6 pt-32 pb-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 ">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          Industries
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
          Technology That{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-blue-400 bg-clip-text text-transparent">
            Understands
          </span>{" "}
          Your Industry
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          We don&apos;t do one-size-fits-all. Every industry has unique
          constraints, regulations, and workflows. We build with that context.
        </p>
      </section>

      {/* Industries grid */}
      <section className="relative mx-auto container px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7  transition hover:border-amber-400/40"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-blue-400/20 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold">{ind.name}</h2>
                  <p className="mt-3 text-white/60">{ind.description}</p>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <span className="text-xs uppercase tracking-wider text-amber-300/80">
                      Relevant work
                    </span>
                    <p className="mt-1.5 text-sm text-white/70">{ind.work}</p>
                  </div>

                  <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                    <p className="text-sm italic text-white/50">{ind.cta}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default IndustriesPage;
