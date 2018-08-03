const { BASE_URL } = process.env;
const EDIT_URL = `${BASE_URL}/users`;
const GET_URL = `${BASE_URL}/users/profile`;
const userEmail = localStorage.getItem('user');
const userToken = localStorage.getItem('CWTTT');

export async function editUser(user) {
  return fetch(EDIT_URL, {
    method: 'PUT',
    body: JSON.stringify({ user }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-User-Email': userEmail,
      'X-User-token': userToken
    })
  }).then(response => {
    if (response.ok) return {};
    if (response.status === 422) return response.json();
    throw Error(response.statusText);
  });
}

export async function getUser() {
  return fetch(GET_URL, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-User-Email': userEmail,
      'X-User-token': userToken
    })
  }).then(response => {
    if (response.ok) return response.json();
    throw Error(response.statusText);
  });
}
