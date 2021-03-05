import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { FaTimes, FaTrash, FaPen } from 'react-icons/fa';

import { useNaver } from '../../contexts/NaverContext';

import { Overlay, Naver, InfoNaver } from './styles';

const ModalNaver: React.FC = () => {
  const { closeModalNaver, naver, openModalExclude } = useNaver();
  const history = useHistory();

  const birthdateFormatted = useMemo(() => {
    return format(
      new Date().setDate(new Date(naver.birthdate).getDate() + 2),
      'dd/MM/yyyy',
    );
  }, [naver]);

  const adimissionFormatted = useMemo(() => {
    return format(
      new Date().setDate(new Date(naver.admission_date).getDate() + 2),
      'dd/MM/yyyy',
    );
  }, [naver]);

  return (
    <Overlay>
      <Naver>
        <img src={naver.url} alt={naver.name} />
        <InfoNaver>
          <FaTimes onClick={closeModalNaver} />

          <h2>{naver.name}</h2>
          <p>Front-end Developer</p>

          <strong>Data de nascimento</strong>
          <p>{birthdateFormatted}</p>

          <strong>Data iniciou na empresa</strong>
          <p>{adimissionFormatted}</p>

          <strong>Projetos que participou</strong>
          <p>{naver.project}</p>

          <div>
            <FaTrash onClick={() => openModalExclude(naver.id)} />
            <FaPen onClick={() => history.push(`/edit-naver/${naver.id}`)} />
          </div>
        </InfoNaver>
      </Naver>
    </Overlay>
  );
};

export default ModalNaver;
