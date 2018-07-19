import { apiActionCreator, get } from '../services/api.service';

const path =
  'sections?includes[]=categories&includes[]=targets&includes[]=indicators';
// Remove the force attribute when the reducers are updated and the data has only one source
export async function getSectionsThunk(dispatch, getState, force = false) {
  const isSectionsEmpty = getState().sections.length === 0;
  if (isSectionsEmpty || force === true) {
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
