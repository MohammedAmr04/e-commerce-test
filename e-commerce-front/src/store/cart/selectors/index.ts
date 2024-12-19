import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const getCountItemsCart = createSelector(
  (state: RootState) => state.cartSlice.items,
  (items) => {
    const totalQuantity: number = items.length;
    return totalQuantity;
  }
);

export { getCountItemsCart };
