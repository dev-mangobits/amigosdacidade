import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Alert } from '@/components/atoms';
import { clearAlerts, removeAlert } from '@/redux/actions/base';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin: 5px;
`;

const Alerts = ({ alerts, clearAlerts, removeAlert }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     clearAlerts();
  //   }, 5000);
  // }, [alerts]);

  return alerts.length > 0 ? (
    <Container>
      {alerts.map((props, index) => (
        <Alert key={` alert-${index}`} {...props} remove={() => removeAlert(index)} />
      ))}
    </Container>
  ) : null;
};

const mapStateToProps = ({ base: { alerts } }) => ({ alerts });

const mapDispatchToProps = {
  clearAlerts,
  removeAlert,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alerts);
