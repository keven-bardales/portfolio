import type { LocalizedString } from '../value-objects/localized-string';

export interface Profile {
  readonly name: string;
  readonly title: LocalizedString;
  readonly location: LocalizedString;
  readonly tagline: LocalizedString;
  readonly summary: LocalizedString;
  readonly email: string;
  readonly phone?: string;
  readonly avatarUrl?: string;
  readonly resumeUrl?: { readonly en: string; readonly es: string };
  readonly availability: 'open' | 'limited' | 'unavailable';
  readonly yearsOfExperience: number;
}
