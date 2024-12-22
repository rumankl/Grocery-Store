import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/auth/userSlice";

import { appApi } from "./appApi";

export const store = configureStore({
  reducer: {

    [userSlice.name]: userSlice.reducer,
    [appApi.reducerPath]: appApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    appApi.middleware
  ])
});