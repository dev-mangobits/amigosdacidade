const INITIAL_STATE = {
  logged: false,
  alerts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED':
      return {
        ...state,
        logged: action.bool,
      };

    case 'ALERT_ADD':
      return {
        ...state,
        alerts: [...state.alerts, action.alert],
      };

    case 'ALERT_REMOVE':
      return {
        ...state,
        alerts: state.alerts.filter((_, index) => index !== action.index),
      };

    case 'ALERT_CLEAR':
      return {
        ...state,
        alerts: [],
      };

    default:
      return state;
  }
};
