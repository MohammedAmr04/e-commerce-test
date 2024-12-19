// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import TProduct from "src/customTypes/product";
// import { RootState } from "@store/index";

// type TResponse = TProduct[];

// const actItemsCart = createAsyncThunk(
//   "cart/actItemsCart",
//   async (_, thunkAPI) => {
//     const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
//     const { cartSlice } = getState() as RootState;
//     const itemsConcat = cartSlice.items.map((item) => `id=${item}`).join("&");
//     if (!itemsConcat.length) {
//       return fulfillWithValue([]);
//     }

//     try {
//       const response = await axios.get<TResponse>(
//         `http://localhost:3000/products?${itemsConcat}`
//       );
//       console.log(response.data, itemsConcat);
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return rejectWithValue(error.response?.data.message || error.message);
//       } else {
//         return rejectWithValue("An unexpected error occurred");
//       }
//     }
//   }
// );
// export default actItemsCart;
