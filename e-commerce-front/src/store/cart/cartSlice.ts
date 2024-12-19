import { createSlice } from "@reduxjs/toolkit";
import { getCountItemsCart } from "@store/cart/selectors";
import { TLoading } from "src/customTypes/shared";
type TCartState = {
  items: number[];
  ProductFullInfo: { [key: string]: number };
  loading: TLoading;
  error: string | null;
};

const initialState: TCartState = {
  items: [],
  ProductFullInfo: {},
  loading: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items.indexOf(id) === -1) {
        state.items.push(id);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item !== id);
    },
    getItemsPrice: (state, action) => {
      const { quantity, price, id } = action.payload;
      state.ProductFullInfo[id] = quantity * price;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(actItemsCart.pending, (state) => {
  //     state.loading = "pending";
  //     state.error = null;
  //   });
  //   builder.addCase(actItemsCart.fulfilled, (state, action) => {
  //     state.loading = "succeeded";
  //     state.ProductFullInfo = action.payload;
  //   });
  //   builder.addCase(actItemsCart.rejected, (state, action) => {
  //     state.loading = "failed";
  //     if (action.payload && typeof action.payload === "string")
  //       state.error = action.payload;
  //   });
  // },
});

export { getCountItemsCart };
export const { addToCart, removeFromCart, getItemsPrice } = cartSlice.actions;
export default cartSlice.reducer;
