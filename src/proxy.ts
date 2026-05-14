import { NextRequest, NextResponse } from 'next/server';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isLocale } from '@/core/i18n/locales';

const PUBLIC_FILE = /\.[^/]+$/;
const COOKIE_NAME = 'NEXT_LOCALE';

function detectLocale(req: NextRequest): string {
  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }
  const accept = req.headers.get('accept-language') ?? '';
  const primary = accept.split(',')[0]?.trim().toLowerCase() ?? '';
  if (primary.startsWith('es')) return 'es';
  return DEFAULT_LOCALE;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.webmanifest' ||
    pathname === '/apple-icon' ||
    pathname === '/icon' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
