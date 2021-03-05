import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { useNaver } from '../../contexts/NaverContext';

import { Container } from './styles';

interface INaver {
  id: string;
  job_role: string;
  admission_date: Date;
  birthdate: Date;
  project: string;
  name: string;
  url: string;
}

interface INaverProps {
  data: INaver;
}

const Naver: React.FC<INaverProps> = ({ data }) => {
  const { openModalNaver, openModalExclude } = useNaver();

  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={() => openModalNaver(data)}>
        <img src={data.url} alt={data.name} />
      </button>
      <strong>{data.name}</strong>
      <p>{data.job_role}</p>

      <div>
        <FaTrash onClick={() => openModalExclude(data.id)} />
        <FaPen onClick={() => history.push(`/edit-naver/${data.id}`)} />
      </div>
    </Container>
  );
};

export default Naver;
