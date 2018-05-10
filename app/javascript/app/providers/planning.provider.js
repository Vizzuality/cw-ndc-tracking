import { apiActionCreator, get } from '../services/api.service';

const path =
  'sections/planning/categories?includes[]=targets&includes[]=indicators';

export async function getPlanningThunk(dispatch) {
  dispatch(fetchPlanning());
}

// Action Creators
export const fetchPlanning = () => apiActionCreator(path, get, storePlanning);

export const storePlanning = data => ({
  type: 'STORE_PLANNING',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_PLANNING' ? { categories: action.payload } : state);
