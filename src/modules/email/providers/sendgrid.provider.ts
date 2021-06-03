import { ServiceReturnI } from '../../../interfaces/return.interface';
import { EmailI } from '../email.model';
import { EmailProviderI } from '../interfaces/provider.interface';

export class SendgridProvider implements EmailProviderI {
  async send(options: EmailI): Promise<ServiceReturnI> {
    return { result: 'Success' };
  }
}
