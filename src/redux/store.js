import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./states/user";
import productReducer from "./states/product";
import cartReducer from "./states/cart";

const persistanceStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: [persistanceStorageMiddleware],
});
