import { PLANNING, LOGIN } from 'router';
import { createAction } from 'redux-actions';

// Action creators
export const setUser = createAction('SET_USER');
export const navigateToPlanning = () => ({ type: PLANNING });
export const navigateToLogin = () => ({ type: LOGIN });
