import { apiActionCreator, get } from '../services/api.service';

export async function getIndicatorsThunk(dispatch, getState) {
  const section = getState().location.pathname.split('/')[1];
  const category = getState().location.pathname.split('/')[2];
  const target = getState().location.payload.target;
  const path = `sections/${section}/categories/${category}/targets/${target}/indicators`;
  dispatch(fetchIndicators(path));
}

// Action Creators

export const fetchIndicators = path =>
  apiActionCreator(path, get, storeIndicators);

export const patchIndicator = (
  { section, category, target, indicator },
  { valueLabel, value }
) => ({
  type: 'API',
  method: 'PATCH',
  body: { indicator: { value: { label: valueLabel, value } } },
  path: `sections/${section}/categories/${category}/targets/${target}/indicator/${indicator}`,
  onSuccess: storeIndicators
});

export const storeIndicators = data => ({
  type: 'STORE_INDICATORS',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_INDICATORS' ? action.payload : state);
