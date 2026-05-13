import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import type { Experience } from '@/core/domain/entities/experience';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ExperienceItem } from '@/components/experience/experience-item';
import { FadeIn } from '@/components/motion/fade-in';

type Props = {
  locale: Locale;
  dict: Dictionary;
  experiences: readonly Experience[];
};

export function ExperienceTimeline({ locale, dict, experiences }: Props) {
  return (
    <Section className="border-t border-border/60 bg-bg-subtle/40">
      <Container className="flex flex-col gap-12">
        <Heading level={2} eyebrow={dict.home.experience.title}>
          {dict.home.experience.subtitle}
        </Heading>
        <FadeIn>
          <div className="flex flex-col">
            {experiences.map((exp) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                locale={locale}
                presentLabel={dict.home.experience.present}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
