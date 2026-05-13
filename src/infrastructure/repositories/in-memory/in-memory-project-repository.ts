import type { Project } from '@/core/domain/entities/project';
import type { ProjectRepository } from '@/core/domain/repositories/project-repository';
import { PROJECTS_DATA } from '../data/projects.data';

export class InMemoryProjectRepository implements ProjectRepository {
  constructor(private readonly data: readonly Project[] = PROJECTS_DATA) {}

  async findAll(): Promise<readonly Project[]> {
    return [...this.data].sort((a, b) => a.order - b.order);
  }

  async findBySlug(slug: string): Promise<Project | null> {
    return this.data.find((p) => p.slug === slug) ?? null;
  }
}
