import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "AI Innovation", href: "/ai-innovation" },
  { label: "Industries", href: "/industries" },
];

const socials = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/ongshak/",
    label: "Facebook",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/ongshak",
    label: "LinkedIn",
  },
  { Icon: Twitter, href: "https://x.com/ongshak", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05070d] text-slate-300 ">
      {/* Brand glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FFA605]/10 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#135DC9]/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-12 py-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold text-white">
                Ongshak
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              From Web Development to Custom Enterprise Softwares and Smart IoT
              devices, we construct our projects with industry-leading
              technologies and provide our clients with the utmost commitment.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-[#FFA605]/50 hover:bg-[#FFA605]/10"
                >
                  <Icon className="h-4 w-4 text-slate-300 transition-colors group-hover:text-[#FFA605]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Explore
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-white/20 transition-all group-hover:w-6 group-hover:bg-[#FFA605]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Get in touch
            </h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <a
                  href="tel:+8801784440881"
                  className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-[#32C2D8]/50 group-hover:text-[#32C2D8]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="leading-6">+880 1784 440881</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ongshak.com"
                  className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-[#FFA605]/50 group-hover:text-[#FFA605]">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="leading-6">hello@ongshak.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/113+Love+Rd,+Dhaka+1208/@23.7634585,90.3982323,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7629aecfdbb:0x8735d254b10e5990!8m2!3d23.7634536!4d90.4008072!16s%2Fg%2F11svm6_6kr?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#135DC9]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="leading-6">113 Love Rd</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Ongshak. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="pointer-events-none select-none overflow-hidden absolute inset-0 flex items-center justify-center">
        <p className="bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-center font-serif text-[20vw] font-bold leading-none text-transparent">
          Ongshak
        </p>
      </div>
    </footer>
  );
}
