import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn('py-20 md:py-28 lg:py-32', className)}
      {...props}
    />
  );
}
