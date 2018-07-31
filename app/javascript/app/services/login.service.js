const { BASE_URL } = process.env;
const LOGIN_URL = `${BASE_URL}/users/sign_in`;
const NEW_PASSWORD_URL = `${BASE_URL}/users/password`;
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
  }).then(response => {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  });
}

export async function requestNewPassword(email) {
  if (email) {
    return fetch(NEW_PASSWORD_URL, {
      method: 'POST',
      body: JSON.stringify({
        user: { email }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    }).then(response => {
      // Paranoid mode in Devise returns a 201 even if the email is not found in the db
      if (response.ok) return true;
      throw Error(response.statusText);
    });
  }
  return false;
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
