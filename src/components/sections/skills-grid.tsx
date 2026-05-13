import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import type { SkillGroup } from '@/core/application/services/skill-service';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';

type Props = {
  locale: Locale;
  dict: Dictionary;
  groups: readonly SkillGroup[];
};

export function SkillsGrid({ locale, dict, groups }: Props) {
  return (
    <Section className="border-t border-border/60">
      <Container className="flex flex-col gap-12">
        <Heading level={2} eyebrow={dict.home.skills.title}>
          {dict.home.skills.subtitle}
        </Heading>
        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ category, skills }) => (
            <div key={category.id} className="flex flex-col gap-3">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
                {category.name[locale]}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant={skill.level === 'core' ? 'accent' : 'default'}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
