import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import product from "./slices/product";

const rootReducer = combineReducers({
  product,
  cart,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
