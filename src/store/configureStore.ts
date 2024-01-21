import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./reducers";

const makeStore = () => {
  const store = configureStore({
    reducer: combinedReducers,
  });

  return store;
};

const store = makeStore();

export default store;
