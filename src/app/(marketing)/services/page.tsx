import PageHeader from "@/components/shared/PageHeader";
import { services } from "@/features/marketting/_pages/home/data/site";

const capabilities = [
  "Web Application Development",
  "Mobile App Development",
  "SaaS Platform Development",
  "MVP / Prototype Development",
  "API Development & Integration",
  "Legacy System Modernisation",
  "AI & Machine Learning",
  "DevOps & Cloud",
  "QA & Testing",
  "Consulting & Strategy",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-End Technology Services"
        description="From strategy to deployment, we cover every layer of the stack. Whether you need a full product build, an AI solution, or a dedicated team extension — we’ve done it 347+ times."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-950">Capabilities</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}
