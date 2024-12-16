import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import countryReducer from "../slices/countrySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countryReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
