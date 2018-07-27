const { BASE_URL } = process.env;
const LOGIN_URL = `${BASE_URL}/users/sign_in`;
const SIGNUP_URL = `${BASE_URL}/users`;

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

export async function signUp(user) {
  return fetch(SIGNUP_URL, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }).then(function (response) {
    if (response.ok) return true;
    if (response.status === 422) return false;
    throw Error(response.statusText);
  });
}
