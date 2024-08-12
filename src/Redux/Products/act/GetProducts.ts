import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TDataType = {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity?: number;
  discount: string;
  max: number;
}[];
const GetProductsThunck = createAsyncThunk(
  "products",
  async (prefix: string, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await axios.get<TDataType>(`/products?cat_prefix=${prefix}`);
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
export default GetProductsThunck;
