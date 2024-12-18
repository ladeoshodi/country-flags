import { PiMagnifyingGlass } from "react-icons/pi";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  filterByRegion,
  search,
  selectCountries,
  selectRegions,
} from "../slices/countrySlice";
import { selectIsDarkMode } from "../slices/themeSlice";
import { useState } from "react";

function Home() {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const regions = useAppSelector(selectRegions);
  const countries = useAppSelector(selectCountries);

  const dispatch = useAppDispatch();

  const [currentRegion, setCurrentRegion] = useState(regions[0]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className={`home ${isDarkMode ? "home-dark" : "home-light"}`}>
      <section className="home-nav">
        <div className={"search"}>
          <PiMagnifyingGlass className="search-icon" />
          <input
            className={isDarkMode ? "search-dark" : "search-light"}
            type="search"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              dispatch(search(e.target.value));
            }}
          />
        </div>
        <div className="filter">
          <select
            value={currentRegion}
            onChange={(e) => {
              setCurrentRegion(e.target.value);
              dispatch(filterByRegion(e.target.value));
            }}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="countries">
        {countries.map((country) => {
          return (
            <article
              key={country.alpha3Code}
              className={`country-card ${
                isDarkMode ? "country-card-dark" : "country-card-light"
              }`}
            >
              <img src={country.flag} alt={country.name} />
              <div className="country-details">
                <h3>{country.name}</h3>
                <p>
                  <strong>Population:</strong>{" "}
                  <span className="light-font-text">{country.population}</span>
                </p>
                <p>
                  <strong>Region:</strong>{" "}
                  <span className="light-font-text">{country.region}</span>
                </p>
                <p>
                  <strong>Capital:</strong>{" "}
                  <span className="light-font-text">{country.capital}</span>
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
