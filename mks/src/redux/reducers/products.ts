import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice
const slice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: false
  },
  reducers: {
    GET_PRODUCTS: (state) => {
      state.loading = true;
      state.error = null;
    },
    GET_PRODUCTS_SUCCESS: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    GET_PRODUCTS_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export default slice.reducer;

// Actions
const {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} = slice.actions;

export function GetProducts() {
  return async (dispatch) => {
    dispatch(GET_PRODUCTS());
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_GET_PRODUCTS);
      const products = await res.data;
      dispatch(GET_PRODUCTS_SUCCESS(products));
    } catch (error) {
      return dispatch(GET_PRODUCTS_ERROR(error));
    }
  };
}