'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import { cn } from '@/shared/utils/cn';

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function MobileNav({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:text-text md:hidden"
        aria-label={dict.nav.openMenu}
      >
        <Menu className="h-4 w-4" aria-hidden />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-bg/95 backdrop-blur-md transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-display text-lg">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:text-text"
            aria-label={dict.nav.closeMenu}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 pt-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-4xl tracking-tight transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
