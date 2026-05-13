import type { Metadata } from 'next';
import { ArrowRight, Download } from 'lucide-react';
import { notFound } from 'next/navigation';
import { isLocale } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';
import { services } from '@/infrastructure/container/container';
import { buildMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.about.title,
    description: dict.about.subtitle,
    path: '/about',
    siteName: dict.meta.siteName,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [dict, profile] = await Promise.all([
    getDictionary(locale),
    services.profile.get(),
  ]);

  const philosophyEn = [
    'Ship the simplest thing that solves the problem — then iterate. Premature abstractions waste more time than they save.',
    'Treat production as the source of truth. Bug reports, logs, and Stripe webhooks tell you more than tickets.',
    'Take ownership beyond your title. The fastest way to grow is to handle whatever needs handling.',
  ];
  const philosophyEs = [
    'Entrega lo más simple que resuelva el problema — y luego itera. Las abstracciones prematuras gastan más tiempo del que ahorran.',
    'Trata a producción como la fuente de verdad. Los reportes de bugs, logs y webhooks de Stripe cuentan más que los tickets.',
    'Toma propiedad más allá de tu rol. La forma más rápida de crecer es manejar lo que haya que manejar.',
  ];
  const aiEn = [
    'I use Claude Code daily — for design exploration, refactors, code review, and end-to-end scaffolds.',
    'I configure MCP servers to give the model real-time access to my codebase, tickets, and docs.',
    'Prompts and context engineering matter more than model choice. I keep CLAUDE.md files, custom skills, and slash commands per project.',
  ];
  const aiEs = [
    'Uso Claude Code todos los días — para exploración de diseño, refactors, code review y scaffolds end-to-end.',
    'Configuro servidores MCP para darle al modelo acceso en tiempo real a mi código, tickets y docs.',
    'Los prompts y la ingeniería de contexto importan más que la elección de modelo. Mantengo archivos CLAUDE.md, skills personalizados y slash commands por proyecto.',
  ];

  const philosophy = locale === 'es' ? philosophyEs : philosophyEn;
  const ai = locale === 'es' ? aiEs : aiEn;

  return (
    <Section className="pt-12 md:pt-16">
      <Container className="flex max-w-4xl flex-col gap-16">
        <header className="flex flex-col gap-6">
          <Heading level={1} eyebrow={dict.about.title}>
            {dict.about.subtitle}
          </Heading>
          <p className="text-xl leading-relaxed text-text-muted">
            {profile.summary[locale]}
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          <article className="flex flex-col gap-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {dict.about.philosophy}
            </h2>
            <ul className="flex flex-col gap-4">
              {philosophy.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 leading-relaxed text-text-muted"
                >
                  <span className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col gap-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {dict.about.ai}
            </h2>
            <ul className="flex flex-col gap-4">
              {ai.map((item, idx) => (
                <li key={idx} className="flex gap-3 leading-relaxed text-text-muted">
                  <span className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button href={`/${locale}/contact`} variant="primary">
            {dict.about.contactMe}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          {profile.resumeUrl ? (
            <Button href={profile.resumeUrl[locale]} variant="secondary">
              <Download className="h-4 w-4" aria-hidden />
              {dict.about.downloadResume}
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
