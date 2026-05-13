import type { Locale } from '@/core/i18n/locales';
import type { Profile } from '@/core/domain/entities/profile';
import type { SocialLink } from '@/core/domain/entities/social-link';
import { env } from '@/shared/config/env';

export function personJsonLd(
  profile: Profile,
  social: readonly SocialLink[],
  locale: Locale,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title[locale],
    description: profile.summary[locale],
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location[locale],
    },
    url: env.NEXT_PUBLIC_SITE_URL,
    sameAs: social
      .filter((s) => s.kind !== 'email')
      .map((s) => s.href),
  };
}
