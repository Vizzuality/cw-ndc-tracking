const { BASE_URL } = process.env;
const URL = `${BASE_URL}/users`;

export async function editUser(user) {
  return fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }).then(function (response) {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  });
}
