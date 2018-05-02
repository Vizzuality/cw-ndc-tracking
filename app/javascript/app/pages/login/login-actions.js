import { PLANNING } from 'router';

export const setUser = data => ({ type: 'SET_USER', payload: data });

export const navigateToPlanning = () => ({ type: PLANNING });
