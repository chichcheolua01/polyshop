import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
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
import { cartSlice } from "../cartSlice/cart";
import { contactApi } from "../api/contact";

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    cart: persistedReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(authApi.middleware)
      .concat(contactApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default persistStore(store);
