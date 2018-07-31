import { createAction } from 'redux-actions';
import { getUser } from 'services/user.service';
import isEmpty from 'lodash/isEmpty';

export async function getUserThunk(dispatch, getState) {
  const { user: userData } = getState();
  if (isEmpty(userData) && !userData.loading) {
    getUser().then(user => {
      dispatch(setUserLoading(true));
      dispatch(setUser(user));
      dispatch(setUserLoading(false));
    });
  }
}

// Action creator
export const setUser = createAction('SET_USER');
export const setUserLoading = createAction('SET_USER_LOADING');

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, data: action.payload };
    case 'SET_USER_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
