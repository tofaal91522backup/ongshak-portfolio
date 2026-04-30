type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#007aff]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}