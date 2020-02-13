import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Button } from '@/components/atoms';
import { Box } from '@/components/molecules';
import { addAlert } from '@/redux/actions/base';
import api from '@/api';
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

const Register = styled.div`
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

const Login = ({ addAlert }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const postLogin = async () => {
    const { email, password } = form;
    const { success, desc } = await api.user.login(email, password);
    addAlert(parseAlert(desc));
    console.log(success, desc);
  };

  return (
    <Container>
      <Wrapper>
        <Box title="Entrar">
          <Field
            id="login-user"
            label="Usuário"
            value={form.email}
            onChange={e => updateField('email', e.target.value)}
          />
          <Field
            type="password"
            id="login-pass"
            label="Senha"
            value={form.password}
            onChange={e => updateField('password', e.target.value)}
          />
          <Actions>
            <Button onClick={postLogin}>Entrar</Button>
            <p>
              <Link to="/senha">Recuperar senha</Link>
            </p>
          </Actions>
        </Box>
      </Wrapper>

      <Register>
        Ainda não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>.
      </Register>
    </Container>
  );
};

const mapDispatchToProps = {
  addAlert,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
