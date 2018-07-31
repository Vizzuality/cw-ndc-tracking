const { BASE_URL } = process.env;
const URL = `${BASE_URL}/users`;
const userEmail = localStorage.getItem('user');
const userToken = localStorage.getItem('CWTTT');

export async function editUser(user) {
  return fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-User-Email': userEmail,
      'X-User-token': userToken
    })
  }).then(function (response) {
    if (response.ok) return true;
    throw Error(response.statusText);
  });
}
