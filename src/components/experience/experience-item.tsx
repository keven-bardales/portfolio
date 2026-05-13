import type { Locale } from '@/core/i18n/locales';
import type { Experience } from '@/core/domain/entities/experience';
import { formatPeriod } from '@/core/domain/value-objects/period';
import { Badge } from '@/components/ui/badge';

type Props = {
  experience: Experience;
  locale: Locale;
  presentLabel: string;
};

export function ExperienceItem({ experience, locale, presentLabel }: Props) {
  const period = formatPeriod(experience.period, locale, presentLabel);

  return (
    <article className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[200px_1fr] md:gap-12">
      <header className="flex flex-col gap-1">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
          {period}
        </p>
        <h3 className="font-display text-xl leading-tight">{experience.company}</h3>
        <p className="text-sm text-text-muted">{experience.location[locale]}</p>
      </header>

      <div className="flex flex-col gap-4">
        <p className="font-mono text-sm uppercase tracking-wider text-text">
          {experience.role[locale]}
        </p>
        <p className="text-text-muted">{experience.summary[locale]}</p>
        <ul className="flex flex-col gap-2 text-sm text-text-muted">
          {experience.bullets[locale].map((bullet, idx) => (
            <li key={idx} className="flex gap-2.5 leading-relaxed">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-text-muted/60" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {experience.techStack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
