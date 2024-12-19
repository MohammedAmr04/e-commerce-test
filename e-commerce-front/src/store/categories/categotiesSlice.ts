import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import TCategory from "src/customTypes/categore";
import { TLoading } from "src/customTypes/shared";
// Define a type for the slice state
interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

// Define the initial state using that type
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string")
        state.error = action.payload;
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
