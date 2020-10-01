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

const modal: React.FC = () => {
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
              <button
                type="button"
                onClick={() => {
                  const rootModal = document.getElementById('root-modal');
                  if (rootModal != null) {
                    rootModal.style.display = 'none';
                  }
                }}
              >
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
export default modal;
