import { getCustomRepository } from 'typeorm';
import fetch, { Response } from 'node-fetch';
import axios from 'axios';
import { existsSync } from 'fs';
import qs from 'qs';
import exec from 'child_process';
import FormData = require('form-data');
import CreateSessionInSocialMedia from './CreateSessionInSocialMedia';

import AppError from '../errors/AppError';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';
import CreateJson from './CreateJson';

interface Request {
  username: string | undefined;
  id: string | undefined;
}

class CreateInstagramUser {
  public async execute(): Promise<boolean> {
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

    // const ress = await axios.post('https://www.facebook.com/login', {
    //   headers: {
    //     cookie: 'fr=fr;',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     origin: 'https://www.facebook.com',
    //   },
    //   withCredentials: true,
    //   baseURL: 'https://www.facebook.com',
    //   data: qs.stringify({
    //     email: 'jerderceres@outlook.com',
    //     pass: 'senha123!@',
    //   }),
    // });

    // console.log(ress.headers);

    // CreateJson(`${__dirname}/../json/test.html`, ress.data, 'yay');

    exec.exec(
      'curl -d "email=jerderceres%40outlook.com&pass=senha123%21%40" -X POST https://www.facebook.com/login/ -H "Content-Type: application/x-www-form-urlencoded" -H "cookie: fr=fr" -D test.txt',
      function (error, stdout, stderr) {
        console.log(stdout);
      },
    );

    return true;
  }
}

export default CreateInstagramUser;
