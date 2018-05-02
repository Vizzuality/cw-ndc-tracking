export async function userData(password, email) {
  const response = await fetch('http://localhost:3000/users/sign_in', {
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
  });

  const data = await response.json();
  return data;
}

// User Reducer
export default (state = {}, action) =>
  (action.type === 'SET_USER' ? action.payload : state);
