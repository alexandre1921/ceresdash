import React from 'react';
import {
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  SelectDiv,
} from './styles';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const Select: React.FC = () => {
  const selects = [{ title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] }];
  return (
    <>
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
    </>
  );
};
export default Select;
