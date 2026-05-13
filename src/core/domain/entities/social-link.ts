import type { LocalizedString } from '../value-objects/localized-string';

export type SocialKind =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'email'
  | 'website'
  | 'other';

export interface SocialLink {
  readonly id: string;
  readonly kind: SocialKind;
  readonly label: LocalizedString;
  readonly href: string;
  readonly handle?: string;
  readonly order: number;
}
