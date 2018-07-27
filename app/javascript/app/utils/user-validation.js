export default user => {
  const allFieldsFilled = Object.keys(user).every(k => user[k]);
  const passConfirmationIsOk = user.password === user.password_confirmation;
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = user.email && user.email.match(emailregex);
  const passwordValid = user.password && user.password.length > 5;
  const errors = [
    {
      condition: allFieldsFilled,
      errorMessage: 'All fields are required'
    },
    {
      condition: emailValid,
      errorMessage: 'Email is not valid'
    },
    {
      condition: passwordValid,
      errorMessage: 'Password must have at least 6 characters'
    },
    {
      condition: passConfirmationIsOk,
      errorMessage: 'Password and Password Confirmation do not match'
    }
  ];
  const errorMessages = [];
  errors.forEach(e => {
    if (!e.condition) errorMessages.push(e.errorMessage);
  });
  return errorMessages;
};
