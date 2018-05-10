import { apiActionCreator, get } from '../services/api.service';

const path =
  'sections/tracking/categories?includes[]=targets&includes[]=indicators';

export async function getTrackingThunk(dispatch) {
  dispatch(fetchTracking());
}

// Action Creators
export const fetchTracking = () => apiActionCreator(path, get, storeTracking);

export const storeTracking = data => ({
  type: 'STORE_TRACKING',
  payload: data
});

// Reducer
export default (state = [], action) =>
  (action.type === 'STORE_TRACKING' ? { categories: action.payload } : state);
