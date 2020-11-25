import React, { useState } from 'react';
import {
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  SelectDiv,
} from './styles';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

interface Props {
  onSelect: (value: string) => void;
  selectInfo: {
    title: JSX.Element;
    options: Array<string>;
  };
}

const Select: React.FC<Props> = ({selectInfo, onSelect}: Props) => {
  const { title, options } = selectInfo;
  const [display, setDisplay] = useState("none");
  return (
    <SelectDiv onFocus={()=>{setDisplay("")}} onBlur={async ()=>{
          await new Promise(r => setTimeout(r, 100));
          setDisplay("none");
        }
      }>
      <SelectButton href="#">
        <>
          <SelectTitle>
            {title}
            <Arrow />
          </SelectTitle>
        </>
        <SelectList>
          {options.map((option: string) => (
            <SelectOption style={{display: display}} key={option} href="#" onClick={()=>{
                  setDisplay("none");
                  onSelect(option);
                }
              }>
              {option}
            </SelectOption>
          ))}
        </SelectList>
      </SelectButton>
    </SelectDiv>
  );
};
export default Select;
