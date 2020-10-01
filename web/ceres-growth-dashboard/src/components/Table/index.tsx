import React, { useState } from 'react';
import {
  TableComponent,
  Thead,
  Tbody,
  Tfoot,
  Footer,
  FooterText,
  ActionsMenu,
} from './styles';
import { ReactComponent as Actions } from '../../images/actions.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { ReactComponent as Checkbox } from '../../images/checkbox.svg';
import { ReactComponent as MarkedCheckbox } from '../../images/markedCheckbox.svg';
import Modal from '../Modal';
import ModalList from '../ModalList';
import ModalSendMessage from '../ModalSendMessage';

const Table: React.FC = () => {
  const [checkbox, setCheckbox] = useState([
    [<Checkbox />, false],
    [<Checkbox />, false],
    [<Checkbox />, false],
    [<Checkbox />, false],
    [<Checkbox />, false],
    [<Checkbox />, false],
    [<Checkbox />, false],
  ]);

  function check(index: number): void {
    let newCheckbox = [...checkbox];

    if (index === 0) {
      newCheckbox = checkbox[0][1]
        ? [
            [<Checkbox />, false],
            [<Checkbox />, false],
            [<Checkbox />, false],
            [<Checkbox />, false],
            [<Checkbox />, false],
            [<Checkbox />, false],
            [<Checkbox />, false],
          ]
        : [
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
            [<MarkedCheckbox />, true],
          ];
    } else if (newCheckbox[index][1])
      newCheckbox[index] = [<Checkbox />, false];
    else newCheckbox[index] = [<MarkedCheckbox />, true];

    setCheckbox(newCheckbox);
  }

  const tableInfo = {
    thead: [
      <button
        type="button"
        onClick={() => {
          check(0);
        }}
      >
        {checkbox[0]}
      </button>,
      'Nome',
      'Username',
      'Facebook ID',
      'Ações',
    ],
    tbody: [
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
      [
        'checkbox',
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        'more info',
      ],
    ],
    tfoot: [
      <Footer>
        <FooterText>1 de 2000</FooterText>
        <Arrow />
        <Arrow />
      </Footer>,
    ],
  };
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState('list');
  return (
    <>
      <Modal open={isOpen}>
        {(() => {
          switch (modal) {
            case 'list':
              return <ModalList />;
            case 'sendMessage':
              return <ModalSendMessage />;
            default:
              return null;
          }
        })()}
      </Modal>
      <TableComponent>
        <Thead>
          <tr>
            {tableInfo.thead.map(value => (
              <th>{value}</th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {tableInfo.tbody.map((tbodyRow, trIndex) => (
            <tr>
              {tbodyRow.map((value, index) => (
                <td>
                  {(() => {
                    if (index === 0)
                      return (
                        <button
                          type="button"
                          onClick={() => {
                            check(trIndex + 1);
                          }}
                        >
                          {checkbox[trIndex + 1]}
                        </button>
                      );
                    if (index === tableInfo.thead.length - 1)
                      return (
                        <button type="button">
                          <ActionsMenu>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setIsOpen(true);
                                  setModal('list');
                                  const rootModal = document.getElementById(
                                    'root-modal',
                                  );
                                  if (rootModal != null) {
                                    rootModal.style.display = '';
                                  }
                                }}
                              >
                                Mais informações
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setIsOpen(true);
                                  setModal('sendMessage');
                                  const rootModal = document.getElementById(
                                    'root-modal',
                                  );
                                  if (rootModal != null) {
                                    rootModal.style.display = '';
                                  }
                                }}
                              >
                                Enviar mensagem
                              </button>
                            </div>
                          </ActionsMenu>
                          <Actions />
                        </button>
                      );
                    return value;
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </Tbody>
        <Tfoot>
          <tr>
            {tableInfo.tfoot.map(value => (
              <td colSpan={5}>{value}</td>
            ))}
          </tr>
        </Tfoot>
      </TableComponent>
    </>
  );
};
export default Table;
