import type { Project } from '@/core/domain/entities/project';
import {
  localized,
  localizedList,
} from '@/core/domain/value-objects/localized-string';

export const PROJECTS_DATA: readonly Project[] = [
  {
    slug: 'fundraising-platform-stripe-connect',
    title: localized(
      'Fundraising platform with Stripe Connect',
      'Plataforma de fundraising con Stripe Connect',
    ),
    tagline: localized(
      'End-to-end disbursement flow with Payouts and Webhooks.',
      'Flujo completo de desembolsos con Payouts y Webhooks.',
    ),
    description: localized(
      'Production fundraising platform built with Next.js, Supabase, and NestJS. I led the full-stack development of the disbursement flow with Stripe Connect — onboarding, KYC, balance tracking, payouts, and webhook reconciliation — alongside server-side paginated tables, image cropping, and a Twenty CRM integration triggered by Webflow events.',
      'Plataforma de fundraising en producción construida con Next.js, Supabase y NestJS. Lideré el desarrollo full-stack del flujo de desembolsos con Stripe Connect — onboarding, KYC, tracking de saldos, payouts y reconciliación por webhooks — además de tablas paginadas en servidor, recorte de imágenes y la integración con Twenty CRM disparada por eventos de Webflow.',
    ),
    role: localized('Lead full-stack engineer', 'Ingeniero full-stack líder'),
    company: 'El Paso Labs',
    category: 'fintech',
    techStack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Supabase',
      'PostgreSQL',
      'Stripe Connect',
      'Stripe Webhooks',
      'Tailwind CSS',
    ],
    impact: localizedList(
      [
        'Designed the disbursement state machine — pending, in-transit, paid, failed — driven by Stripe webhook events.',
        'Held production ownership during the lead engineer’s absence — reviews, deploys, and incident response.',
        'Shipped server-side paginated tables that scaled from hundreds to thousands of rows without UX degradation.',
      ],
      [
        'Diseñé la máquina de estados de desembolsos — pendiente, en tránsito, pagado, fallido — manejada por eventos de Stripe.',
        'Tomé propiedad de producción durante la ausencia del lead engineer — reviews, deploys y manejo de incidentes.',
        'Entregué tablas paginadas en servidor que escalaron de cientos a miles de filas sin degradar la UX.',
      ],
    ),
    links: [],
    images: [],
    featured: true,
    year: 2025,
    order: 1,
    confidential: true,
  },
  {
    slug: 'partner-portal-payments',
    title: localized(
      'Partner portal for merchant onboarding',
      'Portal de partners para onboarding de comercios',
    ),
    tagline: localized(
      'Angular + .NET portal for onboarding new merchants into payment products.',
      'Portal Angular + .NET para incorporar nuevos comercios a productos de pago.',
    ),
    description: localized(
      'A partner-facing portal that handles merchant onboarding for payment products — KYC, document upload, status tracking, and approvals. Built with Angular on the frontend and .NET on the backend, integrated with internal payment platforms.',
      'Un portal orientado a partners que maneja el onboarding de comercios para productos de pago — KYC, carga de documentos, tracking de estatus y aprobaciones. Construido con Angular en el frontend y .NET en el backend, integrado con plataformas de pago internas.',
    ),
    role: localized('Full-stack engineer', 'Ingeniero full-stack'),
    company: 'El Paso Labs',
    category: 'fintech',
    techStack: ['Angular', 'TypeScript', '.NET', 'C#', 'PostgreSQL'],
    impact: localizedList(
      [
        'Built the document-upload + KYC workflow end-to-end, including file validation and signed-URL storage.',
        'Implemented role-based access control for partner admins and operations reviewers.',
        'Reduced average onboarding time by surfacing missing-document errors in real time.',
      ],
      [
        'Construí el flujo de carga de documentos + KYC de extremo a extremo, incluyendo validación de archivos y almacenamiento con URLs firmadas.',
        'Implementé control de acceso por roles para admins de partners y revisores de operaciones.',
        'Reduje el tiempo promedio de onboarding mostrando errores de documentos faltantes en tiempo real.',
      ],
    ),
    links: [],
    images: [],
    featured: true,
    year: 2025,
    order: 2,
    confidential: true,
  },
  {
    slug: 'sap-routing-erp',
    title: localized(
      'Routing & ERP integration platform',
      'Plataforma de ruteo e integración ERP',
    ),
    tagline: localized(
      'Large-scale routing system integrated with SAP and external ERPs.',
      'Sistema de ruteo a gran escala integrado con SAP y ERPs externos.',
    ),
    description: localized(
      'Frontend engineering on a routing and operations platform that integrates with SAP and other external ERP systems. The product serves operations teams managing high-volume logistics flows. Focus on performance, reusable component libraries, and UX improvements across dashboards.',
      'Ingeniería frontend en una plataforma de ruteo y operaciones que se integra con SAP y otros ERPs externos. El producto sirve a equipos de operaciones que manejan flujos logísticos de alto volumen. Enfoque en performance, librerías de componentes reusables y mejoras de UX en dashboards.',
    ),
    role: localized('Frontend engineer', 'Ingeniero frontend'),
    company: 'Albatros Services',
    category: 'erp',
    techStack: ['Angular', 'TypeScript', 'RxJS', 'SAP', 'Tailwind CSS'],
    impact: localizedList(
      [
        'Cut perceived load time on key dashboards by extracting heavy lists into virtualized views.',
        'Established a shared component library reused by multiple feature teams.',
        'Improved data-entry flows by simplifying form state and adding optimistic feedback.',
      ],
      [
        'Reduje el tiempo de carga percibido en dashboards clave extrayendo listas pesadas a vistas virtualizadas.',
        'Establecí una librería de componentes compartida reusada por múltiples equipos de feature.',
        'Mejoré los flujos de captura de datos simplificando estado de formularios y añadiendo feedback optimista.',
      ],
    ),
    links: [],
    images: [],
    featured: true,
    year: 2025,
    order: 3,
    confidential: true,
  },
  {
    slug: 'real-estate-crm',
    title: localized(
      'Real estate CRM with quotations and installments',
      'CRM inmobiliario con cotizaciones y manejo de cuotas',
    ),
    tagline: localized(
      'CRM for apartment sales — quotations, installment plans, and SAP-backed pricing.',
      'CRM para venta de apartamentos — cotizaciones, planes de cuotas y precios respaldados por SAP.',
    ),
    description: localized(
      'A CRM tailored for real estate sales of multi-unit residential developments. Handles unit availability, dynamic quotations, installment-plan generation, and customer document tracking. Built with .NET Clean Architecture and integrated with SAP Business One for unified pricing and accounting.',
      'Un CRM hecho a medida para ventas inmobiliarias de desarrollos residenciales multi-unidad. Maneja disponibilidad de unidades, cotizaciones dinámicas, generación de planes de cuotas y tracking de documentos del cliente. Construido con Clean Architecture en .NET e integrado con SAP Business One para precios y contabilidad unificados.',
    ),
    role: localized('Software engineer', 'Ingeniero de software'),
    company: 'Grupo Platino',
    category: 'crm',
    techStack: ['.NET', 'C#', 'Clean Architecture', 'SAP Business One', 'PostgreSQL'],
    impact: localizedList(
      [
        'Modeled apartment-unit availability and pricing rules as a domain layer independent from SAP.',
        'Generated installment plans with full audit trail and SAP-side invoice synchronization.',
        'Replaced spreadsheet-based quoting with a single source of truth for the sales team.',
      ],
      [
        'Modelé disponibilidad de unidades y reglas de precios como una capa de dominio independiente de SAP.',
        'Generé planes de cuotas con auditoría completa y sincronización de facturas con SAP.',
        'Reemplacé la cotización basada en hojas de cálculo por una sola fuente de verdad para el equipo de ventas.',
      ],
    ),
    links: [],
    images: [],
    featured: false,
    year: 2024,
    order: 4,
    confidential: true,
  },
  {
    slug: 'retail-machinery-crm-sap',
    title: localized(
      'Retail CRM for machinery sales with SAP',
      'CRM de retail para venta de maquinaria con SAP',
    ),
    tagline: localized(
      'Pipeline, quotations, and SAP Business One integration for industrial machinery sales.',
      'Pipeline, cotizaciones e integración con SAP Business One para venta de maquinaria industrial.',
    ),
    description: localized(
      'CRM for industrial machinery sales — opportunity pipeline, quotation generation, inventory visibility, and customer history. Integrated directly with SAP Business One for product catalog, pricing, and order creation.',
      'CRM para venta de maquinaria industrial — pipeline de oportunidades, generación de cotizaciones, visibilidad de inventario e historial de cliente. Integrado directamente con SAP Business One para catálogo de productos, precios y creación de órdenes.',
    ),
    role: localized('Software engineer', 'Ingeniero de software'),
    company: 'Grupo Platino',
    category: 'crm',
    techStack: ['.NET', 'C#', 'SAP Business One', 'PostgreSQL'],
    impact: localizedList(
      [
        'Designed an anti-corruption layer that isolated CRM domain logic from SAP’s data model.',
        'Cut quote-to-order time by automating inventory checks and price validations.',
        'Built a single dashboard for the sales team that previously required jumping between SAP screens.',
      ],
      [
        'Diseñé una capa anticorrupción que aisló la lógica de dominio del CRM del modelo de datos de SAP.',
        'Reduje el tiempo de cotización a orden automatizando validaciones de inventario y precios.',
        'Construí un dashboard único para el equipo de ventas que antes requería saltar entre pantallas de SAP.',
      ],
    ),
    links: [],
    images: [],
    featured: false,
    year: 2024,
    order: 5,
    confidential: true,
  },
  {
    slug: 'farmaleros',
    title: localized('Farmaleros', 'Farmaleros'),
    tagline: localized(
      'Pharmacy e-commerce experience.',
      'Experiencia e-commerce de farmacia.',
    ),
    description: localized(
      'Public-facing website for a pharmacy product line. Frontend craft focused on clarity, mobile performance, and clean information architecture.',
      'Sitio web público para una línea de productos farmacéuticos. Trabajo de frontend enfocado en claridad, performance móvil y arquitectura de información limpia.',
    ),
    role: localized('Web developer', 'Desarrollador web'),
    category: 'web',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    impact: localizedList(
      [
        'Mobile-first responsive layout with optimized images.',
        'Clear product taxonomy and discoverable navigation.',
      ],
      [
        'Layout responsivo mobile-first con imágenes optimizadas.',
        'Taxonomía de productos clara y navegación fácil de descubrir.',
      ],
    ),
    links: [
      {
        label: localized('Visit site', 'Visitar sitio'),
        href: 'https://farmaleros.com',
        kind: 'live',
      },
    ],
    images: [],
    featured: false,
    year: 2024,
    order: 6,
    confidential: false,
  },
  {
    slug: 'creativohn',
    title: localized('Creativo HN', 'Creativo HN'),
    tagline: localized(
      'Brand landing for a Honduran creative studio.',
      'Landing de marca para un estudio creativo hondureño.',
    ),
    description: localized(
      'A marketing landing page with brand-forward typography and motion. Focused on conversion clarity and accessibility.',
      'Una landing de marketing con tipografía y motion centrados en la marca. Enfoque en claridad de conversión y accesibilidad.',
    ),
    role: localized('Web developer', 'Desarrollador web'),
    category: 'web',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    impact: localizedList(
      ['Pixel-precise brand implementation with motion polish.'],
      ['Implementación de marca con precisión de pixel y motion cuidado.'],
    ),
    links: [
      {
        label: localized('Visit site', 'Visitar sitio'),
        href: 'https://www.creativohn.com/landing',
        kind: 'live',
      },
    ],
    images: [],
    featured: false,
    year: 2024,
    order: 7,
    confidential: false,
  },
  {
    slug: 'jetour-hn',
    title: localized('Jetour HN', 'Jetour HN'),
    tagline: localized(
      'Automotive brand site for the Honduras market.',
      'Sitio de marca automotriz para el mercado hondureño.',
    ),
    description: localized(
      'Public website for the Honduran Jetour distributor — model catalog, dealer locator, and lead capture.',
      'Sitio web público para el distribuidor hondureño de Jetour — catálogo de modelos, localizador de concesionarios y captura de leads.',
    ),
    role: localized('Web developer', 'Desarrollador web'),
    category: 'web',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    impact: localizedList(
      [
        'Performance-first asset strategy for large hero imagery.',
        'Structured data so listings surface in search.',
      ],
      [
        'Estrategia de assets pensada en performance para imágenes hero grandes.',
        'Datos estructurados para que los listings aparezcan en búsqueda.',
      ],
    ),
    links: [
      {
        label: localized('Visit site', 'Visitar sitio'),
        href: 'https://www.jetourhn.com/',
        kind: 'live',
      },
    ],
    images: [],
    featured: false,
    year: 2024,
    order: 8,
    confidential: false,
  },
  {
    slug: 'construction-cost-control',
    title: localized(
      'Construction cost-control app',
      'App de control de costos de construcción',
    ),
    tagline: localized(
      'Budget tracking and cost reporting for construction projects.',
      'Tracking de presupuesto y reportería de costos para proyectos de construcción.',
    ),
    description: localized(
      'Internal application for tracking construction project budgets — estimates vs. actuals, supplier invoices, and reporting. Built with .NET on the backend and Next.js on the frontend.',
      'Aplicación interna para tracking de presupuestos de proyectos de construcción — estimados vs reales, facturas de proveedores y reportería. Construida con .NET en el backend y Next.js en el frontend.',
    ),
    role: localized('Software engineer', 'Ingeniero de software'),
    company: 'Grupo Platino',
    category: 'erp',
    techStack: ['.NET', 'C#', 'Next.js', 'PostgreSQL'],
    impact: localizedList(
      [
        'Centralized cost data that was previously scattered across spreadsheets.',
        'Real-time variance alerts when actual costs drifted from estimates.',
      ],
      [
        'Centralicé datos de costos que antes estaban dispersos en hojas de cálculo.',
        'Alertas de variación en tiempo real cuando los costos reales se desviaban del estimado.',
      ],
    ),
    links: [],
    images: [],
    featured: false,
    year: 2024,
    order: 9,
    confidential: true,
  },
];
