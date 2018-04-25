const { DEV_API } = process.env;

export async function getSectionsThunk(dispatch) {
  const sections = await fetch(
    `${DEV_API}/sections?includes[]=categories&includes[]=targets`
  ).then(function (response) {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  });
  dispatch({ type: 'GET_SECTIONS', payload: sections });
}

export default (state = [], action) =>
  (action.type === 'GET_SECTIONS' ? action.payload : state);
