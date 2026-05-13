'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, stagger } from './variants';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : fadeUp}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
