import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const noCountries = countries.status || countries.message;
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

  const SearchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      };
      // console.log(countries.region);
      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };
  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    if (data.status === 404) {
      setCountries([]);
      return;
    }
    setCountries(data);
    // console.log(data);
  };
  // console.log(countries);

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    if (selectValue.trim()) {
      // console.log(selectValue)
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectValue}`
        );
        const data = await response.json();
        if (selectValue === "All") {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }
        setCountries(data);
      };
      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(selectRegion);

  const showDetails = (code) => {
    console.log("code", code);
    navigate(`/${code}`);
  };
  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app_body">
              <div className="inputs">
                <div className={`search_input ${darkMode ? "darkMode" : ""}`}>
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search for a country"
                    ref={countriesInputRef}
                    onChange={SearchCountries}
                  />
                </div>

                <div className={`select_region ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef} onChange={selectRegion}>
                    <option>All</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                </div>
              </div>

              <div className="countries">
                {!noCountries ? (
                  countries.map((country) => (
                    <Country
                      darkMode={darkMode}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      flag={country.flags.svg}
                      name={country.name.common}
                      showDetails={() => showDetails(country)}
                      code={country.postalCode}
                    />
                  ))
                ) : (
                  <p style={{ fontSize: "30px", color: "red" }}>
                    No Countries Found
                  </p>
                )}
                {/* <Country darkMode={darkMode} /> */}
              </div>
            </div>
          }
        />
        <Route
          path="/:countrycode"
          element={<CountryDetails darkMode={darkMode} countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
