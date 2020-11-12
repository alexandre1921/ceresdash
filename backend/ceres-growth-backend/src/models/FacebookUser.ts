import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity('facebook_users')
class FacebookUser {
  @Column()
  username: string;

  @Column()
  url: string;

  @PrimaryColumn()
  id: string;

}

export default FacebookUser;
