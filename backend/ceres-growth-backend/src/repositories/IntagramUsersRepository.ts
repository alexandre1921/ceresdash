import { EntityRepository, Repository } from 'typeorm';

import InstagramUser from '../models/InstagramUser';

@EntityRepository(InstagramUser)
class InstagramUserRepository extends Repository<InstagramUser> {
  public async findAll(): Promise<InstagramUser | null> {
    const findIntagramUsers = await this.findAll();

    return findIntagramUsers;
  }
}

export default InstagramUserRepository;
