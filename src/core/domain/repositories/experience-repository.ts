import type { Experience } from '../entities/experience';

export interface ExperienceRepository {
  findAll(): Promise<readonly Experience[]>;
  findById(id: string): Promise<Experience | null>;
}
