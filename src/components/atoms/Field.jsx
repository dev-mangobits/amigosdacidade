import React from 'react';
import styled from 'styled-components';
import { Input } from '@/components/atoms';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
`;

const Field = ({ label, id, ...rest }) => {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...rest} />
    </Container>
  );
};

export default Field;
