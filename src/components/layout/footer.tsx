import { Mail } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import type { Locale } from '@/core/i18n/locales';
import type { Dictionary } from '@/core/i18n/dictionary';
import { Container } from '@/components/ui/container';
import { services } from '@/infrastructure/container/container';
import type { SocialKind } from '@/core/domain/entities/social-link';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/ui/brand-icons';

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const ICONS: Partial<Record<SocialKind, ComponentType<SVGProps<SVGSVGElement>>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  email: Mail,
};

export async function Footer({ locale, dict }: Props) {
  const social = await services.social.list();
  const profile = await services.profile.get();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-bg-subtle/40">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="font-display text-lg">{profile.name}</p>
          <p className="text-sm text-text-muted">
            {profile.title[locale]} · {profile.location[locale]}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex items-center gap-3">
            {social.map((link) => {
              const Icon = ICONS[link.kind] ?? Mail;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:text-text"
                    aria-label={link.label[locale]}
                    title={link.label[locale]}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-text-muted">
            © {year} {profile.name}. {dict.footer.rights}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
