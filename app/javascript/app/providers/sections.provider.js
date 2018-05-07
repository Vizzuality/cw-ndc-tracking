import { apiActionCreator, get } from '../services/api.service';

const path =
  'sections?includes[]=categories&includes[]=targets&includes[]=indicators';

export async function getSectionsThunk(dispatch, getState) {
  const isSectionsEmpty = getState().sections.length === 0;
  if (isSectionsEmpty) {
    dispatch(fetchSections());
  }
}

// Action Creators
export const fetchSections = () => apiActionCreator(path, get, storeSections);

export const storeSections = data => ({
  type: 'STORE_SECTIONS',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_SECTIONS' ? action.payload : state);
