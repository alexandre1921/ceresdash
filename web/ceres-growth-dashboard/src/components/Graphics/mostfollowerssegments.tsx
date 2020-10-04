import React from 'react';
import { Chart } from 'react-google-charts';
import { Grafico } from './styles';

const Mostfollowerssegments: React.FC = () => {
  return (
    <>
      <Grafico>
        <header>Segmentos com maior número de seguidores</header>
        <Chart
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Element',
              'Porcentagem',
              { role: 'style', backgroud: '#262121' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
              },
            ],
            ['Música', 93, '#262121', null],
            ['Memes', 72, '#262121', null],
            ['Esporte', 65, '#262121', null],
            ['Saúde', 49, '#262121', null],
            ['alimentação', 36, '#262121', null],
            ['Moda', 28, '#262121', null],
            ['Humor', 25, '#262121', null],
          ]}
          options={{
            // title: 'Segmentos com maior númeor de seguidores',
            height: 173,
            chartArea: { width: '80%' },
            bar: { groupWidth: '35%' },
            legend: { position: 'none' },
          }}
          // For tests
        />
      </Grafico>
    </>
  );
};
export default Mostfollowerssegments;
