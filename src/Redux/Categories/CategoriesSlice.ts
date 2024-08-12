import { createSlice } from "@reduxjs/toolkit";
import GetCategoriesThunk from "./act/GetCategories";

export interface ICategoriesState {
  recorord: { id: number; image: string; title: string; prefix: string }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: ICategoriesState = {
  recorord: [],
  loading: "pending",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCategoriesThunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetCategoriesThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.recorord = action.payload;
      }
    });
    builder.addCase(GetCategoriesThunk.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

// export const { CleanCategories } = categoriesSlice.actions;
export { GetCategoriesThunk };
export default categoriesSlice.reducer;
