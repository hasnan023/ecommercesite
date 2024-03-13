// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducers";


const store = configureStore({
  reducer: { cart: cartReducer}  // Pass the combined reducer directly
  // Add middleware, devtools configuration, etc. here if needed
});

export default store;
