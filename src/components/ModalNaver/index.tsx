import React from 'react';
import { FaTimes, FaTrash, FaPen } from 'react-icons/fa';

import { useNaver } from '../../contexts/NaverContext';

import { Overlay, Naver, InfoNaver } from './styles';

const ModalNaver: React.FC = () => {
  const { closeModalNaver, naver } = useNaver();

  return (
    <Overlay>
      <Naver>
        <img src={naver.url} alt={naver.name} />
        <InfoNaver>
          <FaTimes onClick={closeModalNaver} />

          <h2>{naver.name}</h2>
          <p>Front-end Developer</p>

          <strong>Idade</strong>
          <p>{naver.birthdate}</p>

          <strong>Tempo de empresa</strong>
          <p>{naver.admission_date}</p>

          <strong>Projetos que participou</strong>
          <p>{naver.project}</p>

          <div>
            <FaTrash />
            <FaPen />
          </div>
        </InfoNaver>
      </Naver>
    </Overlay>
  );
};

export default ModalNaver;
