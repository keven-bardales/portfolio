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
          padding: '72px',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(56,108,255,0.28) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(56,108,255,0.10) 0%, transparent 50%)',
          fontFamily: 'sans-serif',
          color: '#f5f5f5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: '#386cff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -2,
              color: '#ffffff',
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#a3a3a3',
            }}
          >
            {profile.title[localeKey]}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <h1
            style={{
              fontSize: 120,
              fontWeight: 700,
              color: '#fafafa',
              lineHeight: 1.0,
              letterSpacing: -4,
              margin: 0,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#d4d4d4',
              lineHeight: 1.35,
              maxWidth: 1000,
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
            color: '#a3a3a3',
            fontSize: 22,
            borderTop: '1px solid #262626',
            paddingTop: 24,
          }}
        >
          <span>{profile.location[localeKey]}</span>
          <span style={{ color: '#7aa2ff', fontWeight: 600 }}>kevenbardales.com</span>
        </div>
      </div>
    ),
    size,
  );
}
