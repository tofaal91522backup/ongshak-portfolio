import Link from "next/link";
import { footerLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid  container gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#007aff] text-lg font-black">
              O
            </div>
            <span className="text-xl font-black">Ongshak</span>
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Technology partner for businesses that need things done right.
          </p>

          <div className="mt-6 flex gap-3">
            {["LinkedIn", "Facebook", "GitHub"].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-black">{title}</h3>
            <div className="mt-5 flex flex-col gap-3">
              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="font-black">Connect</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p>hello@ongshak.com</p>
            <p>Dhaka, Bangladesh</p>
            <p>Based in Dhaka. Working with clients across 5+ countries.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex  container flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Ongshak. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
