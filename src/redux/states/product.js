import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  page: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
  category: "",
  sort: "asc",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      state.products = [...action.payload];
    },
    updateProducts: (state, action) => ({ ...state, ...action.payload }),
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },

    removeAllProduct: (state) => initialState,
  },
});

export const {
  saveProducts,
  updateProducts,
  setCategory,
  setSort,
  removeAllProduct,
} = productSlice.actions;

export default productSlice.reducer;
