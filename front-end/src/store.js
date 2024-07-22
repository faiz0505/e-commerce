import { configureStore } from "@reduxjs/toolkit";
import gridLayoutSlice from "./features/generalSlices";
import drawerSlice from "./features/drawerSlice";
export default configureStore({
  reducer: {
    gridLayout: gridLayoutSlice,
    drawer: drawerSlice,
  },
});
