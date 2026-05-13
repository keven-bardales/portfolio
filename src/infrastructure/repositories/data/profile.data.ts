import type { Profile } from '@/core/domain/entities/profile';
import { localized } from '@/core/domain/value-objects/localized-string';

export const PROFILE_DATA: Profile = {
  name: 'Keven Bardales',
  title: localized('Software Engineer', 'Ingeniero de Software'),
  location: localized('San Pedro Sula, Honduras', 'San Pedro Sula, Honduras'),
  tagline: localized(
    'I ship production code across the full stack — fintech payments, ERP integrations, and AI-augmented workflows.',
    'Envío código a producción en todo el stack — pagos fintech, integraciones ERP y flujos potenciados con IA.',
  ),
  summary: localized(
    '3+ years building scalable web applications end-to-end. Shipped Stripe Connect disbursement flows, SAP Business One integrations, and CRM systems used in production. Took ownership of production during my lead engineer’s extended absence. Daily user of Claude Code and MCP-based workflows.',
    'Más de 3 años construyendo aplicaciones web escalables de extremo a extremo. He entregado flujos de pagos con Stripe Connect, integraciones con SAP Business One y sistemas CRM usados en producción. Tomé el control de producción durante la ausencia prolongada de mi lead engineer. Uso diario de Claude Code y flujos basados en MCP.',
  ),
  email: 'keven.bardales@gmail.com',
  resumeUrl: {
    en: '/keven-bardales-cv.pdf',
    es: '/keven-bardales-cv.pdf',
  },
  availability: 'open',
  yearsOfExperience: 3,
};
