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

    const sessionId = await CreateSessionInSocialMedia();

    try {
      let followers: any[] = [];
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
        )
          // eslint-disable-next-line no-loop-func
          .then(res1 => res1.json())
          // eslint-disable-next-line no-loop-func
          .then(res2 => {
            has_next = res2.data.user.edge_followed_by.page_info.has_next_page;
            after = res2.data.user.edge_followed_by.page_info.end_cursor;
            followers = followers.concat(
              res2.data.user.edge_followed_by.edges.map(
                ({ node }: { node: { username: string } }) => {
                  return node.username;
                },
              ),
            );
          });
      }
      console.log({ followers: followers[0], success: true });
    } catch (err) {
      console.log('Invalid username');
    }

    return true;
  }
}

export default CreateInstagramUser;
