import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#386cff',
          color: '#ffffff',
          fontSize: 120,
          fontWeight: 800,
          letterSpacing: -6,
          fontFamily: 'sans-serif',
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
