import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  id: null,
  email: "",
  name: "",
  lastName: "",
  age: 0,
  cart: "",
  role: "user",
};

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).user : DEFAULT_STATE;
})();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    removeUser: () => DEFAULT_STATE,
  },
});

export const { saveUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
