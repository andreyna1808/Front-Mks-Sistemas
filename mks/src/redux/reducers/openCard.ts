import { createSlice } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
  name: "isOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    ListenCardOpen: (state) => {
      state.isOpen = true
    },
    ListenCardClose: (state) => {
      state.isOpen = false
    },
  }
});
export default slice.reducer;

// Actions
export const { ListenCardOpen, ListenCardClose } = slice.actions