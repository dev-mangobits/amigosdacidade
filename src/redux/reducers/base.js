const INITIAL_STATE = {
  logged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED':
      return {
        ...state,
        logged: action.bool,
      };

    default:
      return state;
  }
};
