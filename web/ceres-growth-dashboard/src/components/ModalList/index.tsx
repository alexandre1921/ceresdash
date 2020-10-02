import React from 'react';
import {
  ModalComponent,
  ModalBackground,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
} from './styles';

import { ReactComponent as Close } from '../../images/close.svg';

interface Props {
  closeModal: { (): void };
}

const ModalList: React.FC<Props> = ({ closeModal }: Props) => {
  return (
    <div>
      <ModalBackground />
      <ModalComponent>
        <ModalContent>
          <ModalHeader>
            <div>
              <p>Mais detalhes sobre o usuário</p>
            </div>
            <div>
              <button type="button" onClick={closeModal}>
                <Close />
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <p>nome: rogerinho123 </p>
            </div>
            <div>
              <p>nome_completo: Roger Carlos</p>
            </div>
            <div>
              <p>
                biografia: Queres conversar comigo? Me chama no Whatsapp{' '}
                <span role="img" aria-label="enter">
                  ⤵️
                </span>
              </p>
            </div>
            <div>
              <p>id: 1234567890</p>
            </div>
            <div>
              <p>email: roger.carlos@gmail.com</p>
            </div>
            <div>
              <p>vinculo_fb: true</p>
            </div>
            <div>
              <p>conta_comercial: false</p>
            </div>
            <div>
              <p>conta_privada: false</p>
            </div>
            <div>
              <p>
                link_externo: &nbsp;
                <a href="http://bit.ly/EDILBERTOMARTINS">
                  http://bit.ly/EDILBERTOMARTINS
                </a>
              </p>
            </div>
            <div>
              <p>sucesso: true</p>
            </div>
          </ModalBody>
          <ModalFooter>&nbsp;</ModalFooter>
        </ModalContent>
      </ModalComponent>
    </div>
  );
};
export default ModalList;
