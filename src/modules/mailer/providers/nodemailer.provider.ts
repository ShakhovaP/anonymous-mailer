import { ServiceReturnI } from '../../../interfaces/return.interface';
import { EmailOptionsI } from '../../email/interfaces/emailOptions.interface';
import { EmailProviderI } from '../interfaces/provider.interface';

export class NodemailerProvider implements EmailProviderI {
  async send(options: EmailOptionsI): Promise<ServiceReturnI> {
    return { result: 'Success' };
  }
}
