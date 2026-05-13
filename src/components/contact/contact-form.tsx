'use client';

import { useState, useTransition } from 'react';
import { Send } from 'lucide-react';
import type { Dictionary } from '@/core/i18n/dictionary';
import type {
  ContactErrorCode,
  ContactSubmissionResult,
} from '@/core/application/dto/contact-message';
import { cn } from '@/shared/utils/cn';

type Props = {
  dict: Dictionary;
};

type FormState = {
  status: 'idle' | 'success' | 'error';
  errorCode?: ContactErrorCode;
};

export function ContactForm({ dict }: Props) {
  const [state, setState] = useState<FormState>({ status: 'idle' });
  const [isPending, startTransition] = useTransition();
  const labels = dict.contact.form;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    };
    const form = e.currentTarget;
    startTransition(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = (await res.json()) as ContactSubmissionResult;
        if (result.ok) {
          setState({ status: 'success' });
          form.reset();
        } else {
          setState({ status: 'error', errorCode: result.errorCode });
        }
      } catch {
        setState({ status: 'error', errorCode: 'server_error' });
      }
    });
  }

  const errorMessage =
    state.status === 'error' && state.errorCode
      ? labels.errors[state.errorCode]
      : null;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field label={labels.name} name="name" type="text" required autoComplete="name" />
      <Field
        label={labels.email}
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        label={labels.subject}
        name="subject"
        type="text"
        autoComplete="off"
      />
      <Textarea label={labels.message} name="message" required rows={6} />

      <div className="flex items-center justify-between gap-4">
        <p
          aria-live="polite"
          className={cn(
            'text-sm',
            state.status === 'success' && 'text-accent',
            state.status === 'error' && 'text-red-500 dark:text-red-400',
            state.status === 'idle' && 'text-text-muted',
          )}
        >
          {state.status === 'success'
            ? labels.success
            : state.status === 'error' && errorMessage
              ? errorMessage
              : ' '}
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-text px-6 text-sm font-medium text-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? labels.sending : labels.submit}
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-lg border border-border bg-surface px-4 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  required,
  rows = 5,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="resize-y rounded-lg border border-border bg-surface p-4 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
