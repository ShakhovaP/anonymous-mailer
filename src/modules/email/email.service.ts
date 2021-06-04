import { ServiceReturnI } from '../../interfaces/return.interface';
import { EmailProviderI } from './interfaces/provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';
import { EmailOptionsI } from './interfaces/emailOptions.interface';

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

  async send(options: EmailOptionsI): Promise<ServiceReturnI> {
    try {
      await this._provider.send(options);
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }
}

export const emailService = new EmailService(new NodemailerProvider());
