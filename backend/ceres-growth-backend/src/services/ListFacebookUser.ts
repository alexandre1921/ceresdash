import { getCustomRepository, Like } from 'typeorm';

import Facebook from '../models/FacebookUser';
import FacebookUserRepository from '../repositories/FacebookUserRepository';


interface Request {
  username: string;
  take:number;
  filter:string;
}
console.log("teste");
class ListarUsersFacebook {
  public async execute({username,take,filter}:Request): Promise<Facebook[]> {
    const facebookUserRepository = getCustomRepository(
      FacebookUserRepository,
    );

    const facebookUsers = facebookUserRepository.find(username?{where:{username:Like(`%${username}%`)}}:{take});

    return facebookUsers;
  }

}

export default ListarUsersFacebook;
