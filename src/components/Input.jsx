import React from 'react';
import styled from 'styled-components';

const Container = styled.input``;

const Input = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
