import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice
const slice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    GetProducts: (state, action) => {
      state.products = action.payload
    },
  }
});
export default slice.reducer;

// Actions
export const {
  GetProducts,
} = slice.actions;
