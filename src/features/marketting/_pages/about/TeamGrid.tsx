import MemberAvatar from "./MemberAvatar";

const TEAM_ENDPOINT =
  "https://employees.ongshak.com/api/public/employees?limit=50";

/**
 * The public employees API also returns phone numbers, personal email, blood
 * group, QR codes and document links. This runs on the server and maps the
 * response down to the handful of fields below, so none of that personal data
 * is ever sent to the browser.
 */
type TeamMember = {
  name: string;
  designation: string;
  photo: string | null;
  projects: string[];
  joiningYear: number | null;
  order: number;
};

type ApiEmployee = {
  name?: string;
  designation?: string;
  displayOrder?: string | number;
  joiningYear?: number;
  projectNames?: string[];
  profilePicture?: { url?: string } | null;
};

async function getTeam(): Promise<TeamMember[]> {
  try {
    const res = await fetch(TEAM_ENDPOINT, {
      // Roster changes rarely; re-fetch hourly rather than on every request.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const body = (await res.json()) as {
      success?: boolean;
      data?: ApiEmployee[];
    };
    if (!body.success || !Array.isArray(body.data)) return [];

    return body.data
      .map((e) => ({
        name: e.name?.trim() ?? "",
        designation: e.designation?.trim() ?? "",
        photo: e.profilePicture?.url ?? null,
        projects: Array.isArray(e.projectNames) ? e.projectNames : [],
        joiningYear: e.joiningYear ?? null,
        order: Number(e.displayOrder) || 999,
      }))
      .filter((m) => m.name)
      .sort((a, b) => a.order - b.order);
  } catch {
    // The about page must still render if the employee service is unreachable.
    return [];
  }
}

function initials(name: string) {
  return name
    .replace(/^(MD\.?|Md\.?|Mohammad)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export default async function TeamGrid() {
  const team = await getTeam();

  // Nothing to show and nothing to apologise for — drop the section entirely.
  if (team.length === 0) return null;

  return (
    <section className="border-t border-white/10 py-20">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]">
        The Team
      </p>
      <h2 className="mt-4 font-serif text-4xl text-white">
        {team.length} people, one workshop.
      </h2>
      <p className="mt-4 max-w-2xl text-slate-400">
        Engineers, field ambassadors and operators building hardware and
        software out of Dhaka.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={`${member.name}-${member.order}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#FFA605]/40 hover:bg-white/[0.05]"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#FFA605]/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="relative flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#FFA605]/20 to-[#135DC9]/20">
                <MemberAvatar
                  src={member.photo}
                  name={member.name}
                  initials={initials(member.name)}
                />
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium text-white">{member.name}</p>
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
              <div className="relative mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
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
          </div>
        ))}
      </div>
    </section>
  );
}
