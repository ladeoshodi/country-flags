import { Link, useParams } from "react-router";
import { selectCountry } from "../slices/countrySlice";
import { useAppSelector } from "../app/hooks";
import { selectIsDarkMode } from "../slices/themeSlice";

import { BiArrowBack } from "react-icons/bi";

import "../styles/country-details.scss";

function CountryDetail() {
  const { countryCode } = useParams<{ countryCode: string }>();

  const country = useAppSelector((state) => selectCountry(state, countryCode!));
  const isDarkMode = useAppSelector(selectIsDarkMode);

  return (
    <>
      <main
        className={`detail-page ${
          isDarkMode ? "detail-page-dark" : "detail-page-light"
        }`}
      >
        <div
          className="
        detail-nav"
        >
          <Link to="/">
            <button
              className={`back-btn ${
                isDarkMode ? "back-btn-dark" : "back-btn-light"
              }`}
            >
              <BiArrowBack /> Back
            </button>
          </Link>
        </div>
        <div className="country-detail">
          <div className="country-flag">
            <img src={country?.flag} alt={country?.name} />
          </div>
          <div className="country-info">
            <h3>{country?.name}</h3>
            <div className="country-details">
              <div className="country-details-left">
                <p>
                  <span>Native Name:</span> {country?.nativeName}
                </p>
                <p>
                  <span>Population:</span> {country?.population}
                </p>
                <p>
                  <span>Region:</span> {country?.region}
                </p>
                <p>
                  <span>Sub Region:</span> {country?.subregion}
                </p>
                <p>
                  <span>Capital:</span> {country?.capital}
                </p>
              </div>
              <div className="country-details-right">
                <p>
                  <span>Top Level Domain:</span> {country?.topLevelDomain}
                </p>
                <p>
                  <span>Currencies:</span>{" "}
                  {country?.currencies
                    ?.map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {country?.languages
                    .map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="border-countries">
              <p>Border Countries:</p>
              <div className="border-countries-list">
                {country?.borders?.map((border) => (
                  <button key={border}>{border}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetail;
