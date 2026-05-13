'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from './variants';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
};

export function FadeIn({ children, delay = 0, className, as = 'div' }: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      variants={reduce ? undefined : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Component>
  );
}
