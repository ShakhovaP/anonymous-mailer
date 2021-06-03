import fastify from 'fastify';
import pino from 'pino';
import dotenv from 'dotenv';
import { pinoConfig } from './config/pino.config';
import { mailerRoutes } from './modules/mailer/mailer.routes';
import mongoose from 'mongoose';

dotenv.config();

const logger = pino(pinoConfig);
const server = fastify({ logger });
const port = +process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

mailerRoutes.forEach((route) => {
  switch (route.method) {
    case 'GET':
      server.get(route.url, { schema: route.schema }, route.handler);
      break;
    case 'POST':
      server.post(route.url, { schema: route.schema }, route.handler);
      break;
    case 'DELETE':
      server.delete(route.url, { schema: route.schema }, route.handler);
      break;
  }
});

const bootStrap = async () => {
  /**
   * Start server
   */
  try {
    await server.listen(port);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }

  /**
   * Connect to DB
   */
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('DB connected');
  } catch (e) {
    logger.error('Failed connecting to DB', e.message);
  }
};

process.on('uncaughtException', (error) => {
  server.log.error(error);
});

bootStrap();
