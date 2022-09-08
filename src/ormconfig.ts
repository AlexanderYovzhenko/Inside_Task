import path from 'path';
import { ConnectionOptions } from 'typeorm';
import {
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from './common/config';

const config: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST || 'postgres',
  port: POSTGRES_PORT ? +POSTGRES_PORT : 5432,
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'postgres',
  database: POSTGRES_DB || 'postgres',
  dropSchema: false,
  logging: true,
  synchronize: false,
  entities: [path.join(__dirname, 'endpoints/**/*.model.ts')],
  migrationsRun: true,
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
