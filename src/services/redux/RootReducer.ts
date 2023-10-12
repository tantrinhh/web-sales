import { combineReducers } from "@reduxjs/toolkit";
import product from "./slices/product";

const rootReducer = combineReducers({
  product,
  //   map,
  //   attack,
  //   service,
  //   scoreboard,
  //   allteam,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
