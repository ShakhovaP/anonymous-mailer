import { ServiceReturnI } from '../../../interfaces/return.interface';
import { EmailI } from '../email.model';
import { EmailProviderI } from '../interfaces/provider.interface';

export class NodemailerProvider implements EmailProviderI {
  async send(options: EmailI): Promise<ServiceReturnI> {
    return { result: 'Success' };
  }
}
