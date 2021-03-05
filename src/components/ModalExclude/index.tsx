import React, { useCallback } from 'react';

import { useNaver } from '../../contexts/NaverContext';
import api from '../../services/api';

import Button from '../Button';

import { Overlay, Modal } from './styles';

const ModalExclude: React.FC = () => {
  const {
    closeModalExclude,
    idNaverExclude,
    openModalSucess,
    modalExclude,
  } = useNaver();

  const handleExcludeNaver = useCallback(async () => {
    await api.delete(`navers/${idNaverExclude}`);
    closeModalExclude();
    openModalSucess({
      title: 'Naver excluído',
      message: 'Naver excluído com sucesso!',
    });
    modalExclude();
  }, [idNaverExclude, closeModalExclude, openModalSucess, modalExclude]);

  return (
    <Overlay>
      <Modal>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>

        <div>
          <Button onClick={closeModalExclude}>Cancelar</Button>
          <Button onClick={handleExcludeNaver}>Excluir</Button>
        </div>
      </Modal>
    </Overlay>
  );
};

export default ModalExclude;
