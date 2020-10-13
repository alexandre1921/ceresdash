import fetch from 'node-fetch';

import InstagramUser from '../models/InstagramUser';
import CreateSessionInSocialMedia from './GetSessionInSocialMedia';
import AppError from '../errors/AppError';

interface User {
  id: string;
  username: string;
  full_name: string;
  is_private: boolean;
  is_verified: boolean;
}
const doFetch = async (
  userParam: User,
  opt: {
    headers: { cookie: string };
  },
): Promise<InstagramUser> => {
  const data = await fetch(
    `https://www.instagram.com/${userParam.username}/?__a=1`,
    opt,
  )
    .then(res => res.json())
    .then(({ graphql }) => graphql)
    .then(({ user }) => user)
    .then(
      ({
        username,
        full_name,
        biography,
        id,
        business_email,
        connected_fb_page,
        is_business_account,
        is_private,
        is_verified,
        external_url,
      }: InstagramUser) => {
        console.log(`Coletando dados do usuário: ${username}`);
        return {
          username,
          full_name,
          biography,
          id,
          business_email,
          connected_fb_page,
          is_business_account,
          is_private,
          is_verified,
          external_url,
          success: true,
        };
      },
    );
  return data;
};

export default async (userParam: User): Promise<InstagramUser> => {
  await new Promise(r => setTimeout(r, 300));
  try {
    return await doFetch(userParam, { headers: { cookie: '' } });
  } catch (err) {
    console.log(
      `Erro na coleta de dados do usuário: ${userParam.username}
       Erro: ${err}
       Tentando novamente com login`,
    );
    const sessionId = await CreateSessionInSocialMedia();
    try {
      return await doFetch(userParam, {
        headers: {
          cookie: `${sessionId}`,
        },
      });
    } catch (errLogin) {
      throw new AppError(
        'Erro ao entrar em contato com o servidor do instagram',
        503,
      );
    }
  }
};
