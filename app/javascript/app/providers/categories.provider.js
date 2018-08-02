import { apiActionCreator, get } from 'services/api.service';

export async function getCategoriesThunk(dispatch, getState) {
  const section = getState().location.pathname.split('/')[1];
  const path = `sections/${section}/categories?includes[]=targets`;
  dispatch(fetchCategories(path));
}

// Action Creators
export const fetchCategories = path =>
  apiActionCreator(path, get, storeCategories);
export const storeCategories = data => ({
  type: 'STORE_CATEGORIES',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_CATEGORIES' ? action.payload : state);
