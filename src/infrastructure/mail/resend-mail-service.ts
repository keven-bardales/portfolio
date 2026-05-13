import { Resend } from 'resend';
import type {
  MailMessage,
  MailService,
  SendMailResult,
} from '@/core/application/ports/mail-service';

export class ResendMailService implements MailService {
  private readonly client: Resend;

  constructor(apiKey: string) {
    this.client = new Resend(apiKey);
  }

  async send(message: MailMessage): Promise<SendMailResult> {
    try {
      const res = await this.client.emails.send({
        from: message.from,
        to: message.to,
        replyTo: message.replyTo,
        subject: message.subject,
        text: message.text,
        html: message.html ?? '',
      });
      if (res.error) {
        return { ok: false, error: res.error.message };
      }
      return { ok: true, id: res.data?.id ?? 'unknown' };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'unknown_error',
      };
    }
  }
}
