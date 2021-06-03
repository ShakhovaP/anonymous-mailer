import { ServiceReturnI } from '../../interfaces/return.interface';
import { EmailI } from './email.model';
import { EmailProviderI } from './interfaces/provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';

class EmailService {
  private _provider: EmailProviderI;

  constructor(provider: EmailProviderI) {
    this._provider = provider;
  }

  get getProvider(): EmailProviderI {
    return this._provider;
  }

  set setProvider(provider: EmailProviderI) {
    this._provider = provider;
  }

  async send(options: EmailI): Promise<ServiceReturnI> {
    try {
      await this._provider.send(options);
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }
}

export const emailService = new EmailService(new NodemailerProvider());
