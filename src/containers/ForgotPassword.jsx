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

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Wrapper>
        <Box title="Recuperar senha">
          <Field
            id="forgot-email"
            label="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Actions>
            <Button>Enviar</Button>
          </Actions>
        </Box>
      </Wrapper>

      <Back>
        Ou se preferir, volte para <Link to="/login">Login</Link>.
      </Back>
    </Container>
  );
};

export default connect(null)(Login);
