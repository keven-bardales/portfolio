import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/core/i18n/locales';
import { getDictionary } from '@/core/i18n/dictionary';

export default async function NotFound() {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-mono uppercase tracking-widest text-text-muted">
        404
      </p>
      <h1 className="font-display text-5xl">{dict.notFound.title}</h1>
      <p className="max-w-md text-text-muted">{dict.notFound.subtitle}</p>
      <Link
        href={`/${DEFAULT_LOCALE}`}
        className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        {dict.notFound.back} →
      </Link>
    </main>
  );
}
