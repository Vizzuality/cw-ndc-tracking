import { apiActionCreator, get } from '../services/api.service';

export async function getTargetsThunk(dispatch, getState) {
  const section = getState().location.pathname.split('/')[1];
  const category = getState().location.payload.category;
  const path = `sections/${section}/categories/${category}/targets`;
  dispatch(fetchTargets(path));
}

// Action Creators
export const fetchTargets = path => apiActionCreator(path, get, storeTargets);
export const storeTargets = data => ({
  type: 'STORE_TARGETS',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_TARGETS' ? action.payload : state);
