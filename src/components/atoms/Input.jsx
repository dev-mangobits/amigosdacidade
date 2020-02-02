import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 3px;
  box-shadow: none;
  border: 1px solid #ddd;
  padding: 8px 12px;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const Input = props => {
  return <Container {...props} />;
};

export default Input;
