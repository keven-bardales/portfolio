import type { SocialLink } from '@/core/domain/entities/social-link';
import type { SocialLinkRepository } from '@/core/domain/repositories/social-link-repository';

export class SocialLinkService {
  constructor(private readonly repo: SocialLinkRepository) {}

  async list(): Promise<readonly SocialLink[]> {
    const all = await this.repo.findAll();
    return [...all].sort((a, b) => a.order - b.order);
  }
}
