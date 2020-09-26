import React from 'react';

import { SelectButton, SelectList, SelectOption, Arrow } from './styles';
import arrow from '../../assets/arrow.svg';

const Select: React.FC = () => {
  return (
    <>
      <SelectButton href="#">
        <>
          <p>
            Rede Social
            <Arrow src={arrow} alt="arrow" />
          </p>
        </>
        <SelectList>
          <SelectOption href="#">Instagram</SelectOption>
          <SelectOption href="#">Facebook</SelectOption>
        </SelectList>
      </SelectButton>
    </>
  );
};

export default Select;
