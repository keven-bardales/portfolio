import { z } from 'zod';

const emptyToUndefined = (v: unknown) => (v === '' ? undefined : v);

const schema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  NEXT_PUBLIC_SITE_URL: z
    .preprocess(emptyToUndefined, z.string().url().optional())
    .transform((v) => v ?? 'http://localhost:3000'),
  RESEND_API_KEY: z.preprocess(emptyToUndefined, z.string().min(1).optional()),
  CONTACT_FROM_EMAIL: z
    .preprocess(emptyToUndefined, z.string().email().optional())
    .transform((v) => v ?? 'onboarding@resend.dev'),
  CONTACT_TO_EMAIL: z
    .preprocess(emptyToUndefined, z.string().email().optional())
    .transform((v) => v ?? 'keven.bardales@gmail.com'),
});

export type Env = z.infer<typeof schema>;

export const env: Env = schema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
});
