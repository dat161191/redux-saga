import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/photoSlice";

// rootReducer được hiểu là state có photos là initialValues là mảng
const rootReducer = {
  photos: photoReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
