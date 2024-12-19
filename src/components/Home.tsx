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
import { Link } from "react-router";

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
              dispatch(
                search({ query: e.target.value, region: currentRegion })
              );
            }}
          />
        </div>
        <div
          className={`filter ${isDarkMode ? "filter-dark" : "filter-light"}`}
        >
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
            <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
              <article
                className={`country-card ${
                  isDarkMode ? "country-card-dark" : "country-card-light"
                }`}
              >
                <img src={country.flag} alt={country.name} />
                <div className="country-details-home">
                  <h3>{country.name}</h3>
                  <p>
                    <strong>Population:</strong>{" "}
                    <span className="light-font-text">
                      {country.population}
                    </span>
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
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
