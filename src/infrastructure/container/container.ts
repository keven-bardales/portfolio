import { ProfileService } from '@/core/application/services/profile-service';
import { ExperienceService } from '@/core/application/services/experience-service';
import { ProjectService } from '@/core/application/services/project-service';
import { SkillService } from '@/core/application/services/skill-service';
import { SocialLinkService } from '@/core/application/services/social-link-service';
import { ContactService } from '@/core/application/services/contact-service';
import { InMemoryProfileRepository } from '@/infrastructure/repositories/in-memory/in-memory-profile-repository';
import { InMemoryExperienceRepository } from '@/infrastructure/repositories/in-memory/in-memory-experience-repository';
import { InMemoryProjectRepository } from '@/infrastructure/repositories/in-memory/in-memory-project-repository';
import { InMemorySkillRepository } from '@/infrastructure/repositories/in-memory/in-memory-skill-repository';
import { InMemorySocialLinkRepository } from '@/infrastructure/repositories/in-memory/in-memory-social-link-repository';
import { ResendMailService } from '@/infrastructure/mail/resend-mail-service';
import { ConsoleMailService } from '@/infrastructure/mail/console-mail-service';
import type { MailService } from '@/core/application/ports/mail-service';
import { env } from '@/shared/config/env';

function buildMailService(): MailService {
  if (env.RESEND_API_KEY) {
    return new ResendMailService(env.RESEND_API_KEY);
  }
  return new ConsoleMailService();
}

const profileRepo = new InMemoryProfileRepository();
const experienceRepo = new InMemoryExperienceRepository();
const projectRepo = new InMemoryProjectRepository();
const skillRepo = new InMemorySkillRepository();
const socialRepo = new InMemorySocialLinkRepository();
const mailService = buildMailService();

export const services = {
  profile: new ProfileService(profileRepo),
  experience: new ExperienceService(experienceRepo),
  project: new ProjectService(projectRepo),
  skill: new SkillService(skillRepo),
  social: new SocialLinkService(socialRepo),
  contact: new ContactService(mailService, {
    to: env.CONTACT_TO_EMAIL,
    from: env.CONTACT_FROM_EMAIL,
    subjectPrefix: '[Portfolio] ',
  }),
} as const;

export type Services = typeof services;
