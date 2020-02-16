const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let exists = state.findIndex(item => item.name === action.payload.name);

      if (exists !== -1) {
        let currentQuantity = state[exists].quantity;
        return [
          { ...action.payload, quantity: currentQuantity + 1 },
          ...state.filter(i => i.name !== action.payload.name)
        ];
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_PRODUCT":
      let existsing = state.findIndex(
        item => item.name === action.payload.name
      );

      let existingQuantity = state[existsing].quantity;
      if (existingQuantity > 1) {
        return [
          { ...action.payload, quantity: existingQuantity - 1 },
          ...state.filter(i => i !== action.payload)
        ];
      } else {
        return [...state.filter(i => i !== action.payload)];
      }
    default:
      return state;
  }
};
export default cartReducer;
