"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getEmployees, initials, type Employee } from "@/lib/employees";
import MemberAvatar from "./MemberAvatar";

/**
 * The list view only needs a name, role, photo, projects and join year, so the
 * personal fields on each employee (phone, email, blood group) are never read
 * here. The roster is fetched in the browser after mount. Each card links to
 * that person's profile by employee code.
 */
export default function TeamGrid({
  eyebrow = "The Team",
  showIntro = true,
}: {
  eyebrow?: string;
  showIntro?: boolean;
}) {
  const [team, setTeam] = useState<Employee[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    getEmployees(controller.signal).then((list) => {
      if (!controller.signal.aborted) setTeam(list);
    });
    return () => controller.abort();
  }, []);

  // Nothing to show and nothing to apologise for — drop the section entirely.
  if (team && team.length === 0) return null;

  if (!team) {
    return (
      <section className="border-t border-white/10 py-20">
        <div
          className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showIntro ? "mt-14" : ""}`}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="h-36 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-white/10 py-20">
      {showIntro && (
        <>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white">
            {team.length} people, one workshop.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Engineers, field ambassadors and operators building hardware and
            software out of Dhaka.
          </p>
        </>
      )}

      <div
        className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showIntro ? "mt-14" : ""}`}
      >
        {team.map((member) => (
          <Link
            key={member.employeeCode}
            href={`/team?id=${encodeURIComponent(member.employeeCode)}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[#FFA605]/40 hover:bg-white/[0.05]"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#FFA605]/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-slate-500 transition-all group-hover:rotate-45 group-hover:text-[#FFA605]" />

            <div className="relative flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#FFA605]/60 bg-gradient-to-br from-[#FFA605]/20 to-[#135DC9]/20">
                <MemberAvatar
                  src={member.photo}
                  name={member.name}
                  initials={initials(member.name)}
                  sizes="80px"
                  textClassName="text-lg"
                />
              </div>

              <div className="min-w-0 pr-5">
                <p className="font-medium leading-snug text-white">
                  {member.name}
                </p>
                <p className="mt-0.5 text-sm text-[#FFA605]">
                  {member.designation}
                </p>
                {member.joiningYear && (
                  <p className="mt-1 text-xs text-slate-500">
                    Since {member.joiningYear}
                  </p>
                )}
              </div>
            </div>

            {member.projects.length > 0 && (
              <div className="relative mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                {member.projects.map((project) => (
                  <span
                    key={project}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] text-slate-300"
                  >
                    {project}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
