import type { Skill } from '../entities/skill';
import type { SkillCategory } from '../entities/skill-category';

export interface SkillRepository {
  findAllSkills(): Promise<readonly Skill[]>;
  findAllCategories(): Promise<readonly SkillCategory[]>;
}
