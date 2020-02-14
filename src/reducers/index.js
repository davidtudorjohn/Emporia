import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  isLoggedIn: authReducer
});
export default rootReducer;
