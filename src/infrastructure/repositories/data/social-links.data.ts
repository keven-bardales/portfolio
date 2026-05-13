import type { SocialLink } from '@/core/domain/entities/social-link';
import { localized } from '@/core/domain/value-objects/localized-string';

export const SOCIAL_LINKS_DATA: readonly SocialLink[] = [
  {
    id: 'github',
    kind: 'github',
    label: localized('GitHub', 'GitHub'),
    href: 'https://github.com/keven-bardales',
    handle: '@keven-bardales',
    order: 1,
  },
  {
    id: 'linkedin',
    kind: 'linkedin',
    label: localized('LinkedIn', 'LinkedIn'),
    href: 'https://www.linkedin.com/in/keven-bardales/',
    handle: 'keven-bardales',
    order: 2,
  },
  {
    id: 'email',
    kind: 'email',
    label: localized('Email', 'Correo'),
    href: 'mailto:keven.bardales@gmail.com',
    handle: 'keven.bardales@gmail.com',
    order: 3,
  },
];
