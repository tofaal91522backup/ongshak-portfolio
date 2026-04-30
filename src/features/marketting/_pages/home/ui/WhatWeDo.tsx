"use client";

import { ArrowRight, Bot, Code2, Workflow } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { services } from "../data/site";

const icons = [Code2, Bot, Workflow];

const revealColors = [
  [
    [50, 194, 216],
    [0, 122, 255],
  ],
  [
    [50, 194, 216],
    [253, 161, 9],
  ],
  [
    [50, 194, 216],
    [50, 194, 216],
  ],
];

export default function WhatWeDo() {
  return (
    <section className=" py-24 border-y border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#32c2d8]">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            End-to-end technology services.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            From product strategy to deployment, we cover every layer of the
            stack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <ServiceCanvasCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={<Icon className="h-7 w-7" />}
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
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  colors: number[][];
}) {
  return (
    <div className="group/canvas relative flex min-h-[28rem] w-full overflow-hidden rounded-[2rem] border   p-7 shadow-sm shadow-[#32c2d8]/20 transition duration-300 ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={colors}
            dotSize={2}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex justify-between h-full flex-col min-h-[39rem]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl  text-white backdrop-blur transition duration-300  group-hover/canvas-card:text-white liquid-glass ">
          {icon}
        </div>

        <h3 className="mt-7 text-2xl font-black text-white transition duration-300 ">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-white/80 transition duration-300 group-hover/canvas-card:text-white/85">
          {description}
        </p>

        <Link
          href="/services"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-white transition duration-300 group-hover/canvas-card:text-white"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition group-hover/canvas-card:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
