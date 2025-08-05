import type { ProductType } from "../slice/productSlice";
import type { addressType } from "../slice/addressSlice";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type checkoutType = {
  products: ProductType[];
  address: addressType | null;
};

const initialState: checkoutType = {
  products: [],
  address: null,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addProductToCheckout: (state, action: PayloadAction<checkoutType>) => {},
  },
});

export const { addProductToCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
