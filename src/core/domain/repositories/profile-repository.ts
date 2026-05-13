import type { Profile } from '../entities/profile';

export interface ProfileRepository {
  get(): Promise<Profile>;
}
