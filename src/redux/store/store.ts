// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
