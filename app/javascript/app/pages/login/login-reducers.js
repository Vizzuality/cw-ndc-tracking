export const setUser = (state = {}, action) =>
  (action.type === 'SET_USER' ? { ...state, data: action.payload } : state);
