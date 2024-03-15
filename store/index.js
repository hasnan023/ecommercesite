// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducers";
import userReducer from "./reducers/userReducers";

const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
  // Pass the combined reducer directly
  // Add middleware, devtools configuration, etc. here if needed
});

export default store;
