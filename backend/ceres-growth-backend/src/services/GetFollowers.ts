import fetch from 'node-fetch';
import CreateSessionInSocialMedia from './GetSessionInSocialMedia';

interface User {
  id: string;
  username: string;
  full_name: string;
  is_private: boolean;
  is_verified: boolean;
}

export default async (id: string): Promise<Array<User>> => {
  const sessionId = await CreateSessionInSocialMedia();
  let followers: Array<User> = [];
  try {
    let after = null;
    let has_next = true;
    while (has_next) {
      // eslint-disable-next-line no-await-in-loop
      await fetch(
        `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=${encodeURIComponent(
          JSON.stringify({
            id,
            include_reel: true,
            fetch_mutual: true,
            first: 50,
            after,
          }),
        )}`,
        {
          headers: {
            cookie: `${sessionId}`,
          },
        },
      )
        // eslint-disable-next-line no-loop-func
        .then(res1 => res1.json())
        // eslint-disable-next-line no-loop-func
        .then(res2 => {
          const { edge_followed_by } = res2.data.user;
          has_next = edge_followed_by.page_info.has_next_page;
          after = edge_followed_by.page_info.end_cursor;
          followers = followers.concat(
            edge_followed_by.edges.map(
              ({
                node,
              }: {
                node: {
                  id: string;
                  username: string;
                  full_name: string;
                  is_private: boolean;
                  is_verified: boolean;
                };
              }) => {
                return {
                  id: node.id,
                  username: node.username,
                  fullname: node.full_name,
                  is_private: node.is_private,
                  is_verified: node.is_verified,
                };
              },
            ),
          );
        });
      console.log(`Criando lista de seguidores, tem próximo?: ${has_next}`);
    }
  } catch (err) {
    console.log('Invalid username');
  }
  return followers;
};
