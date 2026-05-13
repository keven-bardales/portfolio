import type { Experience } from '@/core/domain/entities/experience';
import type { ExperienceRepository } from '@/core/domain/repositories/experience-repository';
import { EXPERIENCES_DATA } from '../data/experiences.data';

export class InMemoryExperienceRepository implements ExperienceRepository {
  constructor(private readonly data: readonly Experience[] = EXPERIENCES_DATA) {}

  async findAll(): Promise<readonly Experience[]> {
    return [...this.data].sort((a, b) => a.order - b.order);
  }

  async findById(id: string): Promise<Experience | null> {
    return this.data.find((e) => e.id === id) ?? null;
  }
}
