export const setLogged = bool => ({
  type: 'SET_LOGGED',
  bool,
});

export const addAlert = alert => ({
  type: 'ALERT_ADD',
  alert,
});

export const removeAlert = index => ({
  type: 'ALERT_REMOVE',
  index,
});

export const clearAlerts = () => ({
  type: 'ALERT_CLEAR',
});
