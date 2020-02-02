import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '@/containers/Dashboard';
import Login from '@/containers/Login';
import Register from '@/containers/Register';
import ForgotPassword from '@/containers/ForgotPassword';
import NotFound from '@/containers/NotFound';

export const appRoutes = {
  LOGIN: {
    path: '/login',
    exact: true,
    component: Login,
  },
  REGISTER: {
    path: '/cadastro',
    exact: true,
    component: Register,
  },
  FORGOT_PASSWORD: {
    path: '/senha',
    exact: true,
    component: ForgotPassword,
  },
  DASHBOARD: {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  NOTFOUND: {
    component: NotFound,
  },
};

export default function() {
  return (
    <Switch>
      {Object.keys(appRoutes).map((key, index) => (
        <Route key={index} {...appRoutes[key]} />
      ))}
    </Switch>
  );
}
