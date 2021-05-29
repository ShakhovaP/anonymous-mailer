import { FastifyReply, FastifyRequest } from 'fastify';
import { mailerService } from './mailer.service';

class MailerController {
  async sendEmail(req: any, res: any) {
    return mailerService.send(req.body);
  }
  async getEmail(req: any, res: any) {
    return mailerService.getEmail(req.query.id);
  }
  async deleteEmail(req: any, res: any) {
    return mailerService.deleteEmail(req.query.id);
  }
}

export const mailerController = new MailerController();
