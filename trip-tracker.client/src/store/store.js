import { configureStore } from "@reduxjs/toolkit";
//import tripReducers from "../reducers/tripReducers";
import tripReducer from "../features/trip/tripSlice";
import logger from "redux-logger";

const preloadedState = {};

const reducer = {
  trips: tripReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});

export default store;
