import { EmailI } from '../email.model';

export interface EmailProviderI {
  send(options: EmailI): Promise<object>;
}
