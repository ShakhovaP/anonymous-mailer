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

export const mailerService = new MailerService();
