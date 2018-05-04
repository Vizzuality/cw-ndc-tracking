const { API_URL } = process.env;

const getHeaders = (getState, localStorage) =>
  new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-User-Email': getEmail(getState, localStorage),
    'X-User-Token': getToken(getState, localStorage)
  });
const getToken = (getState, localStorage) =>
  getState().user.authentication_token || localStorage.getItem('CWTTT');
const getEmail = (getState, localStorage) =>
  getState().user.email || localStorage.getItem('user');

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
    body,
    headers: getHeaders(getState, localStorage)
  };
  return fetch(`${API_URL}/${endpoint}`, configWithHeaders);
};
