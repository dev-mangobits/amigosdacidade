export const parseAlert = code => {
  switch (code) {
    case 'email_exists':
      return { color: 'warning', text: 'Usuário já cadastrado.' };

    case 'invalid_user_password':
      return { color: 'danger', text: 'Usuário ou senha inválido.' };

    default:
      break;
  }
};
