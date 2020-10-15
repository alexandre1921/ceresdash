import { getCustomRepository } from 'typeorm';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

class CreateInstagramUser {
  public async execute({take}:{take:number}): Promise<null> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );

    instagramUserRepository.find({take});

    return null;
  }
}

export default CreateInstagramUser;
