import { cleanEnv, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    MONGO_CONNECTION_URL: str(),
  });
}

export default validateEnv;
