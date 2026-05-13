import type { Skill } from '@/core/domain/entities/skill';
import type { SkillCategory } from '@/core/domain/entities/skill-category';
import type { SkillRepository } from '@/core/domain/repositories/skill-repository';
import {
  SKILLS_DATA,
  SKILL_CATEGORIES_DATA,
} from '../data/skills.data';

export class InMemorySkillRepository implements SkillRepository {
  constructor(
    private readonly skills: readonly Skill[] = SKILLS_DATA,
    private readonly categories: readonly SkillCategory[] = SKILL_CATEGORIES_DATA,
  ) {}

  async findAllSkills(): Promise<readonly Skill[]> {
    return [...this.skills];
  }

  async findAllCategories(): Promise<readonly SkillCategory[]> {
    return [...this.categories];
  }
}
