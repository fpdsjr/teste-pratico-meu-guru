import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

const ENV = process.env.NODE_ENV ?? 'dev';

const DB_URLS = {
  dev: process.env.DATABASE_URL,
  test: process.env.DATABASE_URL_TEST,
};

const url = DB_URLS[ENV as keyof typeof DB_URLS];

const prisma = new PrismaClient({ datasources: { db: { url } } });

async function main() {
  prisma.$use(async (params, next) => {
    if (params.model === 'Users') {
      if (params.action === 'delete') {
        params.action = 'update';
        params.args.data = { deletado: true };
      }
    }
    return next(params);
  });
}

main();

export { prisma };
