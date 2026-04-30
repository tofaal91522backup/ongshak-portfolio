import { stats } from "../data/site";

export default function CredibilityStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid  container grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl font-black text-slate-950 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
