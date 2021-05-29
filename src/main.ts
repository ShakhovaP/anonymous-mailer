import fastify from 'fastify';
import pino from 'pino';
import dotenv from 'dotenv';
import { mailerService } from './modules/mailer/mailer.service';
import { pinoConfig } from './config/pino.config';
import { mailerRoutes } from './modules/mailer/mailer.routes';

dotenv.config();

const logger = pino(pinoConfig);
const server = fastify({ logger });
const port = +process.env.PORT || 8080;

mailerRoutes.forEach((route) => {
  switch (route.method) {
    case 'GET':
      server.get(route.url, route.handler);
      break;
    case 'POST':
      server.post(route.url, route.handler);
      break;
    case 'DELETE':
      server.delete(route.url, route.handler);
      break;
  }
});

const bootStrap = async () => {
  try {
    await server.listen(port);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  server.log.error(error);
});

bootStrap();
