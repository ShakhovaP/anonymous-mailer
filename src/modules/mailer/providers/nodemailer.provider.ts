import { ReturnI } from '../../../interfaces/return.interface';
import { EmailOptionsI } from '../interfaces/emailOptions.interface';
import { EmailProviderI } from '../interfaces/provider.interface';

export class NodemailerProvider implements EmailProviderI {
  async send(options: EmailOptionsI): Promise<ReturnI> {
    return { message: 'Success' };
  }
}
