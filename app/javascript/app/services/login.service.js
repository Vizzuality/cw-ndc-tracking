const URL = 'http://localhost:3000/users/sign_in';

export async function login(password, email) {
  return fetch(URL, {
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
