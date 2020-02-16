import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import redirectReducer from "./redirectReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  isLoggedIn: authReducer,
  user: userReducer,
  redirect: redirectReducer
});
export default rootReducer;
