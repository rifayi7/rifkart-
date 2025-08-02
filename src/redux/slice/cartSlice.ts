import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export type cartType = {
  id: number;
  name: string;
  size: string;
  quantity: number;
  image: string;
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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
