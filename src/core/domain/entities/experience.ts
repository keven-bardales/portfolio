import type {
  LocalizedString,
  LocalizedStringArray,
} from '../value-objects/localized-string';
import type { Period } from '../value-objects/period';

export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance';
export type WorkArrangement = 'remote' | 'on-site' | 'hybrid';

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly companyUrl?: string;
  readonly role: LocalizedString;
  readonly period: Period;
  readonly type: EmploymentType;
  readonly location: LocalizedString;
  readonly arrangement: WorkArrangement;
  readonly summary: LocalizedString;
  readonly bullets: LocalizedStringArray;
  readonly techStack: readonly string[];
  readonly order: number;
}
