import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { isLocale } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';
import { services } from '@/infrastructure/container/container';
import { buildMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ContactForm } from '@/components/contact/contact-form';

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
    title: dict.contact.title,
    description: dict.contact.subtitle,
    path: '/contact',
    siteName: dict.meta.siteName,
  });
}

export default async function ContactPage({
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

  return (
    <Section className="pt-12 md:pt-16">
      <Container className="grid max-w-5xl gap-16 md:grid-cols-[1fr_1.2fr]">
        <header className="flex flex-col gap-6">
          <Heading level={1} eyebrow={dict.contact.title}>
            {dict.contact.subtitle}
          </Heading>
          <div className="flex flex-col gap-2 text-sm text-text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.18em]">
              {dict.contact.direct}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 text-text transition hover:text-accent"
            >
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </header>
        <ContactForm dict={dict} />
      </Container>
    </Section>
  );
}
