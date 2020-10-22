/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { existsSync } from 'fs';
import Auth from './Auth';
import CreateJson from './CreateJson';
import exec from 'child_process';


export default async (): Promise<string | null> => {
  const sessionIdFilePath = `${__dirname}/../json/xs.json`;
  //let dados;
  let login;
  if (!existsSync(sessionIdFilePath)) {
   exec.exec(
    'curl -d "email=airtonitrmt%40outlook.com&pass=senha%21%40%23%24" -X POST https://www.facebook.com/login/ -H "Content-Type: application/x-www-form-urlencoded" -H "cookie: fr=fr" -D src/json/cookies.txt',
     function (error, stdout, stderr) {
       login = stdout;
       console.log(stdout);
    },
  );

    console.log('Criando Login');
    CreateJson(
      sessionIdFilePath,
      `"${login}"`,
      'sessionId criado com sucesso',
    );
  //return true;

  } else {
    console.log('Carregando Login');
    login = require(sessionIdFilePath);
  }
  return login;
};
