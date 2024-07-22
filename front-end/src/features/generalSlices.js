import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: 4, // Default number of columns
};

export const gridLayoutSlice = createSlice({
  name: "gridLayout",
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      state.columns = action.payload;
    },
  },
});

export const { changeLayout } = gridLayoutSlice.actions;
export default gridLayoutSlice.reducer;
