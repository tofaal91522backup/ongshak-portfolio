import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  type CaseStudyArticle,
  caseStudyArticles,
  readingMinutes,
} from "./data";

function Meta({ article }: { article: CaseStudyArticle }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
      <span style={{ color: article.accent }}>{article.industry}</span>
      <span className="h-1 w-1 rounded-full bg-white/30" />
      <span>{readingMinutes(article)} min read</span>
    </div>
  );
}

function FeaturedCard({ article }: { article: CaseStudyArticle }) {
  return (
    <Link
      href={`/case-studies/${article.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 lg:grid-cols-12"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[440px]">
        <Image
          src={article.cover}
          alt={article.name}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
        <span className="mb-5 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Featured
        </span>
        <Meta article={article} />
        <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl">
          {article.headline}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          {article.excerpt}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: CaseStudyArticle }) {
  return (
    <Link
      href={`/case-studies/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.cover}
          alt={article.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <Meta article={article} />
        <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-white md:text-3xl">
          {article.headline}
        </h2>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-white/60">
          {article.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function CaseStudiesIndex() {
  const [featured, ...rest] = caseStudyArticles;

  return (
    <main className="relative min-h-screen bg-[#05070d] text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative mx-auto container px-6 pt-32 pb-24">
        <header className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFA605] shadow-[0_0_12px_#FFA605]" />
            Case Studies
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Stories from{" "}
            <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
              the build.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            The client, the problem, what we built and why — told project by
            project.
          </p>
        </header>

        <div className="mt-16 space-y-6">
          <FeaturedCard article={featured} />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
