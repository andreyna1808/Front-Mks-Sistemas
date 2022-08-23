import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice
const slice = createSlice({
  name: "isOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    LISTEN_CARD_OPEN: (state, action) => {
      state.isOpen = action.payload;
    },
    LISTEN_CARD_CLOSE: (state, action) => {
      state.isOpen = action.payload;
    },
  }
});
export default slice.reducer;

// Actions
const {
  LISTEN_CARD_OPEN,
  LISTEN_CARD_CLOSE
} = slice.actions;

export function OpenCard() {
  return async (dispatch) => {
    try {
      dispatch(LISTEN_CARD_OPEN(true));
    } catch (error) {
      // Nothing
    }
  };
}

export function CloseCard() {
  return async (dispatch) => {
    try {
      dispatch(LISTEN_CARD_CLOSE(false));
    } catch (error) {
      // Nothing
    }
  };
}