// app/work/page.tsx
"use client";

import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { CloudShader } from "@/components/ui/cloud-shader";
import {
  type Category,
  categories,
  projects,
} from "@/features/marketting/_pages/work/projects";

const stats = [
  { value: "347+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "12+", label: "Industries" },
  { value: "5+", label: "Countries" },
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
        <CloudShader
          className="absolute inset-0 min-h-0"
          speed={1.2}
          count={6}
          cloudColor="#3a4d6e"
          skyTopColor="#05070d"
          skyBottomColor="#0e1d38"
        />
        {/* Fade the sky into the page so the hero edge doesn't show */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070d]/40 via-transparent to-[#05070d]" />
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
            <div className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
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
