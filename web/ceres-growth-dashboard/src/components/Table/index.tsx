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
import Modal from '../Modal';
import ModalList from '../ModalList';
import ModalSendMessage from '../ModalSendMessage';
import ButtonCheckbox from '../../components/ButtonCheckbox';

interface TableInfo {
  thead: (string | JSX.Element)[];
  tbody: (string | JSX.Element)[][];
  tfoot: JSX.Element[];
}

interface Props {
  tableContent:any;
}

const Table: React.FC<Props> = ({ tableContent }:Props) => {

  const [tableInfo] = useState({
    thead: [
      <ButtonCheckbox checked={false}/>,
      'Nome',
      'Username',
      'ID',
      'Ações',
    ],
    tbody: [[<h1>null</h1>, '', '', '', '']],
    tfoot: [  
      <Footer>
        <FooterText>1 de 2000</FooterText>
        <Arrow />
        <Arrow />
      </Footer>,
    ],
  });


    tableInfo.tbody = [];
    let value;
    for (let i = 0; i < tableContent.length; i++) {
        value=tableContent[i];
        tableInfo.tbody.push([
        <ButtonCheckbox checked={false}/>,
        value.full_name,
        `@${value.username}`,
        value.id,
        'more info',
      ]);
    }
  
  const showTable=tableInfo.tbody.length===0;

  const [[isOpen, modal], setModal] = useState([false, '']);

  return (
    <div style={{display:showTable?"none":""}}>
      <Modal open={isOpen}>
        {(() => {
          switch (modal) {
            case 'list':
              return (
                <ModalList
                  closeModal={() => {
                    setModal([false, '']);
                  }}
                />
              );
            case 'sendMessage':
              return (
                <ModalSendMessage
                  closeModal={() => {
                    setModal([false, '']);
                  }}
                />
              );
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
                    if (index === tableInfo.thead.length - 1)
                      return (
                        <button type="button">
                          <ActionsMenu>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setModal([true, 'list']);
                                }}
                              >
                                Mais informações
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setModal([true, 'sendMessage']);
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
    </div>
  );
};
export default Table;
