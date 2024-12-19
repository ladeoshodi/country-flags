import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CountryDetail from "./components/CountryDetail.tsx";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryCode" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
