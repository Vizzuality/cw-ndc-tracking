const { BASE_URL } = process.env;
const LOGIN_URL = `${BASE_URL}/users/sign_in`;
const NEW_PASSWORD_URL = `${BASE_URL}/users/password`;

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
      if (response.ok) return true;
      throw Error(response.statusText);
    });
  }
  return false;
}
