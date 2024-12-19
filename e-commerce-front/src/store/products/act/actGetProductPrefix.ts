import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TProduct from "src/customTypes/product";

type TResponse = TProduct[];
const actGetProductPrefix = createAsyncThunk(
  "products/actGetProductPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:3000/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);
export default actGetProductPrefix;
