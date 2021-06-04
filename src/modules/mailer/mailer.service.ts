import { ServiceReturnI } from '../../interfaces/return.interface';
import { EmailI } from '../email/email.model';
import { emailRepository } from '../email/email.repository';
import { emailService } from '../email/email.service';
import { EmailOptionsI } from '../email/interfaces/emailOptions.interface';

class MailerService {
  async sendEmail(options: EmailOptionsI): Promise<ServiceReturnI> {
    try {
      await emailService.send(options);
      await emailRepository.createEmail(options as EmailI)
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }

  async getEmail(id: string): Promise<ServiceReturnI> {
    try {
      await emailRepository.findEmailById(id);
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }

  async deleteEmail(id: string): Promise<ServiceReturnI> {
    try {
      await emailRepository.deleteEmailById(id);
      return { result: 'Success' };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }
}

export const mailerService = new MailerService();
