import { createSlice } from "@reduxjs/toolkit";
import actGetProductPrefix from "./act/actGetProductPrefix";
import TProduct from "src/customTypes/product";
import { TLoading } from "src/customTypes/shared";
// Define a type for the slice state
interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

// Define the initial state using that type
const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string")
        state.error = action.payload;
    });
  },
});

export { actGetProductPrefix };
export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
