import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'accent' | 'outline';
};

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-5',
        variant === 'default' && 'bg-bg-subtle text-text-muted',
        variant === 'accent' && 'bg-accent-soft text-accent',
        variant === 'outline' && 'border border-border text-text-muted',
        className,
      )}
      {...props}
    />
  );
}
