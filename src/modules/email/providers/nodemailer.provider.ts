import { ServiceReturnI } from '../../../interfaces/return.interface';
import { EmailOptionsI } from '../../email/interfaces/emailOptions.interface';
import { EmailProviderI } from '../interfaces/provider.interface';
import nodemailer from 'nodemailer';
export class NodemailerProvider implements EmailProviderI {
  async send(options: EmailOptionsI): Promise<ServiceReturnI> {
    const transport = nodemailer.createTransport(
      {
        host: process.env.MAILER_HOST,
        port: +process.env.MAILER_PORT,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
      }
    );
  
    await transport.sendMail(
      {
        from: process.env.MAIL_FROM,
        to: options.to,
        subject: options.subject,
        text: options.text,
      }
  )
    return { result: 'Success' };
  }
}
