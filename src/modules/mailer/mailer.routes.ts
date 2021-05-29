import { mailerController } from './mailer.controller';

export const mailerRoutes = [
  {
    method: 'GET',
    url: '/mailer/get',
    handler: mailerController.getEmail,
  },
  {
    method: 'POST',
    url: '/mailer/send',
    handler: mailerController.sendEmail,
  },
  {
    method: 'DELETE',
    url: '/mailer/delete/:id',
    handler: mailerController.deleteEmail,
  },
];
