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
            ['', ''],
            ['New York City, NY', 70],
            ['Los Angeles, CA', 73],
            ['Chicago, IL', 89],
            ['Houston, TX', 23],
            ['Philadelphia, PA', 45],
          ]}
          options={{
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Alcance Semanal',
              minValue: 0,
            },
          }}
          legendToggle
        />
      </NewFollowers>
    </>
  );
};

export default Newfollowerchart;
