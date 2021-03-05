import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useNaver } from '../../contexts/NaverContext';
import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Naver from '../../components/Naver';
import ModalNaver from '../../components/ModalNaver';

import { Container, Content, HeaderContent, ContentNavers } from './styles';
import ModalExclude from '../../components/ModalExclude';

interface INaver {
  id: string;
  job_role: string;
  admission_date: Date;
  birthdate: Date;
  project: string;
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<INaver[]>([]);

  const history = useHistory();
  const { isModalNaver, isModalExclude, isNaverExclude } = useNaver();

  useEffect(() => {
    try {
      api.get('/navers').then((response) => {
        setNavers(response.data);
      });
    } catch (err) {
      throw new Error(err);
    }
  }, [isNaverExclude]);

  return (
    <Container>
      {isModalNaver && <ModalNaver />}
      {isModalExclude && <ModalExclude />}
      <Header />

      <Content>
        <HeaderContent>
          <h2>Navers</h2>
          <div>
            <Button onClick={() => history.push('new-naver')}>
              Adicionar Naver
            </Button>
          </div>
        </HeaderContent>

        <ContentNavers>
          {navers.map((naver) => (
            <Naver key={naver.id} data={naver} />
          ))}
        </ContentNavers>
      </Content>
    </Container>
  );
};

export default Home;
