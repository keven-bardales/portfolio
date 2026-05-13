import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';
import { services } from '@/infrastructure/container/container';
import { buildMetadata } from '@/lib/metadata';
import { personJsonLd } from '@/lib/jsonld';
import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { SkillsGrid } from '@/components/sections/skills-grid';
import { ContactCta } from '@/components/sections/contact-cta';

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
    title: `${dict.meta.siteName} — ${dict.meta.siteRole}`,
    description: dict.meta.defaultDescription,
    path: '',
    siteName: dict.meta.siteName,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [dict, profile, projects, experiences, skills, social] = await Promise.all([
    getDictionary(locale),
    services.profile.get(),
    services.project.getFeatured(3),
    services.experience.list(),
    services.skill.listGroupedByCategory(),
    services.social.list(),
  ]);

  const jsonLd = personJsonLd(profile, social, locale);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- JSON-LD must be injected raw for crawlers
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero locale={locale} dict={dict} profile={profile} />
      <FeaturedProjects locale={locale} dict={dict} projects={projects} />
      <ExperienceTimeline locale={locale} dict={dict} experiences={experiences} />
      <SkillsGrid locale={locale} dict={dict} groups={skills} />
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
