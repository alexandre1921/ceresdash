import React from 'react';
import {
  ModalComponent,
  ModalBackground,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  Textarea,
} from './styles';

import { ReactComponent as Close } from '../../images/close.svg';

interface Props {
  closeModal: { (): void };
}

const ModalSendMessage: React.FC<Props> = ({ closeModal }: Props) => {
  return (
    <>
      <ModalBackground />
      <ModalComponent>
        <ModalContent>
          <ModalHeader>
            <div>
              <p>Conteúdo da mensagem</p>
            </div>
            <div>
              <button type="button" onClick={closeModal}>
                <Close />
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <Textarea
                id="story"
                name="story"
                placeholder="Escreva a mensagem aqui"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              <p>0 caracteres</p>
            </div>
            <div>
              <button type="button">Enviar mensagem</button>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalComponent>
    </>
  );
};
export default ModalSendMessage;
