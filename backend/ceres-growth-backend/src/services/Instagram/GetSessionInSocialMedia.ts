/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { existsSync } from 'fs';
import Auth from './Auth';
import CreateJson from './CreateJson';

export default async (): Promise<string | null> => {
  let sessionId = '';
  const sessionIdFilePath = `${__dirname}/../../json/sessionId.json`;
  if (!existsSync(sessionIdFilePath)) {
    const login = await Auth(`https://www.instagram.com/accounts/login/ajax/`, [
      { name: 'username', value: `${process.env.INSTAGRAM_USERNAME}` },
      {
        name: 'enc_password',
        value: `#PWD_INSTAGRAM_BROWSER:0:${Date.now()}:${
          process.env.INSTAGRAM_PASSWORD
        }`,
      },
    ]);

    sessionId = `sessionid=${
      login?.toString().split('sessionid=')[1].split(';')[0]
    }`;

    console.log('Criando Login');
    CreateJson(
      sessionIdFilePath,
      `"${sessionId}"`,
      'sessionId criado com sucesso',
    );
  } else {
    console.log('Carregando Login');
    sessionId = require(sessionIdFilePath);
  }
  return sessionId;
};
