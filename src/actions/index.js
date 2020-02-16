export const addProduct = product => {
  return { type: "ADD_PRODUCT", payload: product };
};
export const removeProduct = product => {
  return { type: "REMOVE_PRODUCT", payload: product };
};
export const logIn = () => {
  return { type: "LOG_IN" };
};
export const logOut = () => {
  return { type: "LOG_OUT" };
};
export const setUser = user => {
  return { type: "SET_USER", payload: user };
};
export const unsetUser = () => {
  return { type: "UNSET_USER" };
};
export const setRedirect = path => {
  return { type: "SET_REDIRECT", payload: path };
};
export const clearRedirect = () => {
  return { type: "CLEAR_REDIRECT" };
};
