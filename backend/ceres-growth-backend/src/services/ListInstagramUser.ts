import { getCustomRepository } from 'typeorm';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

class CreateInstagramUser {
  public async execute({take}:{take:number}): Promise<InstagramUser[]> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );

    const instagramUsers=instagramUserRepository.find({take});

    return instagramUsers;
  }
}

export default CreateInstagramUser;
