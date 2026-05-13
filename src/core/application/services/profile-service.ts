import type { Profile } from '@/core/domain/entities/profile';
import type { ProfileRepository } from '@/core/domain/repositories/profile-repository';

export class ProfileService {
  constructor(private readonly repo: ProfileRepository) {}

  async get(): Promise<Profile> {
    return this.repo.get();
  }
}
