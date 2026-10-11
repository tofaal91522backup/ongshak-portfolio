"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import TeamProfile from "@/features/marketting/_pages/team/TeamProfile";
import { getEmployee, type EmployeeResult } from "@/lib/employees";
import TeamLoading from "./loading";

function Message({ title, body }: { title: string; body: string }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#05070d] px-6 text-center text-slate-200">
      <h1 className="font-serif text-4xl text-white">{title}</h1>
      <p className="max-w-md text-slate-400">{body}</p>
      <Link
        href="/teams"
        className="rounded-full bg-gradient-to-r from-[#FFA605] to-[#FD7D18] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black"
      >
        Meet the team
      </Link>
    </main>
  );
}

function TeamMember() {
  const router = useRouter();
  const code = useSearchParams().get("id")?.trim() ?? "";
  const [result, setResult] = useState<{
    code: string;
    value: EmployeeResult;
  } | null>(null);

  useEffect(() => {
    if (!code) {
      router.replace("/teams");
      return;
    }
    const controller = new AbortController();
    getEmployee(code, controller.signal).then((value) => {
      if (!controller.signal.aborted) setResult({ code, value });
    });
    return () => controller.abort();
  }, [code, router]);

  if (!code || !result || result.code !== code) return <TeamLoading />;

  const { value } = result;
  if (value.status === "not-found") {
    return (
      <Message
        title="Team member not found"
        body={`We couldn't find anyone with the ID "${code}".`}
      />
    );
  }
  if (value.status === "error") {
    return (
      <Message
        title="Something went wrong"
        body="We couldn't load this profile right now. Please refresh in a moment."
      />
    );
  }
  return <TeamProfile employee={value.employee} />;
}

export default function TeamPage() {
  // useSearchParams needs a Suspense boundary so the page can still prerender.
  return (
    <Suspense fallback={<TeamLoading />}>
      <TeamMember />
    </Suspense>
  );
}
