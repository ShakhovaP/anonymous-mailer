import { EmailOptionsI } from './emailOptions.interface';

export interface EmailProviderI {
  send(options: EmailOptionsI): Promise<object>;
}
