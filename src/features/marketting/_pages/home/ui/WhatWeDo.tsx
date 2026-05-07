"use client";

import { ArrowRight, Bot, Code2, Workflow } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { services } from "../data/site";

const icons = [Code2, Bot, Workflow];

const revealColors = [
  [
    [253, 161, 9],
    [255, 122, 24],
  ],
  [
    [19, 93, 201],
    [50, 194, 216],
  ],
  [
    [50, 194, 216],
    [253, 161, 9],
  ],
];

const accentGradients = [
  "from-[#FFA605] to-[#FD7D18]",
  "from-[#135DC9] to-[#32C2D8]",
  "from-[#32C2D8] to-[#FFA605]",
];

export default function WhatWeDo() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] py-28 text-white">
      {/* Ambient brand glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#135DC9]/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#FFA605]/20 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#32C2D8]/10 blur-[160px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 mx-auto container px-6 ">
        {/* Heading */}
         <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFA605] shadow-[0_0_12px_#FFA605]" />
              What We Do
            </div>

            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              End to end{" "}
              <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
                technology services.
              </span>
            </h2>
          </div>
        </div>
    

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <ServiceCanvasCard
                key={service.title}
                title={service.title}
                description={service.description}
                gradient={accentGradients[index % accentGradients.length]}
                icon={<Icon className="h-7 w-7 text-white" strokeWidth={1.6} />}
                colors={revealColors[index % revealColors.length]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCanvasCard({
  title,
  description,
  icon,
  colors,
  gradient,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  colors: number[][];
  gradient: string;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      {/* Gradient ring on hover */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${gradient} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30`}
      />

      {/* Canvas reveal effect (hover only) */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {hovered && (
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={colors}
            dotSize={2}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-[0_10px_40px_-10px_rgba(255,166,5,0.5)] transition-transform duration-500 group-hover:scale-110`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="mt-7 font-serif text-2xl tracking-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-[15px] leading-relaxed text-white/65">
          {description}
        </p>

        {/* Learn more */}
        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-[#FFA605]"
        >
          <span className="relative">
            Learn more
            <span
              className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r ${gradient} transition-transform duration-300 group-hover:scale-x-100`}
            />
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-opacity duration-500 group-hover:opacity-0" />
    </motion.div>
  );
}
