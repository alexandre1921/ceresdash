import React from 'react';
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
} from './styles';
import { Title } from '../../styles/global';
import { Grid, Row, ColMd2, ColMd6, ColMd12 } from '../../styles/grid';
import magnifier from '../../assets/magnifier.svg';
import actions from '../../assets/actions.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Checkbox } from '../../assets/checkbox.svg';

const UserList: React.FC = () => {
  const show = () => console.log('a');

  const selects = [
    { title: 'Rede Social', options: ['Instagram', 'Facebook'] },
    { title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] },
  ];

  const table = {
    thead: [
      <button type="button" onClick={show}>
        <Checkbox />
      </button>,
      'Nome',
      'Username',
      'Facebook ID',
      'Ações',
    ],
    tbody: [
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
      ],
      [
        <button type="button" onClick={show}>
          <Checkbox />
        </button>,
        'Roger Carlos',
        '@rogercarlos',
        '123541251235123',
        <button type="button" onClick={show}>
          <img src={actions} alt="actions" />
        </button>,
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
                <ColMd6>
                  <Box>
                    <SearchBox placeholder="Buscar" />
                    <Magnifier src={magnifier} alt="magnifier" />
                  </Box>
                </ColMd6>
                {selects.map(value => (
                  <ColMd2>
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
                  </ColMd2>
                ))}
                <ColMd2>
                  <SendButton disabled>Enviar mensagem</SendButton>
                </ColMd2>
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
                {table.tbody.map(tbodyRow => (
                  <tr>
                    {tbodyRow.map(value => (
                      <td>{value}</td>
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
