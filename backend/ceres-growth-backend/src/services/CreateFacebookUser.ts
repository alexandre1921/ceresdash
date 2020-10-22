import { getCustomRepository } from 'typeorm';
import fetch, { Response } from 'node-fetch';
import { existsSync } from 'fs';
import { response } from 'express';
import CreateSessionInSocialMedia from './CreateSessionInSocialMedia';
import exec from 'child_process';
import AppError from '../errors/AppError';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';
import CreateJson from './CreateJson';
import CreateSessionFaceBook from './CreateSessionFaceBook';
//import Response from 'express';
import FormData = require('form-data');

interface Request {
  id: string
}

class CreateFacebookUser {
  public async execute({ }: Request): Promise<boolean> {

    const xsId = await CreateSessionFaceBook();
    let dados: any[] = [];
    let id;
    const sessionIdFilePath = `${__dirname}/../json/teste.json`;
    const xs = `${__dirname}/../json/xs.json`;
    const jsonn = require(xs);
    let idGrupo = '320573804816194';
    //let fb_dtsg = require("DTSG").getToken();
    const fb_dtsg = require('DTSG').getToken();
    let after: string;
    let has_next = true;
    let doc_id = "3387931334604536";
   // while(has_next){
    webScrap();
    function webScrap(){
    let variables = {
      count: 10,
      cursor: after,
      groupID: idGrupo,
      scale: 1,
      server_timestamps: 'true',
      id: idGrupo,
    };

    let variable = encodeURIComponent(JSON.stringify(variables));
    // let token = fb_dtsg = encodeURIComponent(fb_dtsg);
    //let token = "AQwOEBwKzKX3Y5X6e_aF-cZTT9A74AfyATVDldsiMHqRrA:AQxKATV1rUVMJKTGCi3UxoNlyRtKut5gj9dW1jZCjdEE3g";
    let tokenn =  encodeURIComponent(fb_dtsg);//"AQGI9VX-0c0S:AQFAXNhVbxDy";


    exec.exec(
      "curl 'https://www.facebook.com/api/graphql/' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Cookie: " + jsonn + "' --data-raw 'fb_dtsg=" + tokenn + "&variables=" + variable + "&doc_id=" + doc_id + "'",
      function (error, stdout, stderr) {
         console.log(stdout);


      },
    );
  }
  ///}

      CreateJson(
        sessionIdFilePath,
        `[${dados}]`,
         'Sucesso!!!',
       );

    return true;

  }
}


export default CreateFacebookUser;
