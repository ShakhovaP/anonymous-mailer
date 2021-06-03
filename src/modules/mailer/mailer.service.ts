import { ServiceReturnI } from '../../interfaces/return.interface';
import { emailService } from '../email/email.service';
import { EmailOptionsI } from '../email/interfaces/emailOptions.interface';

class MailerService {
  async sendEmail(data: EmailOptionsI): Promise<ServiceReturnI> {
    try {
      // TODO: implement
      await emailService.send(data);
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }

  async getEmail(id: string): Promise<ServiceReturnI> {
    try {
      // TODO: implement
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }

  async deleteEmail(id: string): Promise<ServiceReturnI> {
    try {
      // TODO: implement
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
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

