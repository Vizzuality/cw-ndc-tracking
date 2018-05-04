const { API_URL } = process.env;

export const get = 'GET';
export const patch = 'PATCH';

export const apiRequest = (endpoint, method, getState) => {
  const token =
    getState().user.authentication_token || localStorage.getItem('CWTTT');
  const email = getState().user.email || localStorage.getItem('user');

  const configWithHeaders = {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-User-Email': email,
      'X-User-Token': token
    })
  };
  return fetch(`${API_URL}/${endpoint}`, configWithHeaders);
};

export const apiActionCreator = (path, method, successAction) => ({
  type: 'API',
  path,
  method,
  onSuccess: successAction
});
