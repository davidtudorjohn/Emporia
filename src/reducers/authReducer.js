const authReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (state = true);
    case "LOG_OUT":
      localStorage.removeItem("auth-token");
      return (state = false);
    default:
      return state;
  }
};
export default authReducer;
