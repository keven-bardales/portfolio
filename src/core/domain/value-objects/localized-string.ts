import type { Locale } from '@/core/i18n/locales';

export type LocalizedString = { readonly en: string; readonly es: string };
export type LocalizedStringArray = {
  readonly en: readonly string[];
  readonly es: readonly string[];
};

export function localized(en: string, es: string): LocalizedString {
  return { en, es };
}

export function localizedList(en: readonly string[], es: readonly string[]): LocalizedStringArray {
  return { en, es };
}

export function pickLocalized(field: LocalizedString, locale: Locale): string;
export function pickLocalized(field: LocalizedStringArray, locale: Locale): readonly string[];
export function pickLocalized(
  field: LocalizedString | LocalizedStringArray,
  locale: Locale,
): string | readonly string[] {
  return field[locale];
}
