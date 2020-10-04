import React from 'react';
import { Followers } from './styles';

const Numberoffollowers: React.FC = () => {
  return (
    <Followers>
      <header>Número de Seguidores</header>
      <div id="BodyFollowers">
        <section id="FacebookNumber">
          <p>14.572</p>
        </section>
        <section id="InstagramNumber">
          <p>14.572</p>
        </section>
      </div>
      <footer>
        <div id="CaptionFollowers">
          <div>
            <strong>
              Facebook
              <p> </p>
            </strong>
          </div>
          <strong>
            Instagram
            <hr />
          </strong>
        </div>
      </footer>
    </Followers>
  );
};

export default Numberoffollowers;
