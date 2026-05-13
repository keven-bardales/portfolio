import type { Experience } from '@/core/domain/entities/experience';
import type { ExperienceRepository } from '@/core/domain/repositories/experience-repository';

export class ExperienceService {
  constructor(private readonly repo: ExperienceRepository) {}

  async list(): Promise<readonly Experience[]> {
    const all = await this.repo.findAll();
    return [...all].sort((a, b) => a.order - b.order);
  }
}
