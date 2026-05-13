import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/core/i18n/locales';
import { services } from '@/infrastructure/container/container';
import { env } from '@/shared/config/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.NEXT_PUBLIC_SITE_URL;
  const projects = await services.project.list();
  const staticPaths = ['', '/projects', '/about', '/contact'] as const;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
    for (const project of projects) {
      if (project.confidential) continue;
      entries.push({
        url: `${base}/${locale}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }
  return entries;
}
