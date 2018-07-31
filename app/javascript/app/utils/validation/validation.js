import validateAllFieldsRequired from './all-required-validation';
import validateEmail from './email-validation';
import validatePassword from './password-validation';
import validatePasswordConfirmation from './password-confirmation-validation';

export const allFieldsRequired = (user, required) => ({
  condition: validateAllFieldsRequired(user, required),
  field: 'all',
  errorMessage: 'All fields are required'
});

export const isEmailValid = email => ({
  condition: validateEmail(email),
  field: 'email',
  errorMessage: 'Email is not valid'
});

export const isPasswordValid = password => ({
  condition: validatePassword(password),
  field: 'password',
  errorMessage: 'Password must have at least 6 characters'
});

export const isPasswordConfirmationValid = (
  password,
  passwordConfirmation
) => ({
  condition: validatePasswordConfirmation(password, passwordConfirmation),
  field: 'password_confirmation',
  errorMessage: 'Password and Password Confirmation do not match'
});

export const errorMessages = validations => {
  const messages = {};
  validations.forEach(e => {
    if (!e.condition) {
      messages[e.field] = messages[e.field]
        ? messages[e.field].concat(e.errorMessage)
        : [e.errorMessage];
    }
  });
  return messages;
};
