const { API_URL } = process.env;

export const get = 'GET';
export const patch = 'PATCH';

const getHeaders = (getState, localStorage) =>
  new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-User-Email': localStorage.getItem('user'),
    'X-User-Token': localStorage.getItem('CWTTT')
  });

export const apiGet = (endpoint, getState) => {
  const configWithHeaders = {
    method: 'GET',
    headers: getHeaders(getState, localStorage)
  };
  return fetch(`${API_URL}/${endpoint}`, configWithHeaders);
};

export const apiPatch = (endpoint, getState, body) => {
  const configWithHeaders = {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: getHeaders(getState, localStorage)
  };
  return fetch(`${API_URL}/${endpoint}`, configWithHeaders);
};

export const apiActionCreator = (path, method, successAction, body = null) => ({
  type: 'API',
  path,
  method,
  onSuccess: successAction,
  ...(body ? { body } : {})
});
