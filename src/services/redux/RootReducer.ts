import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";

import product from "./slices/product";
import compare from "./slices/compare/compare";
const rootReducer = combineReducers({
  product,
  cart,
  compare,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
