import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// actions
export const { toggleDarkMode } = themeSlice.actions;

// reducer for store configuration
export default themeSlice.reducer;

// theme selectors
export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;
