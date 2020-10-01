import React from 'react';
import magnifier from '../../images/magnifier.svg';
import Newfollowerchart from './new_followers_chart';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import Mostfollowerssegments from './mostfollowerssegments';
import Numberoffollowers from './numberoffollowers';

import {
  SearchBox,
  Box,
  Magnifier,
  SearchBoxDiv,
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
      <Numberoffollowers />
      <Mostfollowerssegments />
    </>
  );
};

export default Reports;
