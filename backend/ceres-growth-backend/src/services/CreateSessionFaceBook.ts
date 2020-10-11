/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { existsSync } from 'fs';
import Auth from './Auth';
import CreateJson from './CreateJson';

export default async (): Promise<string | null> => {
  let sessionfaceId = '';
  const sessionIdFilePath = `${__dirname}/../json/sessionfaceId.json`;
  if (!existsSync(sessionIdFilePath)) {
    const login = await Auth(`https://pt-br.facebook.com/entrarnofacebok/`, [
      { name: 'email', value: 'jerderceres@outlook.com' },
      { name: 'next', value: 'https://pt-br.facebook.com/entrarnofacebok/'},
      { name: 'login_source',	value: 'login_bluebar' },
      { name: 'guid',	value:'f1b64bbec33101a' },
      { name: 'prefill_contact_point', value:	'jerderceres@outlook.com' },
      { name: 'prefill_source', value:	'browser_dropdown' },
      { name: 'prefill_type',  value:	'password'},
      {
        name: 'encpass',
        value: `#PWD_BROWSER:5:${Date.now()}:${'ceres2020!@'}`,
      },
    ]);

    sessionfaceId = `sessionId=${
      login?.toString().split('fr=')[1].split(';')[0]
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
