import {
  allFieldsRequired,
  isPasswordValid,
  isEmailValid,
  isPasswordConfirmationValid,
  errorMessages
} from './validation/validation';

export const editDataErrorMessages = (user, required) => {
  const validations = [
    allFieldsRequired(user, required),
    isEmailValid(user.email)
  ];
  return errorMessages(validations);
};

export const editPasswordErrorMessages = (user, required) => {
  const validations = [
    allFieldsRequired(user, required),
    isPasswordValid(user.password),
    isPasswordConfirmationValid(user.password, user.password_confirmation)
  ];
  return errorMessages(validations);
};
