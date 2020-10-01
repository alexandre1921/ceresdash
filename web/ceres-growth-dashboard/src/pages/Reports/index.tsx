import React from 'react';
import { Chart } from 'react-google-charts';
import magnifier from '../../images/magnifier.svg';
import Newfollowerchart from './new_followers_chart';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

import {
  Grafico,
  SearchBox,
  Box,
  Magnifier,
  SearchBoxDiv,
  Followers,
  SelectButton,
  SelectDiv,
  SelectOption,
  SelectList,
  SelectTitle,
} from './styles';

const Reports: React.FC = () => {
  const selects = [{ title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] }];
  return (
    <>
      <SearchBoxDiv>
        <Box>
          <SearchBox placeholder="Buscar" />
          <Magnifier src={magnifier} alt="magnifier" />
        </Box>
      </SearchBoxDiv>
      {selects.map(value => (
        <SelectDiv>
          <SelectButton href="#">
            <>
              <SelectTitle>
                <p>{value.title}</p>
                <Arrow />
              </SelectTitle>
            </>
            <SelectList>
              {value.options.map(option => (
                <SelectOption href="#">{option}</SelectOption>
              ))}
            </SelectList>
          </SelectButton>
        </SelectDiv>
      ))}
      <Newfollowerchart />
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

export default Reports;
