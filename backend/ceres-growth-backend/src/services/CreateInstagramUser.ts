import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

// import instagramUserContent from '../json/instagramUserContent.json';
import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

class CreateInstagramUser {
  public async execute(): Promise<InstagramUser> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );

    const instagramUser = instagramUserRepository.create({
      username: '21098421michelepabritez',
      full_name: '28421Michele Anicias Britez',
      biography: '28421Servidora pública na UTFPR',
      id: '19318952461400562',
      business_email: '32842111null',
      connected_fb_page: '2null',
      is_business_account: false,
      is_private: true,
      is_verified: false,
      external_url: '2null',
      success: true,
    });

    instagramUserRepository.save(instagramUser);

    return instagramUser;
  }
}

export default CreateInstagramUser;
