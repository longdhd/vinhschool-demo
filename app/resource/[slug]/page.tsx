import Link from "next/link";
import { notFound } from "next/navigation";
import { getResource, resources } from "../resources";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {};
  }

  return {
    title: `${resource.title} | VinhSchool`,
    description: resource.summary,
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const relatedResources = resources.filter((item) => item.slug !== resource.slug);

  return (
    <article className="min-h-full bg-stone-100 text-zinc-900">
      <section className="bg-cyan-950 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/resource"
            className="text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Tài nguyên
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            {resource.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-6 text-xl leading-9 text-cyan-100">
            {resource.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {resource.quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-[1.25rem] border border-stone-300 bg-white p-5 shadow-sm"
              >
                <p className="text-base leading-7 text-zinc-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-stone-300 bg-white p-6 shadow-xl sm:p-10">
          <div className="space-y-10">
            {resource.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-zinc-950">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-8 text-zinc-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-[1.25rem] border border-cyan-200 bg-cyan-50 p-6">
            <h2 className="text-2xl font-semibold text-zinc-950">
              Chuẩn bị trước khi đi tiếp
            </h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-zinc-700">
              {resource.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-stone-200 pt-8">
            <h2 className="text-lg font-semibold text-zinc-950">
              Nguồn tham khảo
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {resource.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-zinc-950">
            Đọc thêm tài nguyên khác
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {relatedResources.map((item) => (
              <Link
                key={item.slug}
                href={`/resource/${item.slug}`}
                className="rounded-[1.25rem] border border-stone-300 bg-stone-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-700">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
