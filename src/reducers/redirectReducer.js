const redirectReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_REDIRECT":
      return (state = action.payload);
    default:
      return state;
  }
};
export default redirectReducer;
