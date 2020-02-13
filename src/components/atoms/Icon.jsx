import React from 'react';
import styled from 'styled-components';

import Close from '-!svg-react-loader!@/assets/svg/close.svg';

const Container = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
  }
`;

const parseIcon = icon => {
  switch (icon) {
    case 'close':
      return <Close />;
  }
};

const Icon = ({ icon }) => {
  return <Container className={`icon icon-${icon}`}>{parseIcon(icon)}</Container>;
};

export default Icon;
