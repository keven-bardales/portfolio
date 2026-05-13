import type { Skill } from '@/core/domain/entities/skill';
import type { SkillCategory } from '@/core/domain/entities/skill-category';
import type { SkillRepository } from '@/core/domain/repositories/skill-repository';

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly skills: readonly Skill[];
}

export class SkillService {
  constructor(private readonly repo: SkillRepository) {}

  async listGroupedByCategory(): Promise<readonly SkillGroup[]> {
    const [skills, categories] = await Promise.all([
      this.repo.findAllSkills(),
      this.repo.findAllCategories(),
    ]);
    const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
    return sortedCategories.map((category) => ({
      category,
      skills: [...skills]
        .filter((s) => s.categoryId === category.id)
        .sort((a, b) => a.order - b.order),
    }));
  }
}
