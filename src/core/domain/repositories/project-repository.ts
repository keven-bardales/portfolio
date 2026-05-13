import type { Project } from '../entities/project';

export interface ProjectRepository {
  findAll(): Promise<readonly Project[]>;
  findBySlug(slug: string): Promise<Project | null>;
}
