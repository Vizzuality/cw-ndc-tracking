export default (user, required) => {
  const fieldNotRequired = k =>
    (required && required.length > 0 ? !required.includes(k) : false); // All fields required by default
  return Object.keys(user).every(k => fieldNotRequired(k) || user[k]);
};
