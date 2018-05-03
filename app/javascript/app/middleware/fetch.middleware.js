import { apiGet } from '../services/api.service';

export default store => next => action => {
  const isApiAction = action.type === 'API';
  if (isApiAction) {
    apiGet(action.path, store.getState)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        store.dispatch(action.onSuccess(data));
      });
  }
  return next(action);
};
