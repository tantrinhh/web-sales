import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import compare from "./slices/compare";
import product from "./slices/product";
const rootReducer = combineReducers({
  product,
  cart,
  compare,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
