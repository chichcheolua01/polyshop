import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { productApi } from "../api/products";
import { categoryApi } from "../api/categories";
import { authApi } from "../api/auth";

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(authApi.middleware),
});
