import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';
import { services } from '@/infrastructure/container/container';
import { buildMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ProjectCard } from '@/components/projects/project-card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';

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
    title: dict.projects.title,
    description: dict.projects.subtitle,
    path: '/projects',
    siteName: dict.meta.siteName,
  });
}

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [dict, projects] = await Promise.all([
    getDictionary(locale),
    services.project.list(),
  ]);

  return (
    <Section className="pt-12 md:pt-16">
      <Container className="flex flex-col gap-12">
        <Heading level={1} eyebrow={dict.projects.title}>
          {dict.projects.subtitle}
        </Heading>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard
                project={project}
                locale={locale}
                detailLabel={project.title[locale]}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
