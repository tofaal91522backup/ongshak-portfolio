import PageHeader from "@/components/shared/PageHeader";

const aiItems = [
  "Computer Vision",
  "Natural Language Processing",
  "Predictive Analytics",
  "Intelligent Automation",
  "MLOps & Deployment",
  "AI Strategy",
];

export default function AIInnovationPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI & Innovation"
        title="Intelligence, Deployed."
        description="We build AI systems that work in the real world — on factory floors, in healthcare, and inside business workflows. Not demos. Deployed systems with measurable impact."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {aiItems.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-950">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Built for production workflows, measurable business outcomes,
                and long-term scalability.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
