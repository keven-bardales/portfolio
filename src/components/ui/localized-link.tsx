import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import type { Locale } from '@/core/i18n/locales';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  locale: Locale;
};

export function LocalizedLink({ href, locale, ...props }: Props) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      />
    );
  }
  const normalized = href.startsWith('/') ? href : `/${href}`;
  return <Link href={`/${locale}${normalized === '/' ? '' : normalized}`} {...props} />;
}
