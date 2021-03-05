import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { format } from 'date-fns';
import { Form } from '@unform/web';
import { useHistory, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import * as Yup from 'yup';

import { useNaver } from '../../contexts/NaverContext';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, HeaderContent } from './styles';

interface INaver {
  job_role: string;
  admission_date: Date;
  birthdate: Date;
  project: string;
  name: string;
  url: string;
}

interface INaverParams {
  id: string;
}

const EditNaver: React.FC = () => {
  const [naver, setNaver] = useState<INaver>();

  const params = useParams<INaverParams>();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { openModalSucess } = useNaver();

  const handleSubmit = useCallback(
    async (data: INaver) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          job_role: Yup.string().required('Cargo obrigatório'),

          project: Yup.string().required('Campo obrigatório'),
          url: Yup.string()
            .url('Coloque um link válido')
            .required('Coloque um link válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const dataFormatted = {
          ...data,
          birthdate: data.birthdate ? data.birthdate : naver?.birthdate,
          admission_date: data.admission_date
            ? data.admission_date
            : naver?.admission_date,
        };

        if (
          dataFormatted.admission_date === undefined ||
          dataFormatted.birthdate === undefined
        ) {
          return;
        }

        await api.put(`/navers/${params.id}`, {
          ...dataFormatted,
          birthdate: format(new Date(dataFormatted.birthdate), 'dd-MM-yyyy'),
          admission_date: format(
            new Date(dataFormatted.admission_date),
            'dd-MM-yyyy',
          ),
        });

        openModalSucess({
          title: 'Naver atualizado',
          message: 'Naver atualizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        alert('Falha ao tentar editar um naver');
      }
    },
    [openModalSucess, params.id, naver],
  );

  useEffect(() => {
    async function loadNaver(): Promise<void> {
      try {
        const response = await api.get(`navers/${params.id}`);

        setNaver(response.data);
      } catch (err) {
        history.push('/home');
      }
    }

    loadNaver();
  }, [params.id, history]);

  if (!naver) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />

      <Content>
        <HeaderContent>
          <FaChevronLeft onClick={() => history.goBack()} />
          <h2>Editar Naver</h2>
        </HeaderContent>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={naver}>
          <div>
            <Input name="name" placeholder="Nome" />
            <Input name="job_role" placeholder="Cargo" />
          </div>

          <div>
            <Input
              name="birthdate"
              placeholder="Data de nascimento"
              type="date"
            />
            <Input
              name="admission_date"
              placeholder="Data que iniciou na empresa"
              type="date"
            />
          </div>

          <div>
            <Input name="project" placeholder="Projetos que participou" />
            <Input name="url" placeholder="URL da foto do Naver" />
          </div>

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditNaver;
