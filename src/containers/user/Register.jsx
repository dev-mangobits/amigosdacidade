import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, Button } from '@/components/atoms';
import { Box } from '@/components/molecules';

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

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const updateField = (form, value) => {
    setForm({ ...form, [form]: value });
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
            id="register-password"
            label="Password"
            value={form.password}
            onChange={e => updateField('password', e.target.value)}
          />
          <Actions>
            <Button>Cadastrar</Button>
          </Actions>
        </Box>
      </Wrapper>

      <Back>
        Já possui uma conta? <Link to="/login">Faça login</Link>.
      </Back>
    </Container>
  );
};

export default connect(null)(Register);
