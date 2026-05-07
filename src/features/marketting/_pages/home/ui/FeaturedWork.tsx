import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { featuredProjects } from "../data/site";

const accents = [
  {
    gradient: "from-[#FFA605] to-[#FD7D18]",
    glow: "rgba(255,166,5,0.35)",
    text: "text-[#FFA605]",
    chip: "bg-[#FFA605]/10 text-[#FFA605] border-[#FFA605]/20",
    ring: "shadow-[0_20px_60px_-20px_rgba(255,166,5,0.5)]",
  },
  {
    gradient: "from-[#135DC9] to-[#007AFF]",
    glow: "rgba(0,122,255,0.35)",
    text: "text-[#32C2D8]",
    chip: "bg-[#007AFF]/10 text-[#32C2D8] border-[#007AFF]/20",
    ring: "shadow-[0_20px_60px_-20px_rgba(0,122,255,0.5)]",
  },
  {
    gradient: "from-[#32C2D8] to-[#135DC9]",
    glow: "rgba(50,194,216,0.35)",
    text: "text-[#32C2D8]",
    chip: "bg-[#32C2D8]/10 text-[#32C2D8] border-[#32C2D8]/20",
    ring: "shadow-[0_20px_60px_-20px_rgba(50,194,216,0.5)]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] py-28 text-white">
      {/* Ambient brand glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#FFA605]/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#135DC9]/20 blur-[160px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFA605] shadow-[0_0_12px_#FFA605]" />
              Featured Work
            </div>

            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Real products.{" "}
              <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
                Real outcomes.
              </span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const accent = accents[index % accents.length];

            return (
              <div
                key={project.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]  transition-all  `}
              >
                {/* Hover gradient ring */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${accent.glow}, transparent 60%)`,
                  }}
                />

                {/* Image */}
                <div className="relative h-[360px] overflow-hidden bg-[#070b14]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-20 mix-blend-overlay`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />

                  {/* Number + arrow */}
                  <div className="absolute inset-0 flex items-end justify-between p-5">
                    <p className="font-serif text-6xl leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                      0{index + 1}
                    </p>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/20">
                      <ArrowRight className="h-4 w-4 -rotate-45 text-white transition-transform duration-500 group-hover:rotate-0" />
                    </div>
                  </div>

                  {/* Industry chip floating on image */}
                  <div className="absolute left-5 top-5">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${accent.chip}`}
                    >
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Outcome
                    </p>
                    <p className={`mt-1 text-sm font-semibold ${accent.text}`}>
                      {project.metric}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center justify-center flex w-full mt-12 gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#32C2D8]/60 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(50,194,216,0.5)] md:self-auto"
        >
          View all work
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
