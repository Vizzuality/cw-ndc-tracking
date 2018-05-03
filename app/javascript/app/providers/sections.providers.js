import { LOGIN } from 'router';

export async function getSections(dispatch, getState) {
  const isUserLogged = getState().user.email || localStorage.getItem('user');
  const isSectionsEmpty = getState().sections.length === 0;
  if (!isUserLogged) {
    dispatch({ type: LOGIN });
  } else if (isSectionsEmpty) {
    dispatch(fetchSections());
  }
}

// Action Creators
export const fetchSections = () => ({
  type: 'API',
  path: '/sections?includes[]=categories&includes[]=targets',
  onSuccess: storeSections
});

export const storeSections = data => ({
  type: 'STORE_SECTIONS',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_SECTIONS' ? action.payload : state);
