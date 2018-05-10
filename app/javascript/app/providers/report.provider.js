import { apiActionCreator, get } from '../services/api.service';

const path =
  'sections?includes[]=categories&includes[]=targets&includes[]=indicators';
// Remove the force attribute when the reducers are updated and the data has only one source
export async function getReportThunk(dispatch) {
  dispatch(fetchAll());
}

// Action Creators
export const fetchAll = () => apiActionCreator(path, get, storeReport);

export const storeReport = data => ({
  type: 'STORE_REPORT',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_REPORT' ? action.payload : state);
