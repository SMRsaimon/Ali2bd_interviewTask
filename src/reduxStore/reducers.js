import { combineReducers } from "redux";
import product from "./Product/getProductDetails/reducer";
const rootReducer = combineReducers({
  product,
});

export default rootReducer;
