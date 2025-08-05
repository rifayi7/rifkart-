// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";
import addressReducer from "../slice/addressSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
