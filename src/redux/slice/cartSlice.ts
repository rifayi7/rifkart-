import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export type cartType = {
  id: string;
  name: string;
  size: string;
  quantity: number;
  image: string;
  price: number;
};

type cartState = {
  items: cartType[];
};

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartType>) => {
      const alreadyExist = state.items.find((p) => p.id === action.payload.id);
      if (alreadyExist) {
        alreadyExist.quantity += 1;
        console.log("trying to update quantiy");
      } else {
        state.items.push(action.payload);
      }
    },
    quantityReduceCart: (state, action: PayloadAction<cartType>) => {
      const findItem = state.items.find((p) => p.id === action.payload.id);
      if (findItem) {
        if (findItem.quantity === 1) {
          console.log("removing last quantity");

          state.items = state.items.filter((p) => p.id !== action.payload.id);
        }
        if (findItem.quantity > 1) {
          findItem.quantity -= 1;
        }
      }
    },
    ItemRemove: (state, action: PayloadAction<cartType>) => {
      state.items = state.items.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addToCart, quantityReduceCart, ItemRemove } = cartSlice.actions;
export default cartSlice.reducer;
