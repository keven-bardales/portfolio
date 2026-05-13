import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/motion/fade-in';

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function ContactCta({ locale, dict }: Props) {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-subtle/40 p-10 md:p-16">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              ✦ {dict.home.cta.title}
            </span>
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
              {dict.home.cta.subtitle}
            </h2>
            <Button href={`/${locale}/contact`} variant="primary" size="lg">
              {dict.home.cta.button}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
