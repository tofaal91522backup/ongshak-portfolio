import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  type ArticleBlock,
  type CaseStudyArticle as Article,
  caseStudyArticles,
  headingId,
  readingMinutes,
} from "./data";
import ReadingProgress from "./ReadingProgress";

function hostOf(link: string) {
  return new URL(link).hostname.replace(/^www\./, "");
}

function Screenshot({
  src,
  alt,
  host,
  width = 1440,
  height = 900,
  priority = false,
}: {
  src: string;
  alt: string;
  host: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="mx-auto truncate rounded-md bg-white/5 px-3 py-0.5 text-xs text-white/50">
          {host}
        </span>
        <div className="w-[42px]" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 900px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

function Block({ block, article }: { block: ArticleBlock; article: Article }) {
  switch (block.type) {
    case "text":
      return (
        <section>
          {block.heading && (
            <h2
              id={headingId(block.heading)}
              className="scroll-mt-28 font-serif text-3xl tracking-tight text-white"
            >
              {block.heading}
            </h2>
          )}
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-white/70">
            {block.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      );
    case "image":
      return (
        <figure className="lg:-mx-12">
          <Screenshot
            src={block.src}
            alt={block.caption}
            width={block.width}
            height={block.height}
            host={hostOf(article.link)}
          />
          <figcaption className="mt-3 text-center text-sm text-white/45">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "features":
      return (
        <section>
          <h2
            id={headingId(block.heading)}
            className="scroll-mt-28 font-serif text-3xl tracking-tight text-white"
          >
            {block.heading}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span
                  className="text-xs font-semibold tracking-[0.2em]"
                  style={{ color: article.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-white/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
    case "quote":
      return (
        <blockquote
          className="border-l-2 py-2 pl-8"
          style={{ borderColor: article.accent }}
        >
          <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
            “{block.text}”
          </p>
          <footer className="mt-4 text-sm text-white/50">— {block.cite}</footer>
        </blockquote>
      );
  }
}

export default function CaseStudyArticle({ article }: { article: Article }) {
  const index = caseStudyArticles.findIndex((a) => a.slug === article.slug);
  const next = caseStudyArticles[(index + 1) % caseStudyArticles.length];
  const toc = article.blocks.flatMap((b) =>
    b.type === "features" ? [b.heading] : b.type === "text" && b.heading ? [b.heading] : [],
  );
  const host = hostOf(article.link);

  return (
    <main className="relative min-h-screen bg-[#05070d] text-white">
      <ReadingProgress color={article.accent} />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-20"
        style={{
          background: `radial-gradient(50% 60% at 50% 0%, ${article.accent}, transparent 70%)`,
        }}
      />

      <article className="relative mx-auto container px-6 pt-32 pb-24">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            <span style={{ color: article.accent }}>{article.industry}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{article.location}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{readingMinutes(article)} min read</span>
          </div>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">
            {article.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {article.excerpt}
          </p>
        </header>

        {/* Cover */}
        <div className="mx-auto mt-14 max-w-6xl">
          <Screenshot
            src={article.cover}
            alt={`${article.name} homepage`}
            host={host}
            width={article.coverSize?.width}
            height={article.coverSize?.height}
            priority
          />
        </div>

        {/* Project summary */}
        <dl className="mx-auto mt-10 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Client", value: article.client },
            { label: "Industry", value: article.industry },
            { label: "Services", value: article.services.join(", ") },
          ].map((item) => (
            <div key={item.label} className="bg-[#05070d] p-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-white/40">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm text-white/85">{item.value}</dd>
            </div>
          ))}
          <div className="bg-[#05070d] p-6">
            <dt className="text-xs uppercase tracking-[0.2em] text-white/40">
              Live site
            </dt>
            <dd className="mt-2">
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-white/85 underline-offset-4 hover:underline"
              >
                {host}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </dd>
          </div>
        </dl>

        {/* Body + sidebar */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4 lg:order-2">
            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {article.name} at a glance
                </p>
                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
                  {article.facts.map((f) => (
                    <div key={f.label}>
                      <p className="text-xl font-semibold text-white">
                        {f.value}
                      </p>
                      <p className="mt-0.5 text-xs text-white/50">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <nav className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:block">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  On this page
                </p>
                <ul className="mt-4 space-y-2.5">
                  {toc.map((h) => (
                    <li key={h}>
                      <a
                        href={`#${headingId(h)}`}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {h}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#05070d] transition-opacity hover:opacity-90"
                style={{ backgroundColor: article.accent }}
              >
                Visit {host}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>

          <div className="space-y-14 lg:col-span-8 lg:order-1 lg:pl-12">
            {article.blocks.map((block, i) => (
              <Block key={i} block={block} article={article} />
            ))}
          </div>
        </div>

        {/* Next case study */}
        {next.slug !== article.slug && (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group mx-auto mt-24 grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Next case study
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight md:text-3xl">
                {next.headline}
              </h2>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Read {next.name}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={next.cover}
                alt={next.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        )}
      </article>
    </main>
  );
}
