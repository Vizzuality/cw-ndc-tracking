export default (state = [], action) =>
  (action.type === 'GET_SECTIONS' ? action.payload : state);

// const GET_SECTIONS = 'root/GET_SECTIONS';

// const sectionsReducer = {
//   [GET_SECTIONS](state, action) {
//     return { ...state, all: action.payload };
//   }
// }

// // Navigation pre-fetching thunks
// export async function getSectionsThunk(dispatch) {
//   dispatch({
//     type: GET_SECTIONS,
//     payload: sections
//   });
// }
