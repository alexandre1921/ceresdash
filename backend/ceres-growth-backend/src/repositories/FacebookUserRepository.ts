import { EntityRepository, Repository } from 'typeorm';

import FacebookUser from '../models/FacebookUser';

@EntityRepository(FacebookUser)
class FacebookUserRepository extends Repository<FacebookUser> {
  public async findAll(): Promise<FacebookUser | null> {
    const findFacebookUsers = await this.findAll();

    return findFacebookUsers;
  }
}

export default FacebookUserRepository;
