import { EmailOptionsI } from '../../email/interfaces/emailOptions.interface';

export interface EmailProviderI {
  send(options: EmailOptionsI): Promise<object>;
}
