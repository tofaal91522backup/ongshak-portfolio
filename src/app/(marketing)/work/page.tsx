import PageHeader from "@/components/shared/PageHeader";
import {
  portfolioProjects,
  stats,
} from "@/features/marketting/_pages/home/data/site";

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work That Speaks for Itself"
        description="From social impact platforms to AI-powered travel tools to enterprise ERP systems — we build technology that works in the real world."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-3">
            {[
              "All",
              "Social Impact",
              "Innovation & Startups",
              "Investment & Finance",
              "AI & Travel",
              "Enterprise & ERP",
              "Climate & Sustainability",
            ].map((item) => (
              <button
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-[#007aff] hover:text-[#007aff]"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-[#007aff]/20 via-white to-[#fda109]/25 p-5">
                  <div className="flex h-full items-end rounded-[1.5rem] bg-white/60 p-5">
                    <span className="text-5xl font-black text-slate-950">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="rounded-full bg-[#007aff]/10 px-3 py-1 text-xs font-black text-[#007aff]">
                    {project.industry}
                  </span>
                  <h2 className="mt-5 text-2xl font-black text-slate-950">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <p className="text-4xl font-black text-[#fda109]">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
