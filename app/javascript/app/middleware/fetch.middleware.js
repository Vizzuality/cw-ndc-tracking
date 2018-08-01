import { LOGIN } from 'router';
import { apiGet, apiPatch } from '../services/api.service';

export default store => next => action => {
  const isApiAction = action.type === 'API';
  const isUserLoggedIn =
    localStorage.getItem('user') && localStorage.getItem('CWTTT');
  if (isApiAction) {
    if (!isUserLoggedIn) {
      store.dispatch({ type: LOGIN });
    } else {
      (action.method === 'PATCH'
        ? apiPatch(action.path, store.getState, action.body)
        : apiGet(action.path, store.getState))
        .then(response => {
          if (response.status === 401) {
            store.dispatch({ type: LOGIN });
          }
          return response.json();
        })
        .then(data => data && store.dispatch(action.onSuccess(data)));
    }
  }
  return next(action);
};
