import puppeteer from 'puppeteer';
import { getCustomRepository } from 'typeorm';
import fetch, { Response } from 'node-fetch';
import { existsSync } from 'fs';
import CreateSessionInSocialMedia from './CreateSessionInSocialMedia';

import AppError from '../errors/AppError';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';
import CreateJson from './CreateJson';
import FormData = require('form-data');
import CreateSessionFaceBook from './CreateSessionFaceBook';
import { response } from 'express';

interface Request {
  name: string | undefined;
  id: string | undefined;

}

class CreateFacebookUser {
  public async execute({}: Request): Promise<boolean> {
    // const instagramUserRepository = getCustomRepository(
    //   InstagramUserRepository,
    // );
    // const instagramUserContent = [
    //   {
    //     username: 'michelepabritez',
    //     full_name: 'Michele Anicias Britez',
    //     biography:
    //       'Servidora pública na UTFPR 🗂️\nHumana de uma peludoza *Margot * 🐶',
    //     id: '1461400561',
    //     business_email: null,
    //     connected_fb_page: null,
    //     is_business_account: false,
    //     is_private: true,
    //     is_verified: false,
    //     external_url: null,
    //     success: true,
    //   },
    //   {
    //     username: 'joicehuning',
    //     full_name: 'Joice Huning',
    //     biography: '',
    //     id: '7891221368',
    //     business_email: null,
    //     connected_fb_page: null,
    //     is_business_account: false,
    //     is_private: false,
    //     is_verified: false,
    //     external_url: null,
    //     success: true,
    //   },
    // ];
    // instagramUserContent.forEach((value: InstagramUser) => {
    //   const {
    //     username,
    //     full_name,
    //     biography,
    //     id,
    //     business_email,
    //     connected_fb_page,
    //     is_business_account,
    //     is_private,
    //     is_verified,
    //     external_url,
    //     success,
    //   } = value;

    //   const instagramUser = instagramUserRepository.create({
    //     username,
    //     full_name,
    //     biography,
    //     id,
    //     business_email,
    //     connected_fb_page,
    //     is_business_account,
    //     is_private,
    //     is_verified,
    //     external_url,
    //     success,
    //   });

    //   instagramUserRepository.save(instagramUser);
    // });

    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();

    // await CreateSessionInSocialMedia(page);
    // const followers = await GetFollowers(page, 'alexandre1921');
    // console.log(userContent);

    // const data = await fetch(`https://www.instagram.com/${username}/?__a=1`)
    //   .then(res => res.json())
    //   .then(res => {
    //     const { user } = res.graphql;
    //     return {
    //       username: user.username,
    //       full_name: user.full_name,
    //       biography: user.biography,
    //       id: user.id,
    //       business_email: user.business_email,
    //       connected_fb_page: user.connected_fb_page,
    //       is_business_account: user.is_business_account,
    //       is_private: user.is_private,
    //       is_verified: user.is_verified,
    //       external_url: user.external_url,
    //       success: true,
    //     };
    //   });

    const sessionId = await CreateSessionFaceBook();

    try {
      let followers: any[] = [];
      /* let followers: any[] = [];
       let after = null;
       let has_next = true;
       while (has_next) {
         // eslint-disable-next-line no-await-in-loop
         await fetch(
           `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=${encodeURIComponent(
             JSON.stringify({
               id: '8064976408',
               include_reel: true,
               fetch_mutual: true,
               first: 50,
               after,
             }),
           )}`,
           {
             headers: {
               cookie: typeof sessionId === 'string' ? sessionId : '',
             },
           },
         )*/
      let text = "AQHRRlNKmICgyWxzKKG9ljOm3PnEG8jLXECJCYnHjz3D5vH-2s1TH1RutqvB8_0G2Zoq1LUFHh2OYnwvWm3iQV8UcQ";
      let fb_dtsg = require("DTSG").getToken();


      let cursorgeral = 'AQHRCXgomrCHr96pJzyYbCl5QUG4Yu_QiEDce5P5vpSNTm7E20dW-KB5ttc4Y_QIv_8mYNny2WchvmjC4H-F2FJ7Tg';
      let doc_id = "3060700737386576";

      let  variables = {
          count: 10,
          cursor: text,
          groupID: "320573804816194",
          scale: 1,
          server_timestamps: "true",
          id: "320573804816194",
        };

      await fetch("https://www.facebook.com/api/graphql/", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "cookie": typeof sessionId === 'string' ? sessionId : ''
        },
        body: `fb_dtsg=${encodeURIComponent(
          fb_dtsg
        )}&variables=${encodeURIComponent(
          JSON.stringify(variables)
        )}&doc_id=${encodeURIComponent(doc_id)}`,
        method: "post",
      })
        // eslint-disable-next-line no-loop-func
        .then(res1 => res1.json())
        // eslint-disable-next-line no-loop-func
        .then(res2 => {
          //response = res.data.node;
          let response = res2.data.node;
         // followers = followers.concat(
          //  res2.data.node.new_members.edges.map(
            //  ({ node }: { node: { name: string } }) => {
               // return node.name;
              //},
            //),
         // );
          //  after = res.datanew_members.page_info.has_next_page;
          return response;
        });
      console.log(response);
     // console.log({ followers: followers[4], success: true });
    } catch (err) {
      console.log('Invalid username');
    }

    return true;
  }
}

export default CreateFacebookUser;
