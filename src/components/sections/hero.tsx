import { ArrowRight, MapPin } from 'lucide-react';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import type { Profile } from '@/core/domain/entities/profile';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/motion/fade-in';

type Props = {
  locale: Locale;
  dict: Dictionary;
  profile: Profile;
};

export function Hero({ locale, dict, profile }: Props) {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28 lg:pt-32">
      <Container>
        <div className="flex flex-col gap-8 md:max-w-3xl">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-mono uppercase tracking-[0.18em] text-text-muted">
                {dict.home.hero.greeting}
              </span>
              <span className="h-1 w-1 rounded-full bg-text-muted/60" aria-hidden />
              <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-text-muted">
                <MapPin className="h-3 w-3" aria-hidden />
                {profile.location[locale]}
              </span>
              <span className="h-1 w-1 rounded-full bg-text-muted/60" aria-hidden />
              <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {dict.home.hero.available}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem]">
              {profile.name}
              <span className="block text-text-muted">{profile.title[locale]}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
              {profile.tagline[locale]}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button href={`/${locale}/projects`} variant="primary" size="lg">
                {dict.home.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={`/${locale}/contact`} variant="secondary" size="lg">
                {dict.home.hero.ctaSecondary}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
