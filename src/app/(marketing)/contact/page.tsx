import PageHeader from "@/components/shared/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s Build Something Together"
        description="Whether you have a detailed brief or just a rough idea — we’re ready to listen."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <form className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                placeholder="Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#007aff]"
              />
              <input
                placeholder="Email"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#007aff]"
              />
            </div>

            <input
              placeholder="Company / Organisation"
              className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#007aff]"
            />

            <select className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#007aff]">
              <option>Product Build</option>
              <option>AI/ML Solution</option>
              <option>Consulting</option>
              <option>Team Augmentation</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Tell us about your project"
              rows={6}
              className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#007aff]"
            />

            <button
              type="button"
              className="mt-6 rounded-full bg-[#fda109] px-7 py-3.5 text-sm font-bold text-white"
            >
              Send Enquiry
            </button>
          </form>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">
              Quick Connect
            </h2>

            <div className="mt-7 space-y-5 text-slate-700">
              <p>
                <span className="font-black">Email:</span> hello@ongshak.com
              </p>
              <p>
                <span className="font-black">Location:</span> Dhaka, Bangladesh
              </p>
              <p>
                <span className="font-black">Reach:</span> Working with clients
                across 5+ countries.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-6">
              <p className="font-bold text-slate-950">
                We’ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
