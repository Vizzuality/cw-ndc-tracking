export const setUser = (state = {}, action) =>
  (action.type === 'SET_USER' ? action.payload : state);
