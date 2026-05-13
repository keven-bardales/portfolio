import Link from 'next/link';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import { Container } from '@/components/ui/container';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: Props) {
  const navItems = [
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="font-display text-lg tracking-tight"
          aria-label={dict.meta.siteName}
        >
          Keven Bardales
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher
            currentLocale={locale}
            labels={{ en: dict.locale.en, es: dict.locale.es }}
          />
          <ThemeToggle
            labelLight={dict.theme.toggleLight}
            labelDark={dict.theme.toggleDark}
          />
          <MobileNav locale={locale} dict={dict} />
        </div>
      </Container>
    </header>
  );
}
