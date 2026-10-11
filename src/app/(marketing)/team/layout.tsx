import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team member | ongshak",
  // Profiles are reached from ID-card QR codes, not search.
  robots: { index: false, follow: false },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
