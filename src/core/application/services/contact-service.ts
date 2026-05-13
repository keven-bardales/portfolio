import type {
  ContactErrorCode,
  ContactMessage,
  ContactSubmissionResult,
} from '@/core/application/dto/contact-message';
import type { MailService } from '@/core/application/ports/mail-service';

export interface ContactServiceConfig {
  readonly to: string;
  readonly from: string;
  readonly subjectPrefix?: string;
}

export class ContactService {
  constructor(
    private readonly mail: MailService,
    private readonly config: ContactServiceConfig,
  ) {}

  async submit(input: ContactMessage): Promise<ContactSubmissionResult> {
    const validation = this.validate(input);
    if (validation) {
      return { ok: false, errorCode: validation };
    }

    const subject = input.subject?.trim()
      ? `${this.config.subjectPrefix ?? ''}${input.subject.trim()}`
      : `${this.config.subjectPrefix ?? ''}New message from ${input.name}`;

    const result = await this.mail.send({
      from: this.config.from,
      to: this.config.to,
      replyTo: input.email,
      subject,
      text: this.formatPlainText(input),
      html: this.formatHtml(input),
    });

    if (!result.ok) {
      return { ok: false, errorCode: 'server_error' };
    }
    return { ok: true, id: result.id };
  }

  private validate(input: ContactMessage): ContactErrorCode | null {
    if (!input.name?.trim()) return 'name_required';
    if (!input.email?.trim()) return 'email_required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) return 'email_invalid';
    if (!input.message?.trim()) return 'message_required';
    if (input.message.trim().length < 10) return 'message_too_short';
    return null;
  }

  private formatPlainText(input: ContactMessage): string {
    return [
      `From: ${input.name} <${input.email}>`,
      input.subject ? `Subject: ${input.subject}` : null,
      '',
      input.message,
    ]
      .filter((line): line is string => line !== null)
      .join('\n');
  }

  private formatHtml(input: ContactMessage): string {
    const escape = (s: string) =>
      s
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
    return `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; max-width: 560px;">
        <p><strong>From:</strong> ${escape(input.name)} &lt;${escape(input.email)}&gt;</p>
        ${input.subject ? `<p><strong>Subject:</strong> ${escape(input.subject)}</p>` : ''}
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="white-space: pre-wrap;">${escape(input.message)}</p>
      </div>
    `.trim();
  }
}
