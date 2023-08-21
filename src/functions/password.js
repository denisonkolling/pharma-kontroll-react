export const checkPassword = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8}$/;
  return regex.test(password);
};