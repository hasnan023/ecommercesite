import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import index from "./index";

function provider({children}) {
  return (
    <Provider store={index}>
    {children}
    </Provider>
  );
}

export default provider;
