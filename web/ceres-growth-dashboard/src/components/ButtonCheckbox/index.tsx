import React, { useState } from 'react';
import { ReactComponent as Checkbox } from '../../images/checkbox.svg';
import { ReactComponent as MarkedCheckbox } from '../../images/markedCheckbox.svg';

interface Props {
  checked: boolean;
}

const ButtonCheckbox: React.FC<Props> = ({checked}:Props) => {
  const [marked, setMarked] = useState(checked);
  return (
    <button
        type="button"
        onClick={() => {
          setMarked(!marked);
        }}
      >
        {marked ? <MarkedCheckbox /> : <Checkbox />}
    </button>
  );
};
export default ButtonCheckbox;
