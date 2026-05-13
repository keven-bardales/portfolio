import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4;
  eyebrow?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
};

const sizeMap: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em]',
  2: 'font-display text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em]',
  3: 'font-display text-2xl md:text-3xl leading-tight tracking-[-0.01em]',
  4: 'font-sans text-lg md:text-xl font-medium tracking-tight',
};

export function Heading({
  level = 2,
  eyebrow,
  className,
  children,
  as,
  ...props
}: HeadingProps) {
  const Tag = (as ?? (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4')) as 'h2';
  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
          {eyebrow}
        </span>
      ) : null}
      <Tag className={cn(sizeMap[level], className)} {...props}>
        {children}
      </Tag>
    </div>
  );
}
