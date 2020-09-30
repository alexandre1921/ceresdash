import React from 'react';
import { Chart } from 'react-google-charts';
import { NewFollowers } from './styles';

const Newfollowerchart: React.FC = () => {
  return (
    <>
      <NewFollowers>
        <Chart
          width={574}
          height={289}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['', 'Dias'],
            ['Segunda', 70],
            ['Terça', 73],
            ['Quarta', 89],
            ['Quinta', 23],
            ['Sexta', 45],
            ['Sábado', 45],
            ['Domingo', 45],
          ]}
          options={{
            chartArea: { width: '90%' },
          }}
        />
      </NewFollowers>
    </>
  );
};

export default Newfollowerchart;
