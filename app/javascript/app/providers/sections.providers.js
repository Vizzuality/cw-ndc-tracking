const { API_URL } = process.env;

export async function getSectionsThunk(dispatch, getState) {
  const { sections } = getState();

  if (sections.length === 0) {
    const apiSections = await fetch(
      `${API_URL}/sections?includes[]=categories&includes[]=targets`
    ).then(function (response) {
      if (response.ok) return response.json();
      throw Error(response.statusText);
    });
    dispatch({ type: 'GET_SECTIONS', payload: apiSections });
  } else {
    dispatch({ type: 'GET_SECTIONS', payload: sections });
  }
}

export default (state = [], action) =>
  (action.type === 'GET_SECTIONS' ? action.payload : state);
