import { industries } from "../data/site";

export default function TrustBar() {
  return (
    <section className="border-y  py-12">
      <div className="mx-auto  container px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">
          Trusted across industries
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
