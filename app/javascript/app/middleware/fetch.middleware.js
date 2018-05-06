import { apiGet, apiPatch } from '../services/api.service';

export default store => next => action => {
  const isApiAction = action.type === 'API';
  if (isApiAction) {
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
  return next(action);
};
