import { LOGIN } from 'router';
import { apiGet, apiPatch } from '../services/api.service';

export default store => next => action => {
  const isApiAction = action.type === 'API';
  const isUserLoggedIn =
    store.getState().user.email || localStorage.getItem('user');
  if (isApiAction) {
    if (!isUserLoggedIn) {
      store.dispatch({ type: LOGIN });
    } else {
      (action.method === 'PATCH'
        ? apiPatch(action.path, store.getState, action.body)
        : apiGet(action.path, store.getState))
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          store.dispatch(action.onSuccess(data));
        });
    }
  }
  return next(action);
};
