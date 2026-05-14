import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { env } from '@/shared/config/env';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(t!=='light'&&m);document.documentElement.classList.toggle('dark',d);document.documentElement.setAttribute('data-theme-ready','true');}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: 'Keven Bardales — Software Engineer',
    template: '%s · Keven Bardales',
  },
  description:
    'Software Engineer building production full-stack systems — Stripe Connect, SAP Business One, AI-augmented workflows. Available for remote roles.',
  authors: [{ name: 'Keven Bardales' }],
  creator: 'Keven Bardales',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          // eslint-disable-next-line react/no-danger -- inline script must run before paint to prevent FOUC
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
