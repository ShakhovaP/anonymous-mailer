import { ReturnI } from '../../../interfaces/return.interface';
import { EmailOptionsI } from '../../email/interfaces/emailOptions.interface';
import { EmailProviderI } from '../interfaces/provider.interface';

export class SendgridProvider implements EmailProviderI {
  async send(options: EmailOptionsI): Promise<ReturnI> {
    return { message: 'Success' };
  }
}
