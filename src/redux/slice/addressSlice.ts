import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type addressType = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone: number;
  addressline: string;
  city: string;
  state: string;
  zip: number;
};

type addressState = {
  items: addressType[];
  errors: string;
};

const initialState: addressState = {
  items: [],
  errors: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<addressType>) => {
      const fname = state.items.find((p) => p.fname === action.payload.fname);
      const phone = state.items.find((p) => p.phone === action.payload.phone);
      const email = state.items.find((p) => p.email === action.payload.email);
      const alreadyExist = Boolean(fname || phone || email);
      if (!alreadyExist) {
        state.errors = "";
        state.items.push(action.payload);
      } else {
        state.errors = "same address exist ";
      }
    },
    updateAddress: (state, action: PayloadAction<addressType>) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addAddress, updateAddress } = addressSlice.actions;
export default addressSlice.reducer;
