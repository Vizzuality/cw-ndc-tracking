import {
  allFieldsRequired,
  isPasswordValid,
  isEmailValid,
  isPasswordConfirmationValid,
  errorMessages
} from './validation/validation';

export default user => {
  const validations = [
    allFieldsRequired(user),
    isPasswordValid(user.password),
    isEmailValid(user.email),
    isPasswordConfirmationValid(user.password, user.password_confirmation)
  ];
  return errorMessages(validations);
};
