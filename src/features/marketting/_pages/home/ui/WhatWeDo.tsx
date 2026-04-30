import { ArrowRight, Bot, Code2, Workflow } from "lucide-react";
import Link from "next/link";
import { services } from "../data/site";

const icons = [Code2, Bot, Workflow];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto  container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#007aff]">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            End-to-end technology services.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From product strategy to deployment, we cover every layer of the
            stack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#007aff]/40 hover:shadow-xl hover:shadow-slate-200"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007aff]/10 text-[#007aff]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#007aff]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
