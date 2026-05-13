'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

type Props = {
  labelLight: string;
  labelDark: string;
};

export function ThemeToggle({ labelLight, labelDark }: Props) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored =
      (typeof localStorage !== 'undefined' &&
        (localStorage.getItem('theme') as Theme | null)) ||
      null;
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored ?? (prefersDark ? 'dark' : 'light'));
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  const isDark = theme === 'dark';
  const label = isDark ? labelLight : labelDark;
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition hover:text-text"
      aria-label={label}
      title={label}
    >
      {theme === null ? (
        <span className="block h-4 w-4" aria-hidden />
      ) : (
        <Icon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
