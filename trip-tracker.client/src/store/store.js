import { configureStore } from "@reduxjs/toolkit";
import tripReducers from "../reducers/tripReducers";
import logger from "redux-logger";

const preloadedState = {};

const reducer = {
  trips: tripReducers,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});

export default store;
