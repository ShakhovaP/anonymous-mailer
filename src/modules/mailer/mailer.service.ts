import { ReturnI } from '../../interfaces/return.interface';
import { EmailOptionsI } from './interfaces/emailOptions.interface';
import { EmailProviderI } from './interfaces/provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';

const defaultProvider = new NodemailerProvider();

class MailerService {
  private provider: EmailProviderI;

  constructor() {
    this.provider = defaultProvider;
  }

  get getProvider(): EmailProviderI {
    return this.provider;
  }

  set setProvider(provider: EmailProviderI) {
    this.provider = provider;
  }

  async send(options: EmailOptionsI): Promise<ReturnI> {
    await this.provider.send(options);
    return { message: 'Success' };
  }
}

export const mailerService = new MailerService();
