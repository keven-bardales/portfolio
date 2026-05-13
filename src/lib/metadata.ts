import type { Metadata } from 'next';
import type { Locale } from '@/core/i18n/locales';
import { env } from '@/shared/config/env';

interface BuildMetadataInput {
  readonly locale: Locale;
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly siteName: string;
  readonly image?: string;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = `${env.SITE_URL}/${input.locale}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en${input.path}`,
        es: `/es${input.path}`,
        'x-default': `/en${input.path}`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: input.siteName,
      locale: input.locale === 'es' ? 'es_HN' : 'en_US',
      title: input.title,
      description: input.description,
      images: input.image ? [input.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
    },
  };
}
