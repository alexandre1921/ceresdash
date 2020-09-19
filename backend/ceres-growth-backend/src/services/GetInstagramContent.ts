// import AppError from '../errors/AppError';
import instagramUserContent from '../json/instagramUserContent.json';

interface instagramUserContent {
  username?: string | null;
  full_name?: string | null;
  biography?: string | null;
  id?: string | null;
  business_email?: string | null;
  connected_fb_page?: string | null;
  is_business_account?: boolean | null;
  is_private?: boolean | null;
  is_verified?: boolean | null;
  success?: boolean | null;
  external_url?: string | null;
}

class GetInstagramContent {
  instagramUserContent: Array<instagramUserContent> = instagramUserContent;

  public async execute(): Promise<Array<instagramUserContent>> {
    return this.instagramUserContent;
  }
}

export default GetInstagramContent;
