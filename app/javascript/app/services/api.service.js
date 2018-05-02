const { API_URL } = process.env;

export const apiGet = (endpoint, getState) => {
  const token = getState().user.authentication_token;
  const email = getState().user.email;

  const configWithHeaders = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-User-Email': email,
      'X-User-Token': token
    })
  };
  return fetch(`${API_URL}/${endpoint}`, configWithHeaders);
};
