import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const PORT = process.env.PORT || 4000,
  JWT_SECRET_KEY = process.env.JWT_SECRET_KEY,
  POSTGRES_PORT = process.env.POSTGRES_PORT,
  POSTGRES_DB = process.env.POSTGRES_DB,
  POSTGRES_HOST = process.env.POSTGRES_HOST,
  POSTGRES_USER = process.env.POSTGRES_USER,
  POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD,
  SALT_HASH_PASSWORD = process.env.SALT_HASH_PASSWORD || '10';

export {
  PORT,
  JWT_SECRET_KEY,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  SALT_HASH_PASSWORD,
};
