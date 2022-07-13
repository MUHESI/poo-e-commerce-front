import { validateEmail, validatePassword } from "./valid";

export const checkFormSignUp = (validForm, form_) => {
  let form = { ...form_ };
  let validForm_ = { ...validForm };

  const { email, password, confirmPassword, names } = form;
  const resEmail = validateEmail(email);
  validForm_ = { ...validForm_, email: resEmail };
  if (names.trim().length > 2) {
    validForm_ = { ...validForm_, names: true };
  } else validForm_ = { ...validForm_, names: false };
  if (password.length > 4 && validatePassword(password))
    validForm_ = { ...validForm_, password: true };
  else validForm_ = { ...validForm_, password: false };

  if (password.length > 4 && confirmPassword === password)
    validForm_ = { ...validForm_, confirmPassword: true };
  else validForm_ = { ...validForm_, confirmPassword: false };

  return validForm_;
};
