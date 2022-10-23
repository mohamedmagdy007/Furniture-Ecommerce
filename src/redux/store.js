import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cartUiShopping from "./slices/cartUiShopping";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi :cartUiShopping.reducer
  },
});
export default store;
