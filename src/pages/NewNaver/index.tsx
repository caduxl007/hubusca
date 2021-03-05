import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, HeaderContent } from './styles';

const NewNaver: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('aki');
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <HeaderContent>
          <FaChevronLeft onClick={() => history.goBack()} />
          <h2>Adicionar Naver</h2>
        </HeaderContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <Input name="name" placeholder="Nome" />
            <Input name="job_role" placeholder="Cargo" />
          </div>

          <div>
            <Input name="birthdate" placeholder="Idade" />
            <Input name="admission_date" placeholder="Tempo de empresa" />
          </div>

          <div>
            <Input name="project" placeholder="Projetos que participou" />
            <Input name="url" placeholder="URL da foto do Naver" />
          </div>

          <Button>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewNaver;
