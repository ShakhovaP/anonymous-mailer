import { ControllerReturnI } from '../../interfaces/return.interface';
import { mailerService } from './mailer.service';

class MailerController {
  async sendEmail(req): Promise<ControllerReturnI> {
    const result = await mailerService.sendEmail(req.body);
    if (result.error) {
      return { statusCode: 400, ...result };
    } else {
      return { statusCode: 200, ...result };
    }
  }

  async getEmail(req): Promise<ControllerReturnI> {
    const result = await mailerService.getEmail(req.params.id);
    if (result.error) {
      return { statusCode: 400, ...result };
    } else {
      return { statusCode: 200, ...result };
    }
  }

  async deleteEmail(req): Promise<ControllerReturnI> {
    const result = await mailerService.deleteEmail(req.params.id);
    if (result.error) {
      return { statusCode: 400, ...result };
    } else {
      return { statusCode: 200, ...result };
    }
  }
}

export const mailerController = new MailerController();
