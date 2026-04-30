import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAFooter() {
  return (
    <section className="py-24">
      <div className="mx-auto  container px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#007aff] to-[#005bd1] p-8 text-center text-white sm:p-12 lg:p-16">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
            Tell us what you’re building. We’ll tell you how we can help.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fda109] px-7 py-3.5 text-sm font-bold text-white"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
