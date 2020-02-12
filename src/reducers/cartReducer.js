const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let exists = state.findIndex(item => item.name === action.payload.name);

      if (exists !== -1) {
        let currentQuantity = state[exists].quantity;
        return [
          // { ...state[exists].quantity++ },
          ...state.filter(i => i.name !== action.payload.name),
          { ...action.payload, quantity: currentQuantity + 1 }
        ];
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_PRODUCT":
      return [...state.filter(p => p !== action.payload)];
    default:
      return state;
  }
};
export default cartReducer;
