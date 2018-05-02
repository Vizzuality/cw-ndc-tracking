export async function getSections(dispatch, getState) {
  if (!getState().user.email) {
    dispatch({ type: 'location/LOGIN' });
  } else {
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
