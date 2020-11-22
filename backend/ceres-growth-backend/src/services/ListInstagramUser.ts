import { getCustomRepository, Like } from 'typeorm';

import InstagramUser from '../models/InstagramUser';
import InstagramUserRepository from '../repositories/IntagramUsersRepository';

interface Request {
  username: string;
  take: number;
  filter: string;
}

class CreateInstagramUser {
  public async execute({
    username,
    take,
    filter,
  }: Request): Promise<InstagramUser[]> {
    const instagramUserRepository = getCustomRepository(
      InstagramUserRepository,
    );

    const instagramUsers = instagramUserRepository.find({
      take,
      where: { username: Like(`%${username}%`) },
    });

    return instagramUsers;
  }
}

export default CreateInstagramUser;
