import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, Button } from '@/components/atoms';
import { Box } from '@/components/molecules';
import api from '@/api';
import { addAlert } from '@/redux/actions/base';
import { parseAlert } from '@/helpers';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 360px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Back = styled.div`
  margin: 30px 0;
  color: ${({ theme }) => theme.color.grayLight};

  a {
    color: ${({ theme }) => theme.color.grayUltraLight};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

const Register = ({ addAlert }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const postRegister = async () => {
    const { name, email, password } = form;
    const { success, desc } = await api.user.create(name, email, password);
    console.log(success, desc)
    addAlert(parseAlert(desc));
  };

  return (
    <Container>
      <Wrapper>
        <Box title="Cadastro">
          <Field
            id="register-name"
            label="Nome"
            value={form.name}
            onChange={e => updateField('name', e.target.value)}
          />
          <Field
            id="register-email"
            label="E-mail"
            value={form.email}
            onChange={e => updateField('email', e.target.value)}
          />
          <Field
            type="password"
            id="register-password"
            label="Password"
            value={form.password}
            onChange={e => updateField('password', e.target.value)}
          />
          <Actions>
            <Button onClick={postRegister}>Cadastrar</Button>
          </Actions>
        </Box>
      </Wrapper>

      <Back>
        Já possui uma conta? <Link to="/login">Faça login</Link>.
      </Back>
    </Container>
  );
};

const DispatchToProps = {
  addAlert,
};

export default connect(
  null,
  DispatchToProps,
)(Register);
