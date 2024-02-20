import React from "react";
import { Provider } from "react-redux";
import store from "@/store";

function app({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default app;
