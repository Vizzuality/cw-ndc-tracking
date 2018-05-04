import { apiActionCreator, get } from '../services/api.service';

export async function getTargetsThunk(dispatch, getState) {
  const section = getState().currentSection;
  const target = getState().currentTarget;
  const path = `/sections/${section}/categories/${target}/targets`;
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
  (action.type === 'STORE_TARGETS' ? state : state);
