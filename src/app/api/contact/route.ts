import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/infrastructure/container/container';
import type { ContactMessage } from '@/core/application/dto/contact-message';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, errorCode: 'server_error' },
      { status: 400 },
    );
  }

  const input = coerceInput(body);
  if (!input) {
    return NextResponse.json(
      { ok: false, errorCode: 'server_error' },
      { status: 400 },
    );
  }

  const result = await services.contact.submit(input);
  const status = result.ok ? 200 : result.errorCode === 'server_error' ? 500 : 400;
  return NextResponse.json(result, { status });
}

function coerceInput(value: unknown): ContactMessage | null {
  if (typeof value !== 'object' || value === null) return null;
  const obj = value as Record<string, unknown>;
  if (typeof obj.name !== 'string') return null;
  if (typeof obj.email !== 'string') return null;
  if (typeof obj.message !== 'string') return null;
  return {
    name: obj.name,
    email: obj.email,
    subject: typeof obj.subject === 'string' ? obj.subject : undefined,
    message: obj.message,
  };
}
