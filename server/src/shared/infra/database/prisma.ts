import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

const ENV = process.env.NODE_ENV ?? 'dev';

const DB_URLS = {
  dev: process.env.DATABASE_URL,
  test: process.env.DATABASE_URL_TEST,
};

const url = DB_URLS[ENV as keyof typeof DB_URLS];

export const prisma = new PrismaClient({ datasources: { db: { url } } });
