import PageHeader from "@/components/shared/PageHeader";
import { industries } from "@/features/marketting/_pages/home/data/site";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Technology That Understands Your Industry"
        description="We don’t do one-size-fits-all. Every industry has unique constraints, regulations, and workflows. We build with that context."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-950">{industry}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Digital products, automation, platforms, and AI systems designed
                for real industry workflows.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
