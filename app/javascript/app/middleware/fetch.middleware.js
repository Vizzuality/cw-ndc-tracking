import { LOGIN } from 'router';
import { apiRequest } from '../services/api.service';

export default store => next => action => {
  const isApiAction = action.type === 'API';
  const isUserLoggedIn =
    store.getState().user.email || localStorage.getItem('user');
  if (isApiAction) {
    if (!isUserLoggedIn) {
      store.dispatch({ type: LOGIN });
    } else {
      apiRequest(action.path, action.method, store.getState)
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
