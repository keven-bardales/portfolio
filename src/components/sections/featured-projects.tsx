import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import type { Project } from '@/core/domain/entities/project';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ProjectCard } from '@/components/projects/project-card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';

type Props = {
  locale: Locale;
  dict: Dictionary;
  projects: readonly Project[];
};

export function FeaturedProjects({ locale, dict, projects }: Props) {
  return (
    <Section className="border-t border-border/60">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
          <Heading level={2} eyebrow={dict.home.featured.title}>
            {dict.home.featured.subtitle}
          </Heading>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-text transition hover:text-accent"
          >
            {dict.home.featured.viewAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

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
