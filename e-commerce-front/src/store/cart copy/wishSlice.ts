import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "src/customTypes/shared";

type TWishState = {
  items: number[];
  loading: TLoading;
  error: string | null;
};

const initialState: TWishState = {
  items: [],
  loading: "idle",
  error: null,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const id = action.payload;
      if (state.items.indexOf(id) === -1) {
        state.items.push(id);
      }
    },
    removeFromWishList: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item !== id);
    },
  },
});
export const getItem = (state: TWishState, id: number) => {
  return state.items.includes(id);
};
export const { addToWishList, removeFromWishList } = wishSlice.actions;
export default wishSlice.reducer;
