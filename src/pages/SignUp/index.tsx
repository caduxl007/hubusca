import React, { useCallback, useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';
import api from '../../services/api';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          passwordRepeat: Yup.string()
            .required('Confirmação de senha é obrigatório')
            .oneOf([Yup.ref('password'), ''], 'Senhas não conferem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        await api.post('/users/signup', {
          email,
          password,
        });

        alert('Cadastro feito com sucesso!');

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        alert('Esse e-mail ja está cadastrado!');
      } finally {
        setLoading(false);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />

          <Input name="password" placeholder="Senha" type="password" />

          <Input
            name="passwordRepeat"
            placeholder="Confirme sua senha"
            type="password"
          />

          <Link to="/">Voltar para login</Link>

          <Button loading={loading} type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
