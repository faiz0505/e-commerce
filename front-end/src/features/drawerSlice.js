import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    value: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
