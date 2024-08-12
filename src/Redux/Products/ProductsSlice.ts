import { createSlice } from "@reduxjs/toolkit";
import GetProductsThunck from "./act/GetProducts";
import GetAllProductsThunck from "./act/GetAllProducts";

export interface IProductsState {
  items: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity?: number;
    discount: string;
    max: number;
  }[];
  AllItems: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity?: number;
    discount: string;
    max: number;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: IProductsState = {
  items: [],
  AllItems: [],
  loading: "pending",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetAllProductsThunck.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllProductsThunck.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.AllItems = action.payload;
      }
    });
    builder.addCase(GetAllProductsThunck.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    //Find products based on categories
    builder.addCase(GetProductsThunck.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetProductsThunck.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.items = action.payload;
      }
    });
    builder.addCase(GetProductsThunck.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { CleanUp } = productsSlice.actions;
export { GetProductsThunck, GetAllProductsThunck };
export default productsSlice.reducer;
