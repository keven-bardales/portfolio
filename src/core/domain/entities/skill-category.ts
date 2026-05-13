import type { LocalizedString } from '../value-objects/localized-string';

export interface SkillCategory {
  readonly id: string;
  readonly name: LocalizedString;
  readonly order: number;
}
