import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Keven Bardales — Software Engineer',
    short_name: 'Keven Bardales',
    description:
      'Software Engineer building production full-stack systems — Stripe, SAP, AI workflows.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
