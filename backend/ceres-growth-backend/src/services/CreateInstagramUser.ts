import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

interface Request {
  username: string | undefined;
  id: string | undefined;
}

class CreateInstagramUser {
  public async execute({ username, id }: Request): Promise<boolean> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );
    const instagramUserContent = [
      {
        username: 'michelepabritez',
        full_name: 'Michele Anicias Britez',
        biography:
          'Servidora pública na UTFPR 🗂️\nHumana de uma peludoza *Margot * 🐶',
        id: '1461400561',
        business_email: null,
        connected_fb_page: null,
        is_business_account: false,
        is_private: true,
        is_verified: false,
        external_url: null,
        success: true,
      },
      {
        username: 'joicehuning',
        full_name: 'Joice Huning',
        biography: '',
        id: '7891221368',
        business_email: null,
        connected_fb_page: null,
        is_business_account: false,
        is_private: false,
        is_verified: false,
        external_url: null,
        success: true,
      },
    ];
    instagramUserContent.forEach((value: InstagramUser) => {
      const {
        username,
        full_name,
        biography,
        id,
        business_email,
        connected_fb_page,
        is_business_account,
        is_private,
        is_verified,
        external_url,
        success,
      } = value;

      const instagramUser = instagramUserRepository.create({
        username,
        full_name,
        biography,
        id,
        business_email,
        connected_fb_page,
        is_business_account,
        is_private,
        is_verified,
        external_url,
        success,
      });

      instagramUserRepository.save(instagramUser);
    });
    return true;
  }
}

export default CreateInstagramUser;
