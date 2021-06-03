import { ServiceReturnI } from '../../interfaces/return.interface';
import { EmailI } from '../email/email.model';
import { emailRepository } from '../email/email.repository';
import { emailService } from '../email/email.service';

class MailerService {
  async sendEmail(data: EmailI): Promise<ServiceReturnI> {
    try {
      await emailService.send(data);
      const result = await emailRepository.createEmail(data);
      return { result: 'Success', data: result };
    } catch (e) {
      return { result: 'Error', error: e.message };
    }
  }

  async getEmail(id: string): Promise<ServiceReturnI> {
    try {
      const result = await emailRepository.findEmailById(id);
      return { result: 'Success', data: result };
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
