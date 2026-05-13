import 'server-only';
import type { Locale } from './locales';
import enDict from './dictionaries/en.json';

export type Dictionary = typeof enDict;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((m) => m.default as Dictionary),
  es: () => import('./dictionaries/es.json').then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
