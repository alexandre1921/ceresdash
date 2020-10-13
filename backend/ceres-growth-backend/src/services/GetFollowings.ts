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
  let followings: Array<User> = [];
  try {
    let after = null;
    let has_next = true;
    while (has_next) {
      // eslint-disable-next-line no-await-in-loop
      await fetch(
        `https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=${encodeURIComponent(
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
        .then(res => res.json())
        // eslint-disable-next-line no-loop-func
        .then(res => {
          has_next = res.data.user.edge_follow.page_info.has_next_page;
          after = res.data.user.edge_follow.page_info.end_cursor;
          followings = followings.concat(
            res.data.user.edge_follow.edges.map(
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
    }
    console.log(`Criando lista de seguindo, tem próximo?: ${has_next}`);
  } catch (err) {
    console.log('Invalid username');
  }
  return followings;
};
