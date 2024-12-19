import { useParams } from "react-router";
import { selectCountry } from "../slices/countrySlice";
import { useAppSelector } from "../app/hooks";

function CountryDetail() {
  const { countryName } = useParams<{ countryName: string }>();

  const country = useAppSelector((state) => selectCountry(state, countryName!));
  console.log(country);

  return (
    <>
      <main>
        <div className="back-button"></div>
        <h1>Country Detail</h1>
      </main>
    </>
  );
}

export default CountryDetail;
