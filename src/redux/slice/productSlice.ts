import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("http://localhost:5174/products");
  const data = await res.json();
  return data;
});

export type ProductType = {
  id: string; // or number if your API returns number
  name: string;
  brand: string;
  category: string;
  price: number;
  color: string;
  quantity: number;
  stock: number;
  size: string[];
  description: string;
  image: string;
  newAdded: boolean;
};

type productsState = {
  items: ProductType[];
  loading: boolean;
  error: string | null;
};

const initialState: productsState = {
  items: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.loading = false;
          state.items = action.payload;

          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
