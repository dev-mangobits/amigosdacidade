import React from 'react';
import styled from 'styled-components';
import { Icon } from '@/components/atoms';

const Container = styled.div`
  background-color: ${({ theme, color }) => theme.color[color ? color : 'default']};
  position: relative;
  width: 320px;
  border-radius: 3px;
  margin: 10px;
  padding: 14px 14px 16px;
  color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  span {
    display: block;
    padding-right: 20px;
    opacity: 0.9;
    font-size: 13px;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  .icon {
    width: 10px;
    height: 10px;
    opacity: 0.7;
    transition: opacity 0.2s;

    svg {
      fill: ${({ theme }) => theme.color.white};
    }

    &:hover {
      opacity: 1;
      transition: opacity 0.2s;
    }
  }
`;

const Alert = ({ color, text, remove }) => {
  return (
    <Container color={color} onClick={remove}>
      <span>{text}</span>
      <Close onClick={remove}>
        <Icon icon="close" />
      </Close>
    </Container>
  );
};

export default Alert;
