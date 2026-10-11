const API_BASE = "https://employees.ongshak.com";

/**
 * Shape of the public employee API (GET /api/public/employees[/{code}]).
 * Everything is optional because the service is edited by hand by admins.
 */
export type Employee = {
  employeeCode: string;
  name: string;
  designation: string;
  displayOrder: number;
  joiningYear: number | null;
  photo: string | null;
  projects: string[];
  // Personal details — only the single-profile page should ever render these.
  phones: string[];
  email: string | null;
  bloodGroup: string | null;
  district: string | null;
};

type ApiEmployee = {
  employeeCode?: string;
  name?: string;
  designation?: string;
  displayOrder?: string | number;
  joiningYear?: number;
  phone?: string;
  phoneNumbers?: string[];
  email?: string;
  bloodGroup?: string;
  district?: string;
  projectNames?: string[];
  profilePicture?: { url?: string } | null;
};

function toEmployee(e: ApiEmployee): Employee | null {
  const name = e.name?.trim();
  const employeeCode = e.employeeCode?.trim();
  if (!name || !employeeCode) return null;

  const phones = [e.phone, ...(e.phoneNumbers ?? [])]
    .map((p) => p?.trim())
    .filter((p): p is string => Boolean(p));

  return {
    employeeCode,
    name,
    designation: e.designation?.trim() ?? "",
    displayOrder: Number(e.displayOrder) || 999,
    joiningYear: e.joiningYear ?? null,
    photo: e.profilePicture?.url ?? null,
    projects: Array.isArray(e.projectNames) ? e.projectNames : [],
    phones: [...new Set(phones)],
    email: e.email?.trim() || null,
    bloodGroup: e.bloodGroup?.trim() || null,
    district: e.district?.trim() || null,
  };
}

/** Whole roster, in the order set by the administrators. Never throws. */
export async function getEmployees(signal?: AbortSignal): Promise<Employee[]> {
  try {
    const res = await fetch(`${API_BASE}/api/public/employees?limit=50`, {
      signal,
    });
    if (!res.ok) return [];

    const body = (await res.json()) as {
      success?: boolean;
      data?: ApiEmployee[];
    };
    if (!body.success || !Array.isArray(body.data)) return [];

    return body.data
      .map(toEmployee)
      .filter((e): e is Employee => e !== null)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  } catch {
    return [];
  }
}

export type EmployeeResult =
  | { status: "ok"; employee: Employee }
  | { status: "not-found" }
  | { status: "error" };

export async function getEmployee(
  code: string,
  signal?: AbortSignal,
): Promise<EmployeeResult> {
  try {
    const res = await fetch(
      `${API_BASE}/api/public/employees/${encodeURIComponent(code)}`,
      { signal },
    );
    if (res.status === 404) return { status: "not-found" };
    if (!res.ok) return { status: "error" };

    const body = (await res.json()) as { success?: boolean; data?: ApiEmployee };
    const employee = body.success && body.data ? toEmployee(body.data) : null;
    return employee ? { status: "ok", employee } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}

export function initials(name: string) {
  return name
    .replace(/^(MD\.?|Md\.?|Mohammad)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}
