export interface MailMessage {
  readonly to: string;
  readonly from: string;
  readonly replyTo?: string;
  readonly subject: string;
  readonly text: string;
  readonly html?: string;
}

export type SendMailResult =
  | { readonly ok: true; readonly id: string }
  | { readonly ok: false; readonly error: string };

export interface MailService {
  send(message: MailMessage): Promise<SendMailResult>;
}
