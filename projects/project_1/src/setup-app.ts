import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

export const setupApp = async (app: any) => {
  app.use(
    cookieSession({
      keys: ['encryptedcookiestring1'],
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
};
