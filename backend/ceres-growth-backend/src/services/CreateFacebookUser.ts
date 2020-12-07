import { getCustomRepository } from 'typeorm';


import Facebook from '../models/FacebookUser';
import FacebookUserRepository from '../repositories/FacebookUserRepository';


interface Request {
  username: string;
}
console.log("teste");
class CreateFacebookUser {
  public async execute({ username }: Request): Promise<Facebook[]> {
    const facebookUserRepository =  getCustomRepository(
      FacebookUserRepository
    );
    //const dados = `${__dirname}/../json/followers.json`;
    const facebookUserContent = [

         {
           username: 'Douglas Tim Lemos',
           full_name: 'https://www.facebook.com/douglastim.lemos',
           id: '100041237572304',
          },
          {
            username: 'Cleiton Braga',
            full_name: 'https://www.facebook.com/cleiton.braga.7798',
            id: '100035768775537',
          },
          {
            username: 'Bianca Oliveiraa',
            full_name: 'https://www.facebook.com/bianca.oliveiraa.146',
            id: '100025788971584',
          },
          {
            username: 'Fagner Sousa',
            full_name: 'https://www.facebook.com/dumke.silva.7',
            id: '100015100301245',
          },
          {
            username: 'Elieneia Souza',
            full_name: 'https://www.facebook.com/elieneia.souza.3',
            id: '100013568507757',
          },
          {
            username: 'Tomás Júnior Cossa Júnior',
            full_name: 'https://www.facebook.com/tomasjuniorcossa.junior',
            id: '100012816455220',
          },
          {
            username: 'Nety Campos',
            full_name: 'https://www.facebook.com/nety.campos.965',
            id: '100012201644815',
          },
          {
            username: 'Magna Ferraz',
            full_name: 'https://www.facebook.com/magna.ferraz.33',
            id: '100009672811493',
          },
          {
            username: 'Maria Samara Almeida Souza',
            full_name: 'https://www.facebook.com/mariasamara.almeidasouza.3',
            id: '100030134504684',
          },
          {
            username: 'Luciano Pereira',
            full_name: 'https://www.facebook.com/profile.php?id=100044234257525',
            id: '100044234257525',

          },
          {
            username: 'Erica',
            full_name: 'https://www.facebook.com/profile.php?id=100044234257525',
            id: '1000442342575257',

          },
       ];
       facebookUserContent.forEach((value: Facebook) => {

         const facebookUser = facebookUserRepository.create({
           username: value.username,
           full_name: value.full_name,
           id: value.id,

         });

         facebookUserRepository.save(facebookUser);

       });

       console.log('Inserção no bd feita');
    return facebookUserContent;




  }


}

export default CreateFacebookUser;
