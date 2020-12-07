import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity('facebook_users')
class FacebookUser {
  @Column()
  username: string;

  @Column()
  full_name: string;

  @PrimaryColumn()
  id: string;

}

export default FacebookUser;
