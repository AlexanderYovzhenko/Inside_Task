import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const PORT = process.env.PORT || 4000

export {
  PORT,
};
