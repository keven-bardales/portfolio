import type { SocialLink } from '@/core/domain/entities/social-link';
import type { SocialLinkRepository } from '@/core/domain/repositories/social-link-repository';
import { SOCIAL_LINKS_DATA } from '../data/social-links.data';

export class InMemorySocialLinkRepository implements SocialLinkRepository {
  constructor(private readonly data: readonly SocialLink[] = SOCIAL_LINKS_DATA) {}

  async findAll(): Promise<readonly SocialLink[]> {
    return [...this.data];
  }
}
