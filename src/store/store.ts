import { configureStore } from "@reduxjs/toolkit";
import { FaydaApiSlice } from "./api/fayda";
import { AuthApiSlice } from "./api/auth";
import { ProductsSlice } from "./api/products";
import { RequestsSlice } from "./api/requests";
import userReducer from "./state/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [FaydaApiSlice.reducerPath]: FaydaApiSlice.reducer,
    [AuthApiSlice.reducerPath]: AuthApiSlice.reducer,
    [ProductsSlice.reducerPath]: ProductsSlice.reducer,
    [RequestsSlice.reducerPath]: RequestsSlice.reducer,
  },
  middleware: (get) =>
    get().concat(
      FaydaApiSlice.middleware,
      AuthApiSlice.middleware,
      ProductsSlice.middleware,
      RequestsSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
