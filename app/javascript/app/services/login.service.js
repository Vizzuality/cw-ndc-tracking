const { BASE_URL } = process.env;
const LOGIN_URL = `${BASE_URL}/users/sign_in`;
const LOGOUT_URL = `${BASE_URL}/users/sign_out`;

export async function login(password, email) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify({
      user: {
        password,
        email
      }
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }).then(function (response) {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  });
}

export async function logout() {
  return fetch(LOGOUT_URL, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }).then(function (response) {
    if (response.ok) return true;
    throw Error(response.statusText);
  });
}
