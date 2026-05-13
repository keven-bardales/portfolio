export type SkillLevel = 'core' | 'proficient' | 'familiar';

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly categoryId: string;
  readonly level?: SkillLevel;
  readonly order: number;
}
