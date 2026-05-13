'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { SUPPORTED_LOCALES, type Locale } from '@/core/i18n/locales';
import { cn } from '@/shared/utils/cn';

type Props = {
  currentLocale: Locale;
  labels: Record<Locale, string>;
};

export function LocaleSwitcher({ currentLocale, labels }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === currentLocale) return;
    const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
    const target = `/${next}${stripped === '/' ? '' : stripped}`;
    document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    startTransition(() => {
      router.push(target);
      router.refresh();
    });
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            disabled={isPending}
            className={cn(
              'inline-flex h-7 items-center justify-center rounded-full px-2.5 uppercase tracking-wider transition',
              isActive
                ? 'bg-text text-bg'
                : 'text-text-muted hover:text-text',
            )}
            aria-pressed={isActive}
            aria-label={labels[locale]}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
