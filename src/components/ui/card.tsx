import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-text/30',
        className,
      )}
      {...props}
    />
  );
}
