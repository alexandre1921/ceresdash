import React from 'react';
import {
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  SelectDiv,
} from './styles';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

interface Props {
  selectInfo: {
    title: string;
    options: Array<string>;
  };
}

const Select: React.FC<Props> = (Props: Props) => {
  const { title, options } = Props.selectInfo;
  return (
    <SelectDiv>
      <SelectButton href="#">
        <>
          <SelectTitle>
            <p>{title}</p>
            <Arrow />
          </SelectTitle>
        </>
        <SelectList>
          {options.map((option: string) => (
            <SelectOption href="#">{option}</SelectOption>
          ))}
        </SelectList>
      </SelectButton>
    </SelectDiv>
  );
};
export default Select;
