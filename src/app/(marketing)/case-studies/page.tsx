import type { Metadata } from "next";

import CaseStudiesIndex from "@/features/marketting/_pages/case-studies/CaseStudiesIndex";

export const metadata: Metadata = {
  title: "Case Studies | ongshak",
  description:
    "How we built websites and platforms for Steeltech Industries, Khar and Discover Thailand.",
};

const page = () => {
  return <CaseStudiesIndex />;
};

export default page;
