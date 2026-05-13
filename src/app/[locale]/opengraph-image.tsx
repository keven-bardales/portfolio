import { ImageResponse } from 'next/og';
import { isLocale } from '@/core/i18n/locales';
import { services } from '@/infrastructure/container/container';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Keven Bardales — Software Engineer';

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const profile = await services.profile.get();
  const localeKey = isLocale(locale) ? locale : 'en';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#fafafa',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(56,108,255,0.10) 0%, transparent 60%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#6b7280',
            }}
          >
            {profile.title[localeKey]}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            style={{
              fontSize: 110,
              fontWeight: 700,
              color: '#0a0a0a',
              lineHeight: 1.0,
              letterSpacing: -3,
              margin: 0,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#374151',
              lineHeight: 1.3,
              maxWidth: 980,
              margin: 0,
            }}
          >
            {profile.tagline[localeKey]}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#6b7280',
            fontSize: 22,
          }}
        >
          <span>{profile.location[localeKey]}</span>
          <span style={{ color: '#386cff', fontWeight: 600 }}>kevenbardales.com</span>
        </div>
      </div>
    ),
    size,
  );
}
