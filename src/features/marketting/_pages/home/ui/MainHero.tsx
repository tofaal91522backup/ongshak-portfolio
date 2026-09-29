"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Fine film grain. Keeps the flat background from reading as a plain dark div at
// large sizes, which is what made the old gradient stack look cheap.
const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Names, categories and live URLs all come from the same list the /work page
// renders, so the hero and the work page never drift apart.
const projects = [
  {
    index: "01",
    name: "Steeltech Industries Ltd.",
    category: "Manufacturing",
    image: "/images/work/steeltech.png",
    href: "https://www.steeltech-bd.com/",
  },
  {
    index: "02",
    name: "Drishti",
    category: "Assistive Technology",
    image: "/images/work/drishti.png",
    href: "https://drishti.today/",
  },
  {
    index: "03",
    name: "Build Bangladesh",
    category: "Social Impact",
    image: "/images/work/build-bd.png",
    href: "https://buildbangladesh.com.bd",
  },
  {
    index: "04",
    name: "Discover Thailand",
    category: "AI & Travel",
    image: "/images/work/discover-thailand.png",
    href: "https://discoverthailand.ai",
  },
];

const ROTATE_MS = 4500;

export default function MainHero() {
  const [active, setActive] = useState(0);
  // Hovering the list takes over from the timer, so a project never slides out
  // from under someone who is reading it.
  const [paused, setPaused] = useState(false);

  const current = projects[active];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setActive((i) => (i + 1) % projects.length),
      ROTATE_MS,
    );

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#0b0d12] text-[#f4f1ea]">
      {/* Two very low-opacity light sources so the field reads as a lit room
          rather than as flat black — kept under 12% to avoid the muddy wash the
          old six-layer gradient stack produced. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_85%_at_74%_4%,rgba(255,166,5,0.11),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_70%_at_4%_98%,rgba(46,116,205,0.12),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[9vw] pt-[11vh] pb-[7vh] md:py-[11vh]">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:gap-[5vw]">
          {/* ---- Left: nothing overlaps the type, it reads in full ---- */}
          <div className="md:w-[42%] md:shrink-0">
            <h1 className="font-display text-[clamp(2.3rem,4.6vw,4.4rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="ed-line ed-d1 block">Engineering</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="ed-line ed-d2 block italic text-[#e8e2d6]">
                  without shortcuts
                  <span className="not-italic text-[#FFA605]">.</span>
                </span>
              </span>
            </h1>

            <p className="ed-soft ed-d3 mt-6 max-w-[34ch] text-[0.82rem] leading-[1.7] text-white/55 md:mt-7 md:text-[0.86rem]">
              We build software, AI systems and digital products for companies
              that need things done right — from MVPs to enterprise platforms.
            </p>

            <div className="ed-soft ed-d4 mt-8 flex flex-col gap-5 md:mt-9">
              <Link
                href="/contact"
                className="group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-[#f4f1ea] py-2 pr-2 pl-7 text-[0.82rem] font-medium tracking-[-0.01em] text-[#0b0d12] shadow-[0_18px_40px_-24px_rgba(244,241,234,0.55)] transition-shadow duration-500 hover:shadow-[0_22px_50px_-22px_rgba(50,194,216,0.65)] focus-visible:ring-2 focus-visible:ring-[#32C2D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d12] focus-visible:outline-none"
              >
                {/* Plays once on load: orange crosses the button and parks off
                    the right edge, showing what the button does before anyone
                    touches it. */}
                <span
                  aria-hidden
                  className="ed-sweep-once pointer-events-none absolute inset-0 -translate-x-full bg-[#FFA605]"
                />

                {/* Hover gets its own colour so a second pass never repeats the
                    intro. Text stays dark on both, so contrast never drops. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-[#32C2D8] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                />

                <span className="relative z-10">Start a Conversation</span>

                {/* One arrow leaves to the right while its twin arrives from the
                    left, so the mark never appears to jump. */}
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0b0d12] text-[0.9rem] text-[#f4f1ea]">
                  <span
                    aria-hidden
                    className="absolute transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[180%]"
                  >
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute -translate-x-[180%] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                  >
                    →
                  </span>
                </span>
              </Link>

              <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
                Est. 2021 — Dhaka · 347+ products shipped
              </p>
            </div>
          </div>

          {/* ---- Right: the actual work, cycling one by one ---- */}
          <div className="min-w-0 flex-1 md:border-l md:border-white/10 md:pl-[4vw]">
            <div className="ed-soft ed-d3 flex items-baseline justify-between border-b border-white/10 pb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/35">
              <span>Selected work</span>
              <span>2021 — 2025</span>
            </div>

            {/* Every shot is stacked and cross-faded, so switching project is a
                compositor-only opacity change with no layout work. Runs past the
                frame so the composition is not a closed box. */}
            <a
              href={current.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${current.name}`}
              className="ed-frame ed-d4 group relative mt-5 block aspect-[2/1] overflow-hidden bg-[#0d0f14] md:mt-6 md:aspect-[16/9] md:-mr-[9vw]"
            >
              {projects.map((project, i) => (
                <Image
                  key={project.image}
                  src={project.image}
                  alt={`${project.name} — built by Ongshak`}
                  fill
                  sizes="(max-width: 768px) 92vw, 55vw"
                  priority={i === 0}
                  loading="eager"
                  fetchPriority={i === 0 ? "auto" : "low"}
                  className={`object-cover object-top transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:brightness-110 ${
                    i === active
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              {/* Flat until hover, then it names where the click goes. */}
              <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-[#0b0d12]/25" />
              <span className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 bg-[#0b0d12]/85 px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Visit site
                <span aria-hidden>↗</span>
              </span>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-white/25" />
            </a>

            <ul className="mt-2" onMouseLeave={() => setPaused(false)}>
              {projects.map((project, i) => (
                <li key={project.index}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    onFocus={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    className="group relative flex items-baseline gap-4 border-b border-white/10 py-2.5 transition-colors duration-300 hover:border-white/30 md:py-3"
                  >
                    <span
                      className={`font-mono text-[0.6rem] tracking-[0.18em] transition-colors duration-500 ${
                        i === active ? "text-[#FFA605]" : "text-white/30"
                      }`}
                    >
                      {project.index}
                    </span>
                    <span
                      className={`flex-1 truncate text-[0.95rem] tracking-[-0.01em] transition-all duration-500 group-hover:translate-x-1 ${
                        i === active ? "text-white" : "text-white/55"
                      }`}
                    >
                      {project.name}
                    </span>
                    <span
                      className={`hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] transition-colors duration-500 sm:block ${
                        i === active ? "text-white/60" : "text-white/25"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span
                      aria-hidden
                      className={`transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-[#FFA605] ${
                        i === active ? "text-[#FFA605]" : "text-white/25"
                      }`}
                    >
                      ↗
                    </span>

                    {/* Timer rule — shows how long this project has left. */}
                    {i === active && !paused && (
                      <span
                        key={active}
                        aria-hidden
                        className="absolute -bottom-px left-0 h-px w-full origin-left bg-[#FFA605]/70"
                        style={{
                          animation: `ed-progress ${ROTATE_MS}ms linear both`,
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="ed-soft ed-d6 mt-4 flex justify-end md:mt-5">
              <Link
                href="/work"
                className="group font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                View all work
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
