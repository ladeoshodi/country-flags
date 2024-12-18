import { PiMagnifyingGlass } from "react-icons/pi";

import { useAppSelector } from "../app/hooks";
import { selectRegions } from "../slices/countrySlice";

function Home() {
  const regions = useAppSelector(selectRegions);

  return (
    <main className="home">
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
        <h1>Countries</h1>
        <p>Welcome to the Home page!</p>
      </section>
    </main>
  );
}

export default Home;
