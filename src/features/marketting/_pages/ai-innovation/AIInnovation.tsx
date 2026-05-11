"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  MessageSquare,
  TrendingUp,
  Workflow,
  Cpu,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Mic,
  Award,
  FileText,
} from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "From defect detection on steel pipes to object recognition in assistive devices. We build vision systems that see what humans miss.",
    deployed: ["SteelGuard (threadBridge)", "Drishti Smart Glasses"],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Document analysis, chatbots, sentiment analysis, and text extraction. We build language understanding into products.",
    deployed: [],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecasting demand, predicting failures, and optimising operations with data-driven models.",
    deployed: [],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "End-to-end automation of manual processes  from data entry to quality control to reporting.",
    deployed: [],
  },
  {
    icon: Cpu,
    title: "MLOps & Deployment",
    description:
      "We don't just build models. We deploy, monitor, retrain, and maintain them in production.",
    deployed: [],
  },
];

const products = [
  {
    name: "SteelGuard",
    by: "by threadBridge",
    description:
      "AI quality control device for steel pipe manufacturing. Computer vision detects welding defects in real time. Deployed on factory machines.",
    tag: "Computer Vision · Manufacturing",
  },
  {
    name: "QueueSmart",
    by: "",
    description:
      "QR-based queue management SaaS replacing hardware token machines. PWA-first, multi-industry.",
    tag: "SaaS · PWA",
  },
  {
    name: "Khar Active",
    by: "",
    description:
      "On-demand martial arts and fitness training platform. Matching algorithm connects verified fighters with users.",
    tag: "Marketplace · Matching",
  },
  {
    name: "Drishti Wearables",
    by: "",
    description:
      "AI-enabled Smart Cane and Smart Glasses for visually impaired users. Pivoting to necklace-style wearable with expanded AI.",
    tag: "Assistive Tech · Hardware + AI",
  },
];

const thoughtLeadership = [
  {
    icon: Mic,
    title: "Global Fashion Summit 2026 (Copenhagen)",
    detail: "Speaker: AI for Supply Chain Optimisation",
  },
  {
    icon: Award,
    title: "2026 Global Change Award Winner",
    detail: "H&M Foundation",
  },
  {
    icon: FileText,
    title: "WYDF Acceleration Week",
    detail: "Program Progress Report on AI Assistive Technology",
  },
];

export default function AIInnovation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Hero */}
      <section className="relative mx-auto container px-6 pt-32 pb-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 ">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          AI & Innovation
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
          Intelligence,{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-blue-400 bg-clip-text text-transparent">
            Deployed.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          We build AI systems that work in the real world on factory floors, in
          healthcare, and inside business workflows. Not demos. Not decks.
          Deployed systems with measurable impact.
        </p>
      </section>

      {/* Capabilities  accordion */}
      <section className="relative mx-auto container px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">AI Capabilities</h2>
          <p className="mt-3 text-white/50">
            Every capability backed by real deployments.
          </p>
        </div>

        <div className="space-y-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={cap.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]  transition hover:border-amber-400/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/20 to-blue-400/20 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-amber-300" />
                    </div>
                    <span className="text-lg font-semibold">{cap.title}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-white/50 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-white/5 px-6 py-5">
                    <p className="text-white/70">{cap.description}</p>
                    {cap.deployed.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-white/40">
                          Deployed:
                        </span>
                        {cap.deployed.map((d) => (
                          <span
                            key={d}
                            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="relative mx-auto container px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Innovation Lab</h2>
          <p className="mt-4 text-lg text-white/60">
            Ongshak isn&apos;t just a services company. We build our own
            products and that&apos;s what makes us better at building yours.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7  transition hover:border-amber-400/40"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="text-xs uppercase tracking-wider text-amber-300/80">
                  {p.tag}
                </span>
                <h3 className="mt-3 flex items-baseline gap-2 text-2xl font-bold">
                  {p.name}
                  {p.by && (
                    <span className="text-sm font-normal text-white/40">
                      {p.by}
                    </span>
                  )}
                </h3>
                <p className="mt-3 text-white/60">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Thought Leadership</h2>
          <p className="mt-4 text-white/60">
            Our team doesn&apos;t just build we contribute to the conversation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/40 via-white/10 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {thoughtLeadership.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-amber-400/40 bg-[#05070d] md:left-1/2">
                    <Icon className="h-4 w-4 text-amber-300" />
                  </div>
                  <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 ">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/60">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
