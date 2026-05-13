import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { isLocale, SUPPORTED_LOCALES } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';
import { services } from '@/infrastructure/container/container';
import { NotFoundError } from '@/core/domain/errors/domain-error';
import { buildMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  const all = await services.project.list();
  const slugs = all.filter((p) => !p.confidential).map((p) => p.slug);
  return SUPPORTED_LOCALES.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  try {
    const project = await services.project.getBySlug(slug);
    const dict = await getDictionary(locale);
    return buildMetadata({
      locale,
      title: project.title[locale],
      description: project.tagline[locale],
      path: `/projects/${slug}`,
      siteName: dict.meta.siteName,
    });
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  let project;
  try {
    project = await services.project.getBySlug(slug);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  if (project.confidential) {
    notFound();
  }

  return (
    <Section className="pt-12 md:pt-16">
      <Container className="flex flex-col gap-12">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 self-start text-sm text-text-muted transition hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {dict.projects.detail.back}
        </Link>

        <header className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            {project.year} · {project.category}
          </span>
          <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
            {project.title[locale]}
          </h1>
          <p className="max-w-2xl text-xl text-text-muted">
            {project.tagline[locale]}
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="leading-relaxed text-text-muted">
              {project.description[locale]}
            </p>

            <h2 className="mt-12 font-display text-2xl">
              {dict.projects.detail.impact}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.impact[locale].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-text-muted"
                >
                  <span
                    className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-8 border-l-0 md:border-l md:border-border md:pl-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                {dict.projects.detail.techStack}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>

            {project.links.length > 0 ? (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                  Links
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-text transition hover:text-accent"
                      >
                        {link.label[locale]}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
