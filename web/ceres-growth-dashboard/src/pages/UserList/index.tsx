import React, { useState } from 'react';
import {
  Wrapper,
  Box,
  SearchBox,
  Magnifier,
  TableOptions,
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  SendButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Footer,
  FooterText,
  SearchBoxDiv,
  SelectDiv,
  SendButtonDiv,
  Title,
} from './styles';
import { Grid, Row, ColMd12 } from '../../styles/grid';
import magnifier from '../../assets/magnifier.svg';
import actions from '../../assets/actions.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Checkbox } from '../../assets/checkbox.svg';
import { ReactComponent as MarkedCheckbox } from '../../assets/markedCheckbox.svg';

const UserList: React.FC = () => {
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
    console.log(index);

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
  const show = () => console.log('a');

  const selects = [
    { title: 'Rede Social', options: ['Instagram', 'Facebook'] },
    { title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] },
  ];

  const table = {
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

  return (
    <Wrapper>
      <Grid>
        <Row>
          <ColMd12>
            <Title>Lista de usuários</Title>
          </ColMd12>
        </Row>
        <Row>
          <ColMd12>
            <TableOptions>
              <Row>
                <SearchBoxDiv>
                  <Box>
                    <SearchBox placeholder="Buscar" />
                    <Magnifier src={magnifier} alt="magnifier" />
                  </Box>
                </SearchBoxDiv>
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
                <SendButtonDiv>
                  <SendButton>Enviar mensagem</SendButton>
                </SendButtonDiv>
              </Row>
            </TableOptions>
          </ColMd12>
        </Row>
        <Row>
          <ColMd12>
            <Table>
              <Thead>
                <tr>
                  {table.thead.map(value => (
                    <th>{value}</th>
                  ))}
                </tr>
              </Thead>
              <Tbody>
                {table.tbody.map((tbodyRow, trIndex) => (
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
                          if (index === table.thead.length - 1)
                            return (
                              <button type="button" onClick={show}>
                                <img src={actions} alt="actions" />
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
                  {table.tfoot.map(value => (
                    <td colSpan={5}>{value}</td>
                  ))}
                </tr>
              </Tfoot>
            </Table>
          </ColMd12>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default UserList;
