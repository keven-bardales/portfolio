export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly subject?: string;
  readonly message: string;
}

export type ContactSubmissionResult =
  | { readonly ok: true; readonly id: string }
  | { readonly ok: false; readonly errorCode: ContactErrorCode };

export type ContactErrorCode =
  | 'name_required'
  | 'email_required'
  | 'email_invalid'
  | 'message_required'
  | 'message_too_short'
  | 'server_error'
  | 'rate_limited';
