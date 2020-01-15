import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, Button } from '@/components';

const Container = styled.div``;

const Wrapper = styled.div``;

const Box = styled.div``;

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Wrapper>
        <Box>
          <h1>Entrar</h1>
          <Field label="Usuário" value={username} onChange={e => setUsername(e.target.value)} />
          <Field label="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <Button>Entrar</Button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default connect(null)(Home);
