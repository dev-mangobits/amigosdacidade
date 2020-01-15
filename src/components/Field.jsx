import React from 'react';
import styled from 'styled-components';
import { Input } from '@/components';

const Container = styled.div``;

const Label = styled.div``;

const Field = ({ label, ...rest }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </Container>
  );
};

export default Field;
