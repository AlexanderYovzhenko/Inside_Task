import { PORT } from './common/config';
import { app as server } from './app';
import { createConnection } from 'typeorm';
import config from './ormconfig';

/**
 * Run the server!
 * Listening on a port and displaying a message in the log.
 * If error then exit process and displaying a message about error in the log.
 * @returns void
 */
const startServer = async () => {
  try {
    await createConnection(config);
    server.listen(PORT, '0.0.0.0', () =>
      console.info(`App is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
