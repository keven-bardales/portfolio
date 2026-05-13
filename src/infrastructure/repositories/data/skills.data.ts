import type { Skill } from '@/core/domain/entities/skill';
import type { SkillCategory } from '@/core/domain/entities/skill-category';
import { localized } from '@/core/domain/value-objects/localized-string';

export const SKILL_CATEGORIES_DATA: readonly SkillCategory[] = [
  { id: 'frontend', name: localized('Frontend', 'Frontend'), order: 1 },
  { id: 'backend', name: localized('Backend', 'Backend'), order: 2 },
  { id: 'databases', name: localized('Databases', 'Bases de datos'), order: 3 },
  { id: 'payments', name: localized('Payments', 'Pagos'), order: 4 },
  { id: 'cloud', name: localized('Cloud & DevOps', 'Cloud & DevOps'), order: 5 },
  { id: 'ai', name: localized('AI Tooling', 'Herramientas IA'), order: 6 },
  {
    id: 'architecture',
    name: localized('Architecture', 'Arquitectura'),
    order: 7,
  },
];

export const SKILLS_DATA: readonly Skill[] = [
  { id: 'nextjs', name: 'Next.js', categoryId: 'frontend', level: 'core', order: 1 },
  { id: 'react', name: 'React', categoryId: 'frontend', level: 'core', order: 2 },
  { id: 'angular', name: 'Angular', categoryId: 'frontend', level: 'proficient', order: 3 },
  { id: 'typescript', name: 'TypeScript', categoryId: 'frontend', level: 'core', order: 4 },
  { id: 'tailwind', name: 'Tailwind CSS', categoryId: 'frontend', level: 'core', order: 5 },

  { id: 'nodejs', name: 'Node.js', categoryId: 'backend', level: 'core', order: 1 },
  { id: 'nestjs', name: 'NestJS', categoryId: 'backend', level: 'proficient', order: 2 },
  { id: 'express', name: 'Express', categoryId: 'backend', level: 'proficient', order: 3 },
  { id: 'dotnet', name: '.NET (C#)', categoryId: 'backend', level: 'core', order: 4 },

  { id: 'postgres', name: 'PostgreSQL', categoryId: 'databases', level: 'core', order: 1 },
  { id: 'mysql', name: 'MySQL', categoryId: 'databases', level: 'proficient', order: 2 },

  { id: 'stripe-connect', name: 'Stripe Connect', categoryId: 'payments', level: 'core', order: 1 },
  { id: 'stripe-payouts', name: 'Stripe Payouts', categoryId: 'payments', level: 'core', order: 2 },
  { id: 'stripe-webhooks', name: 'Stripe Webhooks', categoryId: 'payments', level: 'core', order: 3 },

  { id: 'vercel', name: 'Vercel', categoryId: 'cloud', level: 'proficient', order: 1 },
  { id: 'docker', name: 'Docker', categoryId: 'cloud', level: 'proficient', order: 2 },
  { id: 'railway', name: 'Railway', categoryId: 'cloud', level: 'familiar', order: 3 },

  { id: 'claude-code', name: 'Claude Code', categoryId: 'ai', level: 'core', order: 1 },
  { id: 'mcp', name: 'MCP Servers', categoryId: 'ai', level: 'proficient', order: 2 },
  { id: 'prompt-eng', name: 'Prompt Engineering', categoryId: 'ai', level: 'core', order: 3 },

  { id: 'clean-arch', name: 'Clean Architecture', categoryId: 'architecture', level: 'core', order: 1 },
  { id: 'ddd', name: 'Domain-Driven Design', categoryId: 'architecture', level: 'proficient', order: 2 },
  { id: 'design-patterns', name: 'Design Patterns', categoryId: 'architecture', level: 'core', order: 3 },
  { id: 'microservices', name: 'Microservices', categoryId: 'architecture', level: 'proficient', order: 4 },
  { id: 'sap-b1', name: 'SAP Business One', categoryId: 'architecture', level: 'proficient', order: 5 },
];
