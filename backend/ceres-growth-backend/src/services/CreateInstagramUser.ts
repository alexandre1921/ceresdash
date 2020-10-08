import puppeteer from 'puppeteer';
import { getCustomRepository } from 'typeorm';
import fetch, { Response } from 'node-fetch';
import FormData = require('form-data');
import CreateSessionInSocialMedia from './CreateSessionInSocialMedia';

import AppError from '../errors/AppError';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

interface Request {
  username: string | undefined;
  id: string | undefined;
}

class CreateInstagramUser {
  public async execute({ username, id }: Request): Promise<boolean> {
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
    // // const followers = await GetFollowers(page, 'alexandre1921');
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

    const createEncPassword = (pwd: string) => {
      return `#PWD_INSTAGRAM_BROWSER:0:${Date.now()}:${pwd}`;
    };

    const formData = new FormData();
    formData.append('username', 'mohammed_kibe');
    formData.append('enc_password', createEncPassword('Inteligente01'));

    const login = await fetch(
      `https://www.instagram.com/accounts/login/ajax/`,
      {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRFToken': 'csrftoken',
        },
      },
    ).then(res => console.log(res.headers));

    return true;
  }
}

export default CreateInstagramUser;
