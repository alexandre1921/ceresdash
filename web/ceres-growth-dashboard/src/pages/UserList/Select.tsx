import React from 'react';

import { SelectButton, SelectList, SelectOption } from './styles';

const Select: React.FC = () => {
  return (
    <>
      <SelectButton href="#">
        Rede Social
        <SelectList>
          <SelectOption href="#">Instagram</SelectOption>
          <SelectOption href="#">Facebok</SelectOption>
        </SelectList>
      </SelectButton>
    </>
  );
};

export default Select;
