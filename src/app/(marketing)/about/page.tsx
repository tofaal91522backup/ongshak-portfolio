import PageHeader from "@/components/shared/PageHeader";

const values = [
  "Craft Over Shortcuts",
  "Impact Over Vanity Metrics",
  "Partnership Over Transactions",
  "Innovation as Standard Practice",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We Build Things That Matter."
        description="Ongshak started in 2021 with a simple belief: businesses deserve technology partners, not vendors."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-lg leading-9 text-slate-700">
              Ongshak began as a small team of engineers and designers who were
              tired of seeing projects fail — not because of bad ideas, but
              because of poor execution. Five years and 347+ projects later,
              we’ve worked with startups, enterprises, NGOs, and organisations
              across 12+ industries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-950">Our Values</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
