// Navigation pre-fetching thunks
export async function getSectionsThunk(dispatch) {
  const sections = await fetch(
    'http://localhost:3000/api/v1/sections?includes[]=categories&includes[]=targets'
  ).then(function (response) {
    return response.json();
  });
  dispatch({ type: 'GET_SECTIONS', payload: sections });
}

export default (state = [], action) =>
  (action.type === 'GET_SECTIONS' ? action.payload : state);
