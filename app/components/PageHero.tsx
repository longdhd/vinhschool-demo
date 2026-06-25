type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  contained?: boolean;
  className?: string;
};

export default function PageHero({
  title,
  description,
  eyebrow,
  contained = true,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`bg-cyan-950 px-4 py-16 text-white sm:px-6 ${className}`}>
      <div
        className={
          contained
            ? "mx-auto max-w-4xl rounded-[2rem] border border-cyan-800 bg-cyan-900/95 p-12 shadow-[0_40px_80px_rgba(0,0,0,0.28)]"
            : "mx-auto max-w-5xl"
        }
      >
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            {eyebrow}
          </p>
        )}
        <h1 className={eyebrow ? "mt-6 text-4xl font-semibold sm:text-5xl" : "text-4xl font-semibold mb-4"}>
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl leading-8 text-cyan-200">{description}</p>
        )}
      </div>
    </section>
  );
}
