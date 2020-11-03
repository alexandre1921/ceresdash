import { getCustomRepository } from 'typeorm';


import Facebook from '../models/FacebookUser';
import FacebookUserRepository from '../repositories/FacebookUserRepository';


interface Request {
  username: string;
  url: string;
  id: string;
}
console.log("teste");
class ListarUsersFacebook {
  public async execute(): Promise<Facebook[]> {
    const facebookUserRepository = getCustomRepository(
      FacebookUserRepository,
    );

    const facebookUsers = facebookUserRepository.find();

    return facebookUsers;
  }

}

export default ListarUsersFacebook;
