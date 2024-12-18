import countries from "../../data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const regions = Array.from(
  new Set(countries.map((country) => country.region))
).sort((a, b) => {
  return a.localeCompare(b);
});

const filterPlaceholderText = "Filter by Region";
regions.unshift(filterPlaceholderText);

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
    filterByRegion: (state, action: PayloadAction<string>) => {
      if (action.payload === filterPlaceholderText) {
        state.countries = countries;
      } else {
        state.countries = countries.filter(
          (country) => country.region === action.payload
        );
      }
    },
  },
});

// actions
export const { search, filterByRegion } = countrySlice.actions;

// reducer for store configuration
export default countrySlice.reducer;

// selectors
export const selectCountries = (state: RootState) => state.countries.countries;
export const selectRegions = (state: RootState) => state.countries.regions;
