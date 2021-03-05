import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useNaver } from '../../contexts/NaverContext';

import { Overlay, Modal } from './styles';

const ModalSucess: React.FC = () => {
  const { modalSucess, closeModalSucess } = useNaver();

  return (
    <Overlay>
      <Modal>
        <FaTimes onClick={closeModalSucess} />

        <h2>{modalSucess.title}</h2>
        <p>{modalSucess.message}</p>
      </Modal>
    </Overlay>
  );
};

export default ModalSucess;
