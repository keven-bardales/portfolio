import type {
  MailMessage,
  MailService,
  SendMailResult,
} from '@/core/application/ports/mail-service';

export class ConsoleMailService implements MailService {
  async send(message: MailMessage): Promise<SendMailResult> {
    const id = `console-${Date.now()}`;
    console.warn(
      '[ConsoleMailService] No mail provider configured. Message would have been sent:',
    );
    console.warn(JSON.stringify(message, null, 2));
    return { ok: true, id };
  }
}
