import type { Experience } from '@/core/domain/entities/experience';
import {
  localized,
  localizedList,
} from '@/core/domain/value-objects/localized-string';

export const EXPERIENCES_DATA: readonly Experience[] = [
  {
    id: 'el-paso-labs',
    company: 'El Paso Labs',
    role: localized('Full-Stack Engineer', 'Ingeniero Full-Stack'),
    period: { startYear: 2025, startMonth: 1, endYear: null, endMonth: null },
    type: 'full-time',
    location: localized('Remote · US', 'Remoto · EE.UU.'),
    arrangement: 'remote',
    summary: localized(
      'Lead full-stack development on a fundraising platform built with Next.js, Supabase, NestJS, and Stripe.',
      'Lidero el desarrollo full-stack en una plataforma de fundraising construida con Next.js, Supabase, NestJS y Stripe.',
    ),
    bullets: localizedList(
      [
        'Built the complete disbursement flow with Stripe Connect (Payouts, Webhooks).',
        'Integrated Twenty CRM via Webflow webhooks and Slack notifications.',
        'Took ownership of production during the lead engineer’s extended absence.',
        'Built server-side paginated tables, image cropping, and real-time data refresh.',
        'Shipped an Angular partner portal for financial payment processing.',
      ],
      [
        'Construí el flujo completo de desembolsos con Stripe Connect (Payouts, Webhooks).',
        'Integré Twenty CRM vía webhooks de Webflow y notificaciones a Slack.',
        'Tomé el control de producción durante la ausencia prolongada del lead engineer.',
        'Construí tablas paginadas en servidor, recorte de imágenes y refresco de datos en tiempo real.',
        'Entregué un portal Angular para procesamiento de pagos de partners.',
      ],
    ),
    techStack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Supabase',
      'PostgreSQL',
      'Stripe Connect',
      'Angular',
      'Tailwind CSS',
    ],
    order: 1,
  },
  {
    id: 'albatros-services',
    company: 'Albatros Services',
    role: localized('Frontend Engineer', 'Ingeniero Frontend'),
    period: { startYear: 2025, startMonth: 6, endYear: null, endMonth: null },
    type: 'full-time',
    location: localized('Remote', 'Remoto'),
    arrangement: 'remote',
    summary: localized(
      'Frontend engineering on a large-scale routing and ERP system integrated with SAP.',
      'Ingeniería frontend en un sistema de ruteo y ERP a gran escala integrado con SAP.',
    ),
    bullets: localizedList(
      [
        'Shipped performance optimizations and UI/UX improvements across high-traffic dashboards.',
        'Built and maintained reusable component libraries used by the broader engineering team.',
        'Collaborated on integrations with external ERP systems (SAP and others).',
      ],
      [
        'Entregué optimizaciones de performance y mejoras de UI/UX en dashboards de alto tráfico.',
        'Construí y mantuve librerías de componentes reusables usados por todo el equipo de ingeniería.',
        'Colaboré en integraciones con sistemas ERP externos (SAP y otros).',
      ],
    ),
    techStack: ['Angular', 'TypeScript', 'RxJS', 'SAP', 'Tailwind CSS'],
    order: 2,
  },
  {
    id: 'grupo-platino',
    company: 'Grupo Platino',
    role: localized('Software Engineer', 'Ingeniero de Software'),
    period: { startYear: 2023, startMonth: 7, endYear: 2025, endMonth: 7 },
    type: 'full-time',
    location: localized('San Pedro Sula, Honduras', 'San Pedro Sula, Honduras'),
    arrangement: 'on-site',
    summary: localized(
      'Built CRM and operations systems integrated with SAP Business One for a multi-business retail and real estate group.',
      'Construí sistemas CRM y de operaciones integrados con SAP Business One para un grupo multi-negocio de retail y bienes raíces.',
    ),
    bullets: localizedList(
      [
        'Shipped 7 CRM systems in .NET with Clean Architecture, integrated with SAP Business One.',
        'Built a construction cost-control application with .NET and Next.js.',
        'Migrated production services from a VPS to Vercel, simplifying ops.',
        'Worked across PostgreSQL and MySQL for transactional and reporting workloads.',
      ],
      [
        'Entregué 7 sistemas CRM en .NET con Clean Architecture, integrados con SAP Business One.',
        'Construí una aplicación de control de costos de construcción con .NET y Next.js.',
        'Migré servicios de producción desde un VPS a Vercel, simplificando la operación.',
        'Trabajé con PostgreSQL y MySQL para cargas transaccionales y de reportería.',
      ],
    ),
    techStack: [
      '.NET',
      'C#',
      'Clean Architecture',
      'SAP Business One',
      'Next.js',
      'PostgreSQL',
      'MySQL',
      'Vercel',
    ],
    order: 3,
  },
];
