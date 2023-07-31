import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCart: (state, action) => action.payload,
    updateCart: (state, action) => ({ ...state, ...action.payload }),
    removeAllProductsInCart: (state) => {
      state.products = [];
      return state;
    },
  },
});

export const { saveCart, removeAllProductsInCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
