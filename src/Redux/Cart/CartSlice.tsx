import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  CartItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    max: number;
  }[];
  FavItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
    max: number;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: IProductsState = {
  CartItem: [],
  FavItem: [],
  loading: "pending",
  error: null,
};
const productsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCard: (state, action) => {
      let isexist = false;
      state.CartItem.forEach((p) => {
        if (p.id == action.payload.id) {
          if (p.Quantity) {
            p.Quantity += 1;
          }
          isexist = true;
        }
      });
      if (!isexist) {
        state.CartItem.push(action.payload);
      }
    },
    DeleteItemFromCard: (state, action) => {
      state.CartItem = state.CartItem.filter((e) => e.id !== action.payload);
    },
    AddItemToFavList: (state, action) => {
      let isexist = false;
      state.FavItem.forEach((p) => {
        if (p.id == action.payload.id) {
          isexist = true;
        }
      });
      if (!isexist) {
        state.FavItem.push(action.payload);
      }
    },
  },
});

export const { AddItemToCard, DeleteItemFromCard, AddItemToFavList } =
  productsSlice.actions;
export default productsSlice.reducer;
