import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
const CountryDetails = ({ darkMode, countries }) => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let toplevelDomin;
  let currencies = [];
  let languages = [];
  let border = [];

  countries.forEach((country) => {
    // console.log("country.postalCode)
    if (country.postalCode === params.countryCode) {
      name = country.name.common;
      population = country.population;
      region = country.region;
      capital = country.capital;
      flagImg = country.flags.svg;
      nativeName = country.name.common;
      subregion = country.subregion;
      // console.log(country.name);
    }
  });

  return (
    <div className="country-details">
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>
      <div className="country_details-body">
        <div className="img_container">
          <img src={flagImg} alt="backpage" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Native Name :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                Population :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Region :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {region}
                </span>
              </p>
              <p>
                sub region :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {subregion}
                </span>
              </p>
            </div>
            <div className="right_info">
              <p>
                Capital :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {capital}
                </span>
              </p>

              <p>
                Currencies:
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
              <p>
                Languages :
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Test
                </span>
              </p>
            </div>
          </div>
          Border Countries:
          <div className={`border_country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border_country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border_country ${darkMode ? "darkMode" : ""}`}>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
