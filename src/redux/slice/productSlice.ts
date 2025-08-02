import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("http://localhost:5174/products");
  const data = await res.json();
  return data;
});
export const addProduct = createAsyncThunk(
  "products/add",
  async (newProduct: ProductType, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const existingProducts = state.products.items;
    const itemFound = existingProducts.find(
      (p) => p.id === newProduct.id || p.name === newProduct.name
    );

    if (!itemFound) {
      try {
        const res = await fetch("http://localhost:5174/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });

        if (!res.ok) {
          return rejectWithValue("Server error: could not add product");
        }

        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    } else {
      return rejectWithValue("found same item");
    }
  }
);

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
    addProductsOld: (state, action: PayloadAction<ProductType>) => {
      const alreadyExist = state.items.find(
        (p) => p.id === action.payload.id && p.name === action.payload.name
      );
      if (!alreadyExist) {
        state.items.push(action.payload);
        console.log(" not find smae");
        console.log(action.payload);
      } else {
        console.log(" find smae");
      }
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
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addProduct.fulfilled,
        (state, action: PayloadAction<ProductType>) => {
          state.loading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addProductsOld } = productSlice.actions;

export default productSlice.reducer;
