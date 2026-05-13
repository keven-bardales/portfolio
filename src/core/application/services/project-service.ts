import type { Project } from '@/core/domain/entities/project';
import type { ProjectRepository } from '@/core/domain/repositories/project-repository';
import { NotFoundError } from '@/core/domain/errors/domain-error';

export class ProjectService {
  constructor(private readonly repo: ProjectRepository) {}

  async list(): Promise<readonly Project[]> {
    const all = await this.repo.findAll();
    return [...all].sort((a, b) => a.order - b.order);
  }

  async getFeatured(limit = 3): Promise<readonly Project[]> {
    const all = await this.list();
    return all.filter((p) => p.featured).slice(0, limit);
  }

  async getBySlug(slug: string): Promise<Project> {
    const project = await this.repo.findBySlug(slug);
    if (!project) {
      throw new NotFoundError(`Project not found: ${slug}`);
    }
    return project;
  }

  async listSlugs(): Promise<readonly string[]> {
    const all = await this.repo.findAll();
    return all.map((p) => p.slug);
  }
}
