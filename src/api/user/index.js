import Base from '../base';

export default {
  login: async (email, password) => {
    return await Base.fetch('/user/login', { method: 'POST', body: { email, password } }).then(
      res => res.json(),
    );
  },

  create: async (name, email, password) => {
    return await Base.fetch('/user/newUser', {
      method: 'POST',
      body: { name, email, password },
    }).then(res => res.json());
  },

  forgotPassword: async email => {
    return await Base.fetch(`/userExt/forgotPassword/${email}`).then(res =>
      res.json(),
    );
  },

  update: async (id, name) => {
    return await Base.fetch('/user/update', { method: 'POST', body: { id, name } }).then(res =>
      res.json(),
    );
  },

  load: async id => {
    return await Base.fetch(`/user/load/${id}`).then(res =>
      res.json(),
    );
  }
};
