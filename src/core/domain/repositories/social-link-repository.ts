import type { SocialLink } from '../entities/social-link';

export interface SocialLinkRepository {
  findAll(): Promise<readonly SocialLink[]>;
}
