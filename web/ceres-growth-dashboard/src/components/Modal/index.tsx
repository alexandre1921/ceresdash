import React from 'react';
import ReactDOM from 'react-dom';

interface props {
  open: boolean;
}

const modal: React.FC<props> = ({ children, open }) => {
  if (!open) return null;

  const div = document.getElementById('root-modal');
  if (div != null)
    return ReactDOM.createPortal(
      <div style={{ display: open ? '' : 'none' }}>{children}</div>,
      div,
    );
  return null;
};
export default modal;
