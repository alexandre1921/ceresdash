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
    key: string;
    title: JSX.Element;
    options: Array<string>;
  };
}

const Select: React.FC<Props> = (Props: Props) => {
  const { key, title, options } = Props.selectInfo;
  return (
    <SelectDiv>
      <SelectButton href="#">
        <>
          <SelectTitle>
            {title}
            <Arrow />
          </SelectTitle>
        </>
        <SelectList>
          {options.map((option: string) => (
            <SelectOption key={option} href="#">
              {option}
            </SelectOption>
          ))}
        </SelectList>
      </SelectButton>
    </SelectDiv>
  );
};
export default Select;
