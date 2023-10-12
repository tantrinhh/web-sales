import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../RootReducer";
import { thunkExtras } from "./thunk-extras";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: thunkExtras } }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
