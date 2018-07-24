export const setUser = (state = {}, action) => ({
  ...state,
  ...action.payload
});
