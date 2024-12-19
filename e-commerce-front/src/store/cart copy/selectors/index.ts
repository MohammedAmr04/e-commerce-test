import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const getCountItemsCart = createSelector(
  (state: RootState) => state.wishSlice.items,
  (items) => {
    const totalQuantity: number = items.length;
    return totalQuantity;
  }
);

export { getCountItemsCart };
