import { PiMagnifyingGlass } from "react-icons/pi";

import { useAppSelector } from "../app/hooks";
import { selectCountries, selectRegions } from "../slices/countrySlice";
import { selectIsDarkMode } from "../slices/themeSlice";

function Home() {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const regions = useAppSelector(selectRegions);
  const countries = useAppSelector(selectCountries);

  return (
    <main className={`home ${isDarkMode ? "home-dark" : "home-light"}`}>
      <section className="home-nav">
        <div className="search">
          <PiMagnifyingGlass />
          <input type="search" placeholder="Search for a country..." />
        </div>
        <div className="filter">
          <select>
            <option value="Filter by Region">Filter by Region</option>
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
