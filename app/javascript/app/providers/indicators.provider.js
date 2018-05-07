import { apiActionCreator, get, patch } from '../services/api.service';

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
) => {
  const body = { indicator: { value: { label: valueLabel, value } } };
  const path = `sections/${section}/categories/${category}/targets/${target}/indicators/${indicator}`;
  return apiActionCreator(path, patch, storeIndicator, body);
};

export const storeIndicators = data => ({
  type: 'STORE_INDICATORS',
  payload: data
});

export const storeIndicator = data => ({
  type: 'STORE_INDICATOR',
  payload: data
});

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'STORE_INDICATORS': {
      return action.payload;
    }
    case 'STORE_INDICATOR': {
      const updatedState = state;
      const indicatorToReplace = state.find(
        i => i.slug === action.payload.slug
      );
      if (indicatorToReplace) {
        const index = state.indexOf(indicatorToReplace);
        updatedState[index] = action.payload;
      }
      return updatedState;
    }
    default: {
      return state;
    }
  }
};
