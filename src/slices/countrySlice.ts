import countries from "../../data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const regions = Array.from(
  new Set(countries.map((country) => country.region))
).sort((a, b) => {
  return a.localeCompare(b);
});

const initialState = {
  countries: countries,
  regions: regions,
};

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.countries = countries.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

// actions
export const { search } = countrySlice.actions;

// reducer for store configuration
export default countrySlice.reducer;

// selectors
export const selectCountries = (state: RootState) => state.countries.countries;
export const selectRegions = (state: RootState) => state.countries.regions;
