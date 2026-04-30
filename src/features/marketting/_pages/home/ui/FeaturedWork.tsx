import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "../data/site";

export default function FeaturedWork() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto  container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fda109]">
              Featured Work
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Real products. Real outcomes.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:border-[#007aff] hover:text-[#007aff]"
          >
            View all work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-52 bg-gradient-to-br from-[#007aff]/20 via-white to-[#fda109]/30 p-5">
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                  <p className="text-5xl font-black text-slate-950">
                    0{index + 1}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <span className="rounded-full bg-[#007aff]/10 px-3 py-1 text-xs font-black text-[#007aff]">
                  {project.industry}
                </span>

                <h3 className="mt-5 text-2xl font-black text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-black text-[#fda109]">
                    {project.metric}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
