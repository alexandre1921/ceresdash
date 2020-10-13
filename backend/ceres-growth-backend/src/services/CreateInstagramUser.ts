import { getCustomRepository } from 'typeorm';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';
import GetFollowers from './GetFollowers';
import GetUserContent from './GetUserContent';

interface Request {
  username: string;
}

class CreateInstagramUser {
  public async execute({ username }: Request): Promise<InstagramUser[]> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );

    const { id } = await GetUserContent({
      id: '',
      username,
      full_name: '',
      is_private: false,
      is_verified: false,
    });
    const followers = await GetFollowers(id || '');
    const data = await Promise.all(
      followers.map(async user => {
        const UserContent = await GetUserContent(user);
        return UserContent;
      }),
    );

    console.log('Coleta de dados feita, inserindo no banco de dados');

    data.forEach((user: InstagramUser) => {
      const instagramUser = instagramUserRepository.create({
        username: user.username,
        full_name: user.full_name,
        biography: user.biography,
        id: user.id,
        business_email: user.business_email,
        connected_fb_page: user.connected_fb_page,
        is_business_account: user.is_business_account,
        is_private: user.is_private,
        is_verified: user.is_verified,
        external_url: user.external_url,
        success: user.success,
      });

      instagramUserRepository.save(instagramUser);
    });

    console.log('Inserção no bd feita');

    return data;
  }
}

export default CreateInstagramUser;
