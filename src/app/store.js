import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/auth/userSlice";
// import { cartSlice } from "../features/cart/cartSlice";
import { appApi } from "./appApi";

export const store = configureStore({
  reducer: {

    [userSlice.name]: userSlice.reducer,
    // [cartSlice.name]: cartSlice.reducer,
    [appApi.reducerPath]: appApi.reducer,

  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    appApi.middleware
  ])
});