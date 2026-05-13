import type { Profile } from '@/core/domain/entities/profile';
import type { ProfileRepository } from '@/core/domain/repositories/profile-repository';
import { PROFILE_DATA } from '../data/profile.data';

export class InMemoryProfileRepository implements ProfileRepository {
  constructor(private readonly data: Profile = PROFILE_DATA) {}

  async get(): Promise<Profile> {
    return this.data;
  }
}
