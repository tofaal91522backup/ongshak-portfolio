import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";

export default function AISpotlight() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto  container px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#007aff]">
                <BrainCircuit className="h-8 w-8" />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fda109]">
                AI & Innovation
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                We don’t just build software. We build intelligence into
                systems.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Ongshak deploys computer vision on factory floors, builds NLP
                systems that understand context, and creates automation
                pipelines that replace manual processes end-to-end.
              </p>

              <Link
                href="/ai-innovation"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fda109] px-6 py-3 text-sm font-bold text-white"
              >
                Explore AI capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Computer Vision",
                "NLP Systems",
                "Predictive Analytics",
                "Intelligent Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xl font-black">{item}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Built for real-world operations, not just demos.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
