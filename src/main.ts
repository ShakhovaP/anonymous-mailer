import fastify from 'fastify';
import pino from 'pino';

const logger = pino({
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    translateTime: true,
  },
  timestamp: () => `time:${new Date()}`,
  level: 'info',
});

const server = fastify({ logger });
const port = 8080;

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
