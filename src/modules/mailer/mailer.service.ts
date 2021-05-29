import { ReturnI } from '../../interfaces/return.interface';
import { EmailOptionsI } from '../email/interfaces/emailOptions.interface';
import { EmailProviderI } from './interfaces/provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';

class MailerService {
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

  async send(options: EmailOptionsI): Promise<ReturnI> {
    await this._provider.send(options);
    return { message: 'Success' };
  }

  async getEmail(id: string) {
    // TODO: implement
  }

  async deleteEmail(id: string) {
    // TODO: implement
  }
}

export const mailerService = new MailerService(new NodemailerProvider());
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
