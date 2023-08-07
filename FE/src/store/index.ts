import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "../api/products";
import { categoryApi } from "../api/categories";
import { authApi } from "../api/auth";
import { contactApi } from "../api/contact";
import { cardApi } from "../api/card";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(authApi.middleware)
      .concat(contactApi.middleware)
      .concat(cardApi.middleware),
});
