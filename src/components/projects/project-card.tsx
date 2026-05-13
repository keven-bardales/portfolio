import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/core/i18n/locales';
import type { Project } from '@/core/domain/entities/project';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

type Props = {
  project: Project;
  locale: Locale;
  detailLabel: string;
};

export function ProjectCard({ project, locale, detailLabel }: Props) {
  const liveLink = project.links.find((l) => l.kind === 'live');
  const hasDetail = !project.confidential;
  const href = hasDetail ? `/${locale}/projects/${project.slug}` : liveLink?.href;

  const body = (
    <>
      <div className="flex items-start justify-between gap-4 p-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            {project.year} · {project.category}
          </span>
          <h3 className="font-display text-2xl leading-tight tracking-tight">
            {project.title[locale]}
          </h3>
          <p className="text-sm text-text-muted">{project.tagline[locale]}</p>
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
          aria-hidden
        />
      </div>
      <div className="flex flex-wrap items-center gap-1.5 border-t border-border/60 p-6 pt-4">
        {project.techStack.slice(0, 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.techStack.length > 5 ? (
          <Badge variant="outline">+{project.techStack.length - 5}</Badge>
        ) : null}
      </div>
    </>
  );

  if (!href) {
    return <Card className="flex h-full flex-col">{body}</Card>;
  }

  const isExternal = href.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
        aria-label={detailLabel}
      >
        <Card className="flex h-full flex-col">{body}</Card>
      </a>
    );
  }

  return (
    <Link href={href} className="block focus:outline-none" aria-label={detailLabel}>
      <Card className="flex h-full flex-col">{body}</Card>
    </Link>
  );
}
