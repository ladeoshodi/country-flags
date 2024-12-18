import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIsDarkMode, toggleDarkMode } from "../slices/themeSlice";

function Navbar() {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();

  return (
    <nav className={`navbar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}>
      <h3>Where in the world?</h3>
      <button
        className={`dark-mode-btn ${
          isDarkMode ? "dark-mode-btn-dark" : "dark-mode-btn-light"
        }`}
        onClick={() => {
          dispatch(toggleDarkMode());
        }}
      >
        {isDarkMode ? <BsMoonFill /> : <BsMoon />} Dark Mode
      </button>
    </nav>
  );
}

export default Navbar;
