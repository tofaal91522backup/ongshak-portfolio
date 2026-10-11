import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Droplet,
  IdCard,
  Mail,
  MapPin,
  Phone,
  Layers,
} from "lucide-react";
import type { Employee } from "@/lib/employees";
import { initials } from "@/lib/employees";
import MemberAvatar from "../about/MemberAvatar";

function Tile({
  Icon,
  label,
  wide,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#FFA605]/30 ${wide ? "sm:col-span-2" : ""}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#FFA605]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500">
          {label}
        </p>
        <div className="mt-1 break-words text-base text-white">{children}</div>
      </div>
    </div>
  );
}

export default function TeamProfile({ employee: e }: { employee: Employee }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-[#FFA605]/10 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-[#135DC9]/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6 md:pt-40">
        <Link
          href="/teams"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#FFA605]"
        >
          <ArrowLeft className="h-4 w-4" />
          All team members
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="relative flex flex-col items-center gap-8 bg-gradient-to-br from-[#FFA605]/15 via-transparent to-[#135DC9]/20 p-8 text-center md:flex-row md:p-12 md:text-left">
            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-[#FFA605]/70 bg-gradient-to-br from-[#FFA605]/20 to-[#135DC9]/20 md:h-52 md:w-52">
              <MemberAvatar
                src={e.photo}
                name={e.name}
                initials={initials(e.name)}
                sizes="208px"
                priority
                textClassName="text-5xl"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFA605]">
                ongshak team
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">
                {e.name}
              </h1>
              {e.designation && (
                <p className="mt-2 text-lg text-slate-300">{e.designation}</p>
              )}
              <span className="mt-5 inline-block rounded-full border border-[#FFA605]/40 bg-[#FFA605]/10 px-4 py-1.5 font-mono text-xs tracking-widest text-[#FFA605]">
                {e.employeeCode}
              </span>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 p-6 sm:grid-cols-2 md:p-8">
            {e.phones.length > 0 && (
              <Tile Icon={Phone} label="Phone">
                {e.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s+/g, "")}`}
                    className="block transition-colors hover:text-[#FFA605]"
                  >
                    {p}
                  </a>
                ))}
              </Tile>
            )}
            {e.email && (
              <Tile Icon={Mail} label="Email">
                <a
                  href={`mailto:${e.email}`}
                  className="transition-colors hover:text-[#FFA605]"
                >
                  {e.email}
                </a>
              </Tile>
            )}
            {e.bloodGroup && (
              <Tile Icon={Droplet} label="Blood group">
                {e.bloodGroup}
              </Tile>
            )}
            {e.district && (
              <Tile Icon={MapPin} label="District">
                {e.district}
              </Tile>
            )}
            {e.joiningYear && (
              <Tile Icon={CalendarDays} label="Joined">
                {e.joiningYear}
              </Tile>
            )}
            <Tile Icon={IdCard} label="Employee ID">
              <span className="font-mono">{e.employeeCode}</span>
            </Tile>
            {e.projects.length > 0 && (
              <Tile Icon={Layers} label="Projects" wide>
                <div className="flex flex-wrap gap-2">
                  {e.projects.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Tile>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
