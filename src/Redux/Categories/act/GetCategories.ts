import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TDataType = { id: number; image: string; title: string; prefix: string }[];

const GetCategoriesThunk = createAsyncThunk(
  "categories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await axios.get<TDataType>("/categories");
      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue(" n expected error ");
      }
    }
  }
);
export default GetCategoriesThunk;
