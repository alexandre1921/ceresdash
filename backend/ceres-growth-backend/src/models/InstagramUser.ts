import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('instagram_users')
class InstagramUser {
  @Column()
  username: string;

  @Column()
  full_name: string;

  @PrimaryColumn()
  id: string;

  @Column()
  biography: string;

  @Column()
  connected_fb_page: string;

  @Column()
  external_url: string;

  @Column()
  business_email: string;

  @Column()
  is_business_account: boolean;

  @Column()
  is_private: boolean;

  @Column()
  is_verified: boolean;

  @Column()
  success: boolean;
}

export default InstagramUser;
