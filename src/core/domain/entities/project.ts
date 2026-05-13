import type {
  LocalizedString,
  LocalizedStringArray,
} from '../value-objects/localized-string';

export type ProjectCategory =
  | 'fintech'
  | 'erp'
  | 'crm'
  | 'web'
  | 'portal'
  | 'integration';

export type ProjectLinkKind = 'live' | 'repo' | 'case-study' | 'other';

export interface ProjectLink {
  readonly label: LocalizedString;
  readonly href: string;
  readonly kind: ProjectLinkKind;
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: LocalizedString;
  readonly width: number;
  readonly height: number;
}

export interface Project {
  readonly slug: string;
  readonly title: LocalizedString;
  readonly tagline: LocalizedString;
  readonly description: LocalizedString;
  readonly role: LocalizedString;
  readonly company?: string;
  readonly category: ProjectCategory;
  readonly techStack: readonly string[];
  readonly impact: LocalizedStringArray;
  readonly links: readonly ProjectLink[];
  readonly images: readonly ProjectImage[];
  readonly featured: boolean;
  readonly year: number;
  readonly order: number;
  readonly confidential: boolean;
}
