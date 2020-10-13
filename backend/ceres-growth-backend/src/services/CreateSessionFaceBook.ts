/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { existsSync } from 'fs';
import Auth from './Auth';
import CreateJson from './CreateJson';
export default async (): Promise<string | null> => {
  let sessionfaceId = '';
  const sessionIdFilePath = `${__dirname}/../json/sessionfaceId.json`;
  if (!existsSync(sessionIdFilePath)) {
    const login = await Auth(`https://www.facebook.com/login/`, [
      { name: 'email', value: 'jerderceres%40outlook' },
      {
        name: 'pass',
        value: 'senha123%21%40',
      },

    ]);

    sessionfaceId = `xs=${
      login?.toString().split('xs=')[1].split(';')[0]
    }`;

    console.log('Criando Login');
    CreateJson(
      sessionIdFilePath,
      `"${sessionfaceId}"`,
      'sessionId criado com sucesso',
    );
  } else {
    console.log('Carregando Login');
    sessionfaceId = require(sessionIdFilePath);
  }
  return sessionfaceId;
};
