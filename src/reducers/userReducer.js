const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return (state = action.payload);
    case "UNSET_USER":
      return (state = null);
    default:
      return state;
  }
};
export default userReducer;
