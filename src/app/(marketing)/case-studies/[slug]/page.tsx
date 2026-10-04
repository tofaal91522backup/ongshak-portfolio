import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyArticle from "@/features/marketting/_pages/case-studies/CaseStudyArticle";
import {
  caseStudyArticles,
  getArticle,
} from "@/features/marketting/_pages/case-studies/data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: `${article.name} Case Study | ongshak`,
    description: article.excerpt,
    openGraph: { images: [article.cover] },
  };
}

const page = async ({ params }: Props) => {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  return <CaseStudyArticle article={article} />;
};

export default page;
