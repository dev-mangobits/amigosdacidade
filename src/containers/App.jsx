import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Alerts } from '@/components/molecules';
import { appRoutes } from '@/routes';

const Container = styled.div``;

const App = ({ children, history, logged }) => {
  const { pathname } = history.location;

  if (
    !logged &&
    pathname !== appRoutes.LOGIN.path &&
    pathname !== appRoutes.REGISTER.path &&
    pathname !== appRoutes.FORGOT_PASSWORD.path
  ) {
    history.push(appRoutes.LOGIN.path);
  }

  return (
    <Container>
      {children}
      <Alerts />
    </Container>
  );
};

const mapStateToProps = ({ base: { logged } }) => ({ logged });

export default withRouter(connect(mapStateToProps)(App));
