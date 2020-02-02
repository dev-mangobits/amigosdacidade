import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 0 30px;
  font-size: 26px;
`;

const Content = styled.div``;

const Box = ({ title, children }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
};

export default Box;
