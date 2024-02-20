// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducers";


const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers here if needed
});

const store = configureStore({
  reducer: rootReducer, // Pass the combined reducer directly
  // Add middleware, devtools configuration, etc. here if needed
});

export default store;
