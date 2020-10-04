import React from 'react';
import { Chart } from 'react-google-charts';
import { NewFollowers } from './styles';

const Newfollowerchart: React.FC = () => {
  return (
    <>
      <NewFollowers>
        <header>
          <div id="LeftTexts">
            <h2>Novos Seguidores</h2>
            <h3>Alcance Semanal</h3>
          </div>
          <div id="RightTexts">
            <p>Média Diária: 56,7</p>
            <p>Total: 396</p>
          </div>
        </header>
        <Chart
          height={201}
          chartType="ColumnChart"
          // loader={<div>Loading Chart</div>}
          data={[
            ['Elemento', 'Segidores', { role: 'style' }],
            ['Segunda', 70, 'color: #1D1919'],
            ['Terça', 73, 'color: #1D1919'],
            ['Quarta', 89, 'color: #1D1919'],
            ['Quinta', 23, 'color: #1D1919'],
            ['Sexta', 45, 'color: #1D1919'],
            ['Sábado', 45, 'color: #1D1919'],
            ['Domingo', 45, 'color: #1D1919'],
          ]}
          options={{
            chartArea: { width: '91%' },
            legend: { position: 'none' },
          }}
        />
      </NewFollowers>
    </>
  );
};

export default Newfollowerchart;
