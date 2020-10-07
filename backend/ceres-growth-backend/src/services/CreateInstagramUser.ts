import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import instagramUserContent from '../json/userContent.json';
import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

class CreateInstagramUser {
  public async execute(): Promise<boolean> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );
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
