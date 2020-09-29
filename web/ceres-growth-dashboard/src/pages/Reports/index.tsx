import React from 'react';
import { Chart } from 'react-google-charts';
import magnifier from '../../assets/magnifier.svg';

import {
  Title,
  Grafico,
  SearchBox,
  Box,
  Magnifier,
  SearchBoxDiv,
  Followers,
  NewFollowers,
} from './styles';

const Reports: React.FC = () => {
  return (
    <>
      <SearchBoxDiv>
        <Box>
          <SearchBox placeholder="Buscar" />
          <Magnifier src={magnifier} alt="magnifier" />
        </Box>
      </SearchBoxDiv>
      <NewFollowers>teste</NewFollowers>
      <Followers>
        <header>Número de Seguidores</header>

        <footer>
          <div>
            <strong>Facebook</strong>
            <p> </p>
          </div>
          <strong>Instagram</strong>

          <p> </p>
        </footer>
      </Followers>
      <Grafico>
        <Chart
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Element',
              'Porcentagem',
              { role: 'style', backgroud: '#0d4137' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
              },
            ],
            ['Música', 83, '#262121', null],
            ['Memes', 72, '#262121', null],
            ['Esporte', 65, '#262121', null],
            ['Saúde', 49, '#262121', null],
            ['alimentação', 36, '#262121', null],
            ['Moda', 28, '#262121', null],
            ['Humor', 25, '#262121', null],
          ]}
          options={{
            title: 'Segmentos com maior númeor de seguidores',
            width: 979,
            height: 210,
            bar: { groupWidth: '35%' },
            legend: { position: 'none' },
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
      </Grafico>
    </>
  );
};

export default Reports;
