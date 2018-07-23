import { PLANNING, LOGIN } from 'router';

// Action types
const SET_USER = 'SET_USER';

// Action creators
export const setUser = data => ({ type: SET_USER, payload: data });
export const navigateToPlanning = () => ({ type: PLANNING });
export const navigateToLogin = () => ({ type: LOGIN });
